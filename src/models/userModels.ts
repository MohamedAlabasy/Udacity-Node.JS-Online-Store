import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import Client from '../database';

export type users = {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    password: string,
    token: string,
}

export class UserModels {
    // #=======================================================================================#
    // #			                            Register                                       #
    // #=======================================================================================#
    async register(newUser: users): Promise<users> {
        try {
            const hashPassword = bcrypt.hashSync(newUser.password, 10);
            const sqlQuery = 'INSERT INTO users (email,first_name, last_name, password,token) VALUES($1, $2, $3,$4,null) RETURNING *'
            const DBConnection = await Client.connect()
            const result = await DBConnection.query(sqlQuery, [newUser.email.toLocaleLowerCase(), newUser.first_name, newUser.last_name, hashPassword])
            const user = result.rows[0]
            DBConnection.release()
            return user
        } catch (error) {
            throw new Error(`Couldn't add ${newUser.first_name} ${newUser.last_name}} because Error: ${error}`)
        }
    }

    // #=======================================================================================#
    // #			                            login                                          #
    // #=======================================================================================#
    async login(newUser: users): Promise<users> {
        try {
            let sqlQuery = 'SELECT * FROM users WHERE email=($1)'
            const DBConnection = await Client.connect()
            const result = await DBConnection.query(sqlQuery, [newUser.email.toLocaleLowerCase()])
            let user = result.rows[0]

            if (user === null) {
                throw new Error(`No user with this email = ${newUser.email}`)
            }

            let IsValidPassword = bcrypt.compareSync(newUser.password, user.password);
            if (!IsValidPassword) {
                throw new Error(`invalid password`)
            } else {
                // to add token to router
                user.token = jwt.sign({ id: user._id, email: user.email }, process.env.ACCESS_TOKEN_SECRET as string, {
                    expiresIn: 86400 //for 24 hour
                });
                sqlQuery = 'UPDATE users SET token = ($1) WHERE email=($2)'
                await DBConnection.query(sqlQuery, [user.token, user.id]);
            }
            DBConnection.release();
            return user;
        } catch (error) {
            throw new Error(`Couldn't add ${newUser.first_name} ${newUser.last_name}} because Error: ${error}`)
        }
    }

    // #=======================================================================================#
    // #			                       get User by id                                      #
    // #=======================================================================================#
    async getUserByID(id: string): Promise<users> {
        try {
            let sqlQuery = 'SELECT * FROM users WHERE id=($1)'
            const DBConnection = await Client.connect()
            const result = await DBConnection.query(sqlQuery, [id])
            const user = result.rows[0]
            DBConnection.release();

            if (user === null) {
                throw new Error(`No user with this id = ${id}`)
            }

            return user;
        } catch (error) {
            throw new Error(`Couldn't find user with this id =${id} because Error: ${error}`)
        }
    }

    // #=======================================================================================#
    // #			                               logout                                      #
    // #=======================================================================================#
    async logout(id: string): Promise<users> {
        try {
            let sqlQuery = 'UPDATE users SET token = null WHERE id=($1)'
            const DBConnection = await Client.connect()
            const result = await DBConnection.query(sqlQuery, [id]);
            const user = result.rows[0]
            DBConnection.release();

            if (user === null) {
                throw new Error(`No user with this id = ${id}`)
            }

            return user;
        } catch (error) {
            throw new Error(`Couldn't find user with this id =${id} because Error: ${error}`)
        }
    }

}
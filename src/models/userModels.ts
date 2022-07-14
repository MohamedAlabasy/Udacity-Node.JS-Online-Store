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
    async create(newUser: users): Promise<users> {
        try {
            const hashPassword = bcrypt.hashSync(newUser.password, 10);
            const sqlQuery = 'INSERT INTO users (email,first_name, last_name, password,token) VALUES($1, $2, $3,$4,null) RETURNING *'
            const DBConnection = await Client.connect()
            const result = await DBConnection.query(sqlQuery, [newUser.email, newUser.first_name, newUser.last_name, hashPassword])
            const user = result.rows[0]
            DBConnection.release()
            return user
        } catch (error) {
            throw new Error(`Couldn't add ${newUser.first_name} ${newUser.last_name}} because Error: ${error}`)
        }
    }


    async index(): Promise<users[]> {
        try {
            const conn = await Client.connect() //start connection
            const sql = 'SELECT * FROM users' //query
            const result = await conn.query(sql) //set query on DB
            conn.release() //close connection
            return result.rows; //return result
        }
        catch (error) {
            throw Error(`database error : ${error}`)
        }
    }
}
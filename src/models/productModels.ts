import { Request } from 'express';

import Client from '../database';
import validateRequest from '../utilities/validateRequest';


export type product = {
    id: number,
    name: string,
    price: number,
    category_id: number,
}

export class UserModels {
    // #=======================================================================================#
    // #			                              create                                       #
    // #=======================================================================================#
    async create(request: Request): Promise<product> {
        validateRequest(request);
        try {
            const sqlQuery = 'INSERT INTO users (name,price, category_id) VALUES($1, $2, $3) RETURNING *'
            const DBConnection = await Client.connect()
            const result = await DBConnection.query(sqlQuery, [request.body.name, request.body.price, request.body.category_id])
            const user = result.rows[0]
            DBConnection.release()
            return user
        } catch (error) {
            throw new Error(`Couldn't add ${request.body.name} because Error: ${error}`)
        }
    }
    // #=======================================================================================#
    // #			                        get product by id                                  #
    // #=======================================================================================#
    async show(request: Request): Promise<product> {
        validateRequest(request);
        try {
            let sqlQuery = 'SELECT * FROM users WHERE id=($1)'
            const DBConnection = await Client.connect()
            const result = await DBConnection.query(sqlQuery, [request.params.id])
            const user = result.rows[0]
            DBConnection.release();

            if (!user) {
                throw new Error(`No user with this id = ${request.params.id}`)
            }

            return user;
        } catch (error) {
            throw new Error(`Couldn't find user with this id = ${request.params.id} because Error: ${error}`)
        }
    }
    // #=======================================================================================#
    // #			                         get all User                                      #
    // #=======================================================================================#
    async index(request: Request): Promise<product[]> {
        validateRequest(request);
        try {
            let sqlQuery = 'SELECT * FROM users'
            const DBConnection = await Client.connect()
            const result = await DBConnection.query(sqlQuery)
            console.log(result.rows);
            const user = result.rows;

            DBConnection.release();

            if (!user) {
                throw new Error('No users to show')
            }

            return user;
        } catch (error) {
            throw new Error(`Couldn't find users because Error: ${error}`)
        }
    }
}
import { Request } from 'express';

import Client from '../database';
import validateRequest from '../utilities/validateRequest';


export type orders = {
    id: number,
    status: string,
    quantity: number,
    product_id: number,
    user_id: number,
}

export class ProductModels {
    // #=======================================================================================#
    // #			                              create                                       #
    // #=======================================================================================#
    async create(request: Request): Promise<orders> {
        validateRequest(request);
        try {
            const sqlQuery = 'INSERT INTO orders (status,quantity, product_id,user_id) VALUES($1, $2, $3, $4) RETURNING *'
            const DBConnection = await Client.connect()
            const result = await DBConnection.query(sqlQuery, [request.body.status, request.body.quantity, request.body.product_id, request.body.user_id])
            const user = result.rows[0]
            DBConnection.release()
            return user
        } catch (error) {
            throw new Error(`Couldn't add ${request.body.name} because Error: ${error}`)
        }
    }
    // #=======================================================================================#
    // #			                        get all user orders                                #
    // #=======================================================================================#
    async getAllUserOrder(request: Request): Promise<orders[]> {
        validateRequest(request);
        try {
            let sqlQuery = 'SELECT * FROM orders where user_id=($1)'
            const DBConnection = await Client.connect()
            const result = await DBConnection.query(sqlQuery, [request.body.user_id])
            console.log(result.rows);
            const user = result.rows;

            DBConnection.release();

            if (!user) {
                throw new Error(`No orders to show for user ${request.body.user_id}`)
            }

            return user;
        } catch (error) {
            throw new Error(`Couldn't find orders show for user ${request.body.user_id} because Error: ${error}`)
        }
    }
}
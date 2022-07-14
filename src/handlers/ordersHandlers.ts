import { Request, Response, NextFunction } from 'express';
import { OrderModels } from '../models/ordersModels'


const newProduct = new OrderModels()
// #=======================================================================================#
// #			                           create                                          #
// #=======================================================================================#
export const create = async (request: Request, response: Response, next: NextFunction) => {
    await newProduct.create(request)
        .then(orderData => {
            response.json({
                status: 1,
                data: {
                    id: orderData.id,
                    status: orderData.status,
                    quantity: orderData.quantity,
                    user_id: orderData.user_id,
                    product_i: orderData.product_id
                }
            })
        }).catch(error => {
            next(error)
        })
}

// #=======================================================================================#
// #			                        get all user orders                                #
// #=======================================================================================#
export const index = async (request: Request, response: Response, next: NextFunction) => {
    await newProduct.getAllUserOrder(request)
        .then(orderData => {
            response.json({
                status: 1,
                count: orderData.length,
                data: orderData.map((data) => {
                    return {
                        id: data.id,
                        status: data.status,
                        quantity: data.quantity,
                        user_id: data.user_id,
                        product_i: data.product_id
                    }
                })
            })
        }).catch(error => {
            next(error)
        })
}

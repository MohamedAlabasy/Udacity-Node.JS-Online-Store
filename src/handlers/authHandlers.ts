import { Request, Response, NextFunction } from 'express';
import { users, UserModels } from '../models/userModels'

import validateRequest from '../utilities/validateRequest';

const newUser = new UserModels()

// #=======================================================================================#
// #			                            login                                          #
// #=======================================================================================#


export const show = async (request: Request, response: Response, next: NextFunction) => {
    const worlds = await newUser.index()
    response.json({
        status: 1,
        data: worlds
    })
}


// #=======================================================================================#
// #			                            login                                          #
// #=======================================================================================#
export const login = async (request: Request, response: Response, next: NextFunction) => {
    validateRequest(request);
    await newUser.create(request.body)
        .then(userData => {
            response.json({
                status: 1,
                token: userData.token,
                data: {
                    id: userData.id,
                    email: userData.email,
                    first_name: userData.first_name,
                    last_name: userData.last_name,
                }
            })
        }).catch(error => {
            next(error)
        })
}

// #=======================================================================================#
// #			                            Register                                       #
// #=======================================================================================#
export const register = async (request: Request, response: Response, next: NextFunction) => {
    validateRequest(request);
    await newUser.create(request.body)
        .then(userData => {
            response.json({
                status: 1,
                data: {
                    id: userData.id,
                    email: userData.email,
                    first_name: userData.first_name,
                    last_name: userData.last_name,
                }
            })
        }).catch(error => {
            next(error)
        })
}

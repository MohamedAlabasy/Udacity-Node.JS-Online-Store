import { Request, Response, NextFunction } from 'express';
import { UserModels } from '../models/userModels'

import validateRequest from '../utilities/validateRequest';

const newUser = new UserModels()
// #=======================================================================================#
// #			                            Register                                       #
// #=======================================================================================#
export const register = async (request: Request, response: Response, next: NextFunction) => {
    validateRequest(request);
    await newUser.register(request.body)
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
// #=======================================================================================#
// #			                            login                                          #
// #=======================================================================================#
export const login = async (request: Request, response: Response, next: NextFunction) => {
    validateRequest(request);
    await newUser.login(request.body)
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
// #			                       get User by id                                      #
// #=======================================================================================#
export const getUserByID = async (request: Request, response: Response, next: NextFunction) => {
    validateRequest(request);
    await newUser.getUserByID(request.params.id)
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
// #			                            logout                                         #
// #=======================================================================================#
export const logout = async (request: Request, response: Response, next: NextFunction) => {
    validateRequest(request);
    await newUser.logout(request.params.id)
        .then(_ => {
            response.json({
                status: 1,
                data: 'logout successful'
            })
        }).catch(error => {
            next(error)
        })
}

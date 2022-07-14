import { Request, Response, NextFunction } from 'express';
import { users, UserModels } from '../models/userModels'

const newUser = new UserModels()

// #=======================================================================================#
// #			                            login                                          #
// #=======================================================================================#
export const create = async (request: Request, response: Response, next: NextFunction) => {
    const worlds = await newUser.create()
    response.json({
        status: 1,
        data: worlds,
        msg: 'hello world'
    })
}

export const show = async (request: Request, response: Response, next: NextFunction) => {
    const worlds = await newUser.index()
    response.json({
        status: 1,
        data: worlds
    })
}

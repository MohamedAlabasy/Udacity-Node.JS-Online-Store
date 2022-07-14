import { Request, Response, NextFunction } from 'express';

// #=======================================================================================#
// #			                            login                                          #
// #=======================================================================================#
export const test = (request: Request, response: Response, next: NextFunction) => {
    response.json({
        msg: 'hello world'
    })
}

import { Router } from 'express';


const auth: Router = Router()

auth.get('/', (request, response, next) => {
    response.json({
        msg: 'hello'
    })
})


export default auth;
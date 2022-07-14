import { Router } from 'express';

import {
    login,
    register,
    getUserByID
} from '../../handlers/authHandlers'

const auth: Router = Router()

auth.post('/login', login);
auth.post('/register', register);
auth.get('/:id', getUserByID);


export default auth;
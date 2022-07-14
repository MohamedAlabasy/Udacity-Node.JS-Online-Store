import { Router } from 'express';

import {
    login,
    register,
    getUserByID,
    logout
} from '../../handlers/authHandlers'

const auth: Router = Router()

auth.post('/login', login);
auth.post('/register', register);
auth.get('/:id', getUserByID);
auth.post('/logout/:id', logout);


export default auth;
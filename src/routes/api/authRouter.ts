import { Router } from 'express';

import {
    login,
    register,
} from '../../handlers/authHandlers'

const auth: Router = Router()

// auth.get('', show);
auth.post('/login', login);
auth.post('/register', register);


export default auth;
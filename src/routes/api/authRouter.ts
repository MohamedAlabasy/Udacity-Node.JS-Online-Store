import { Router } from 'express';

import {
    create,
    show
} from '../../handlers/authHandlers'

const auth: Router = Router()

auth.get('', show);
auth.post('', create);


export default auth;
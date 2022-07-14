import { Router } from 'express';

import {
    test
} from '../../handlers/authHandlers'

const auth: Router = Router()

auth.get('/', test)


export default auth;
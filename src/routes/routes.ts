import express from 'express';

import auth from './api/authRouter';
import product from './api/productRouter';


const routes = express.Router()

routes.use('/user', auth);
routes.use('/product', product);


export default routes;
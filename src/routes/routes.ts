import express from 'express';

import auth from './api/authRouter';
import product from './api/productRouter';
import order from './api/orderRouter';


const routes = express.Router()

routes.use('/user', auth);
routes.use('/product', product);
routes.use('/order', order);


export default routes;
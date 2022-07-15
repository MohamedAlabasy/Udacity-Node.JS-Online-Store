import { Router } from 'express';
import { body, param } from 'express-validator';

import {
    create,
    getAllUserOrder
} from '../../handlers/ordersHandlers'
import checkTokens from '../../utilities/checkTokens';

const order: Router = Router()

order.post('/create', checkProductData(), create);
order.get('/show/:user_id', checkTokens, checkID(), getAllUserOrder);


// #=======================================================================================#
// #			                         check function                                    #
// #=======================================================================================#
function checkID() {
    return [
        param("user_id").exists().withMessage('you must enter order id').isInt().withMessage('invalid order id')
    ]
}


function checkProductData() {
    return [
        body('status')
            .exists().withMessage('you must enter name')
            .isIn(['active', 'complete']).withMessage('priority must be in active or complete'),

        // body('quantity')
        //     .exists().withMessage('you must enter quantity')
        //     .isInt().withMessage('invalid quantity'),

        // body('product_id')
        //     .exists().withMessage('you must enter product_id')
        //     .isInt().withMessage('invalid product_id'),

        body('user_id')
            .exists().withMessage('you must enter user_id')
            .isInt().withMessage('invalid user_id'),
    ]
}



export default order;
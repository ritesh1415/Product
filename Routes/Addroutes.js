import express from 'express';
import { authenticate } from '../Middlewares/authmiddle.js';
import { authorizeRoles } from '../Middlewares/roleauth.js';
import { addProduct,  deleteProduct, updateProduct } from '../Controllers/Addcontroller.js';

const router = express.Router();

router.post('/add', authenticate, authorizeRoles('Admin'),addProduct);
router.put('/:id',authenticate, authorizeRoles('Admin'),updateProduct)
router.delete('/:id',authenticate, authorizeRoles('Admin'),deleteProduct)



export default router;

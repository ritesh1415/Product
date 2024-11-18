import express from 'express';
import { authenticate } from '../Middlewares/authmiddle.js';
import { authorizeRoles } from '../Middlewares/roleauth.js';
import { getAllUsers, getUser, registerUser } from '../Controllers/Registercontroller.js';

const router = express.Router();

router.post('/register', registerUser);
router.get('/getAllUsers', authenticate, authorizeRoles('Admin'), getAllUsers);


router.get('/:id', authenticate, authorizeRoles('Admin'), getUser);

export default router;

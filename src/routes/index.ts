import {Router} from 'express';
import userRoutes from './users';

const mainRoutes = Router();

mainRoutes.use('/users', userRoutes);

export default mainRoutes;

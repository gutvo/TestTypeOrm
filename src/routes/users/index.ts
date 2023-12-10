import {Router} from 'express';
import UserController from 'src/controllers/users';

const userRoutes = Router();

userRoutes.route('')
	.post(new UserController().handleCreate)
	.put(new UserController().handleUpdate)
	.delete(new UserController().handleDelete);

userRoutes.route('/').get(new UserController().handleShow);

export default userRoutes;

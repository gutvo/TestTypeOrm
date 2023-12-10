import {type Request, type Response} from 'express';
import createUser from './create';
import updateUser from './update';
import deleteUser from './delete';
import showUser from './show';

export default class UserController {
	handleCreate = async (req: Request, res: Response) => createUser(req, res);
	handleUpdate = async (req: Request, res: Response) => updateUser(req, res);
	handleDelete = async (req: Request, res: Response) => deleteUser(req, res);
	handleShow = async (req: Request, res: Response) => showUser(req, res);
}

import {type Request, type Response} from 'express';
import {type CreateUserDto} from './types';
import translate from 'src/language';
import {hash} from 'bcrypt';
import userRepo from '@Migrations/entities/user';

export default async function createUser(req: Request, res: Response) {
	try {
		const data = req.body as CreateUserDto;

		if (!data) {
			return res.status(400).json({message: translate({id: 'user-create-no-data'})});
		}

		const existUser = await userRepo.exist({where: {email: data.email}});

		if (existUser) {
			return res.status(202).json({message: translate({id: 'user-create-exist'})});
		}

		const encriptPassword = await hash(data.password, 10);

		const {email, id, name} = await userRepo.save({...data, password: encriptPassword});

		return res.status(201).json({message: translate({id: 'user-create-success'}), data: {email, id, name}});
	} catch (error) {
		return res.status(500).json({message: translate({id: 'server-error'})});
	}
}

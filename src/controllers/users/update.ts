import {type Request, type Response} from 'express';
import {type UpdateUserDto} from './types';
import translate from 'src/language';
import {hash} from 'bcrypt';
import userRepo from '@Migrations/entities/user';

export default async function updateUser(req: Request, res: Response) {
	try {
		const data = req.body as UpdateUserDto;

		let user = await userRepo.findOne({where: {id: data?.id}});

		if (!user) {
			return res.status(404).json({message: translate({id: 'user-update-not-found'})});
		}

		const encriptPassword = await hash(data.password, 10);

		user = {...data, password: encriptPassword};

		await userRepo.save(user);

		return res.json({message: translate({id: 'user-update-success'})});
	} catch (error) {
		return res.status(500).json(translate({id: 'server-error'}));
	}
}

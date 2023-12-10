import userRepo from '@Migrations/entities/user';
import {type Request, type Response} from 'express';
import translate from 'src/language';

export default async function deleteUser(req: Request, res: Response) {
	try {
		const id = req.query.id as string;

		const user = await userRepo.findOne({where: {id}});

		if (!user) {
			return res.status(404).json({message: translate({id: 'user-delete-not-found'})});
		}

		await userRepo.delete(user);
		return res.json({message: translate({id: 'user-delete-success'})});
	} catch (error) {
		return res.status(500).json({message: translate({id: 'server-error'})});
	}
}

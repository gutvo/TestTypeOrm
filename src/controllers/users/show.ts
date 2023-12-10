import userRepo from '@Migrations/entities/user';
import {type Request, type Response} from 'express';
import translate from 'src/language';

export default async function showUser(req: Request, res: Response) {
	try {
		const user = await userRepo.findOne({where: {id: req.params.id}});

		if (!user) {
			return res.status(404).json({message: translate({id: 'user-show-not-found'})});
		}

		return res.json({data: user});
	} catch (error) {
		return res.status(500).json({message: translate({id: 'server-error'})});
	}
}

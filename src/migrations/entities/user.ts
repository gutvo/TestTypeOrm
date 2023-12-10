import {User} from '@Entities/users';
import appDataSource from '..';

const userRepo = appDataSource.getRepository(User);

export default userRepo;

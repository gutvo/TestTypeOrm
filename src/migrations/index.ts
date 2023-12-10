import {DataSource} from 'typeorm';
import dotenv from 'dotenv';
import translate from 'src/language';

dotenv.config();

const appDataSource = new DataSource({
	type: 'mysql',
	host: 'localhost',
	port: parseInt(process.env.MYSQL_PORT!, 10),
	username: process.env.MYSQL_USER!,
	password: process.env.MYSQL_PASSWORD!,
	database: process.env.MYSQL_DB!,
	synchronize: process.env.SERVER_TYPE === 'dev',
	entities: [
		'./src/entities/**/*.ts',
	],
});

appDataSource.initialize()
	.then(() => {
		console.log(translate({id: 'database-iniciate-success'}));
	})
	.catch(err => {
		console.error(translate({id: 'database-iniciate-error'}));
	});

export default appDataSource;

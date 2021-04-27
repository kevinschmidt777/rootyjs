import { Sequelize } from 'sequelize';
import { systemConfig } from '../config';

/**
 * Init the Sequelize database instance separately.
 * Workaround, to import it into other files (models etc.).
 */

export const rootyDb = new Sequelize(
	systemConfig.databaseDb,
	systemConfig.databaseUser,
	systemConfig.databasePassword,
	{
		host: systemConfig.databaseHost,
		port: systemConfig.databasePort,
		dialect: 'mysql',
	}
);

/**
 * Connect the Database with Fastify and do a quick connection-check.
 */
const database = async () => {
	try {
		await rootyDb.authenticate();
		console.log('Database connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database: ' + error);
		process.exit();
	}
};

export default database;

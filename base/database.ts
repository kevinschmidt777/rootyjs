import { Sequelize } from 'sequelize';

/**
 * Init the Sequelize database instance separately.
 * Workaround, to import it into other files (models etc.).
 */

const databaseHost = 'localhost';
const databasePort = 3306;
const databaseDb = 'rootyjs';
const databaseUser = 'root';
const databasePassword = '';

export const rootyDb = new Sequelize(databaseDb, databaseUser, databasePassword, {
	host: databaseHost,
	port: databasePort,
	dialect: 'mysql',
});

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

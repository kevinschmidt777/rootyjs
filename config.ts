import { TypeSystemConfig } from './types/config';

/**
 * Global system settings, like timezone, database connection and server port.
 */
export const systemConfig: TypeSystemConfig = {
	serverPort: 3333, // Port where your RootyJS server will run on.
	timezone: 'Europe/Berlin', // Set the server timezone (E.g. Europe/Berlin).
	databaseType: 'mysql', // Your Database-type.
	databaseHost: 'localhost', // Database server host or ip.
	databasePort: 3306, // Database server port.
	databaseDb: 'rootyjs', // Database name.
	databaseUser: 'root', // Database username.
	databasePassword: '', // Database password.
};

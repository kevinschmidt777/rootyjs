import { Dialect } from 'sequelize';

export interface TypeSystemConfig {
	timezone: string;
	serverPort: number;
	databaseType: Dialect;
	databaseHost: string;
	databasePort: number;
	databaseDb: string;
	databaseUser: string;
	databasePassword: string;
}

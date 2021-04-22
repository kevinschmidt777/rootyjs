import fastify from 'fastify';
import dotenv from 'dotenv';
import cors from './base/cors';
import routes from './base/routes';
import database from './base/database';
import { systemSettings } from './base/system';

/**
 * This file is the root entry point for your RootyJS server.
 * You never have to change anything below here!
 */

// Load the .env environment variables
dotenv.config();

// Create fastify instance
const server = fastify();

// Register CORS config
server.register(cors);

// Load the routes
server.register(routes);

// Connect the database
server.register(database);

// Run the server
server.listen(systemSettings.serverPort, (err, address) => {
	// Something wrong?
	if (err) {
		server.log.error(err);
		process.exit(1);
	}

	// Set timezone
	process.env.TZ = systemSettings.timezone;

	// Return log
	console.log(`RootyJS server listening at: ${address}`);
});

// Export server instance for tests
export default server;

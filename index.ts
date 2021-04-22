import fastify from 'fastify';
import dotenv from 'dotenv';
import cors from './base/cors';
import routes from './base/routes';
import database from './base/database';

/**
 * This file is the root entry point for your RootyJS server.
 * You never have to change anything in here!
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
server.listen(process.env.PORT || 3000, (err, address) => {
	if (err) {
		server.log.error(err);
		process.exit(1);
	}
	console.log(`RootyJS server listening at: ${address}`);
});

// Export server instance for tests
export default server;

import fastify from 'fastify';
import dotenv from 'dotenv';
import routes from './base/routes';

/**
 * This file is the root entry point for your Rooty server.
 * You never have to change anything in here!
 */

// Load the .env environment variables
dotenv.config();

// Create fastify instance
const server = fastify();

// Load the routes
server.register(routes);

// Run the server
server.listen(process.env.PORT || 3000, (err, address) => {
	if (err) {
		server.log.error(err);
		process.exit(1);
	}
	console.log(`Rooty server listening at: ${address}`);
});

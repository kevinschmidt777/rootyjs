import { FastifyInstance } from 'fastify';

/**
 * Configuration for CORS (Cross-Origin Resource Sharing).
 * By default, CORS is allowed for all origins.
 * For production: add your client addresses here as an origins array: ['http://myFancyClient.com', ...].
 * @param fastify
 */
const cors = async (fastify: FastifyInstance) => {
	fastify.register(require('fastify-cors'), {
		origin: '*',
		methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
	});
};

export default cors;

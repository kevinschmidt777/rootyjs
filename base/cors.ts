import { FastifyInstance } from 'fastify';

/**
 * Configuration for CORS (Cross-Origin Resource Sharing).
 * By default, "localhost" is allowed for CORS requests.
 * For production: add your server and client addresses here as "origins".
 * If you want to allow any origin, simply set origin to "*" string.
 * @param fastify
 */
const cors = async (fastify: FastifyInstance) => {
	fastify.register(require('fastify-cors'), {
		origin: ['http://localhost'],
		methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
	});
};

export default cors;

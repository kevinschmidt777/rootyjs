import { FastifyReply, FastifyRequest } from 'fastify';

/**
 * A basic, simple test controller for a basic "/" GET route to return some json data (hello: world).
 */
class homeController {
	static async index(request: FastifyRequest, reply: FastifyReply) {
		return { hello: 'world' };
	}
}

export default homeController;

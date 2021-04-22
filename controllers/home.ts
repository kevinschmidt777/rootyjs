import { FastifyReply, FastifyRequest } from 'fastify';

/**
 * A basic, simple test controller for a basic "/" GET route to return some json data ({name: "RootyJS}).
 */
class homeController {
	static async index(request: FastifyRequest, reply: FastifyReply) {
		return { name: 'RootyJS' };
	}
}

export default homeController;

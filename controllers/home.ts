import { FastifyReply, FastifyRequest } from 'fastify';
import User from '../models/user';

/**
 * A basic, simple test controller for a basic "/" GET route to return some json data.
 */
class homeController {
	static async index(request: FastifyRequest, reply: FastifyReply) {
		// Insert Test User
		await User.create({
			email: 'kevin@kevinschmidt.info',
			password: 'TestPw',
		});
		return { name: 'RootyJS' };
	}
}

export default homeController;

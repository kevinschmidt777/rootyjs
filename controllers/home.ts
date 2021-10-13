import { FastifyReply, FastifyRequest } from 'fastify';
// @ts-ignore
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * A basic, simple test controller for a basic "/" GET route to return some json data.
 */
class HomeController {
	static async index(request: FastifyRequest, reply: FastifyReply) {
		// Insert Test User
		try {
			await prisma.users.create({
				data: {
					email: 'kevin@kswebentwicklung.de',
					password: 'test',
				},
			});
			return { name: 'RootyJS' };
		} catch (e) {
			return reply.status(409).send(e);
		}
	}
}

export default HomeController;

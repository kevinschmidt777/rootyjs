import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from 'fastify';

const authMiddleware = async (request: FastifyRequest, reply: FastifyReply, done: HookHandlerDoneFunction) => {
	/*
	// IF not auth:
	reply.code(401);
	throw new Error('ErRoR');
	*/
	done();
};

export default authMiddleware;

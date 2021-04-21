import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from 'fastify';

/**
 * Middleware for routes, that requires authentication.
 * @param request: the request :-).
 * @param reply: used for setting error codes for throwbacks.
 * @param done: Call done if middleware passes successfully.
 */
const authMiddleware = async (request: FastifyRequest, reply: FastifyReply, done: HookHandlerDoneFunction) => {
	/*
	// IF not auth:
	reply.code(401);
	throw new Error('ErRoR');
	*/
	done();
};

export default authMiddleware;

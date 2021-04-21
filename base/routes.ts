import { FastifyInstance, RouteOptions } from 'fastify';
import testController from '../controllers/test';
import authMiddleware from '../middlewares/auth';

/**
 * "Routes" contains all available routes for your Rooty API server.
 * They will redirect the request to a specific controller.
 * The controller will handle the request and return something.
 * @param fastify
 * @param options
 */
const routes = async (fastify: FastifyInstance, options: RouteOptions) => {
	fastify.get('/', { preHandler: [authMiddleware] }, testController.index);
};

export default routes;

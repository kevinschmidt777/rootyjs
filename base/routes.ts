import { FastifyInstance } from 'fastify';
// import authMiddleware from '../middlewares/auth';
import homeController from '../controllers/home';

/**
 * "Routes" contains all available routes for your Rooty API server.
 * They will redirect the request to a specific controller.
 * The controller will handle the request and return something.
 * @param fastify
 */
const routes = async (fastify: FastifyInstance) => {
	fastify.get('/', homeController.index);
	// fastify.get('/', { preHandler: [authMiddleware] }, homeController.index);
};

export default routes;

import { FastifyInstance } from "fastify";
import HomeController from "../controllers/home";
import authMiddleware from "../middlewares/auth";

export const homeRoutes = async (fastify: FastifyInstance) => {
  fastify.route({
    method: "GET",
    url: "/",
    preHandler: [authMiddleware],
    handler: HomeController.index,
  });
};

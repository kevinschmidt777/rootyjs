import { FastifyReply, FastifyRequest } from "fastify";
import { version } from "../../package.json";

/**
 * Basic home controller handling general routes.
 */
class HomeController {
  /**
   * Returns current version of api server.
   * @param request
   * @param reply
   * @returns
   */
  static async index(request: FastifyRequest, reply: FastifyReply) {
    return { version: version };
  }
}

export default HomeController;

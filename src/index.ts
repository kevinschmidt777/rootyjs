import fastify from "fastify";
import dotenv from "dotenv";
import { homeRoutes } from "./routes/home";

/**
 * This file is the root entry point for your RootyJS server.
 * Preload all defined routes here:
 */
const routes = [homeRoutes];

/**
 * You never have to change anything below here!!
 */

// Load the .env environment variables
dotenv.config();

// Create fastify instance
const server = fastify();

// Load the routes
routes.forEach((route) => server.register(route));

// Register CORS config
server.register(require("fastify-cors"), {
  origin: ["*"],
  methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
});

// Run the server
server
  // @ts-ignore
  .listen(process.env.PORT)
  .then((address) => console.log("RootyJS server listening at: " + address))
  .catch((error) => {
    server.log.error(error);
    process.exit(1);
  });

// Export server instance for tests
export default server;

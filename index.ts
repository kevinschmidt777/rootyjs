import fastify from 'fastify';

require('dotenv').config();
const server = fastify();

// Declare a route
server.get('/', (request, reply) => {
	reply.send({ hello: 'world' });
});

// Run the server!
server.listen(process.env.PORT || 3000, (err, address) => {
	if (err) {
		server.log.error(err);
		process.exit(1);
	}
	console.log(`Rooty server listening at: ${address}`);
});

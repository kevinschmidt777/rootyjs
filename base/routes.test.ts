import server from '../index';

describe('server basic route test', () => {
	test('responds with success on request GET /', async (done) => {
		const response = await server.inject({
			method: 'GET',
			url: '/',
		});
		expect(response.statusCode).toBe(200);
		expect(response.payload).toBe('{"hello":"world"}');
		done();
	});
});

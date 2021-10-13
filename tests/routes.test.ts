import server from '../index';

describe('Routes', () => {
	// @ts-ignore
	test('GET / response with simple test name', async (done) => {
		const response = await server.inject({
			method: 'GET',
			url: '/',
		});

		const result = JSON.stringify({ name: 'RootyJS' });

		expect(response.statusCode).toBe(409);
		expect(response.payload).toBe(result);
		await server.close();
		done();
	});
});

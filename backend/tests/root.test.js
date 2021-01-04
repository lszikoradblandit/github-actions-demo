const app = require('../app');
const request = require('supertest')(app);

test('GET /count debería responder el valor del contador', async () => {
    const response = await request.get('/count');
    expect(typeof parseInt(response.body.value)).toBe('number');
});

test('POST /count debería responder correctamente', async () => {
    const response = await request.post('/count').send({"counter": 1});
    expect(response.body.value).toBe("Contador actualizado")
})

test('GET / debería responder 404', async () => {
    const response = await request.get('/')
    expect(response.status).toBe(404);
})

test('GET /redis-hc debería responder 200', async () => {
    const response = await request.get('/redis-hc');
    console.log(response.body.connected);
    expect(response.status).toBe(200);
})
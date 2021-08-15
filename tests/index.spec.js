const {server, app} = require('../index')
const request  = require('supertest')


describe('GET / request sent to app', () => {
    it('should return a page', async () => {
        await request(app)
            .get('/')
            .expect(200)
            .expect('Content-Type', 'text/html; charset=UTF-8')
    })
})

describe('GET /api/weather sent to app', () => {
    it('should return a JSON response when sent a mapped city', async () => {
        await request(app)
            .get('/api/weather/chicago')
            .expect(200)
            .expect('Content-Type', 'application/json; charset=utf-8')
    })

    it('should return a 404 error if given an unmapped city parameter', async () => {
        await request(app)
            .get('/api/weather/mars')
            .expect(404)
            .expect('Content-Type', 'application/json; charset=utf-8')
    })
})

afterAll(() => {
    server.close()
})
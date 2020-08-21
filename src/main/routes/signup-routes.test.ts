import request from 'supertest'
import app from '../config/app'

describe('Sign Routes', () => {
  test('should return an account on sucess', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Eduardo',
        email: 'eduardo-balbo@hotmail.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})

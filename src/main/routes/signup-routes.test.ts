import request from 'supertest'
import app from '../config/app'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'

describe('Sign Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    const accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({}) // remove todos os registros da tabela para evitar que influenciem em outros testes
  })

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
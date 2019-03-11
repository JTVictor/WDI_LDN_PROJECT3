/* global describe, beforeEach, it, api, expect */

const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const {secret} = require('../../config/environment');
const userData = {
  firstName: 'Chris',
  lastName: 'Eubank',
  age: 51,
  address: '10 Downing Street, London, SW1A 2AA',
  goal: 'Maintenance',
  image: 'https://www.famousbirthdays.com/headshots/chris-eubank-2.jpg',
  location: {
    lat: 50.8225,
    lng: 0.1372
  },
  description: 'I am looking for somebody to punch',
  username: 'Eubank_C',
  email: 'chris@boxer.com',
  password: 'password',
  passwordConfirmation: 'password'
};

let userId;

describe('POST /login', () => {
  beforeEach(done => {
    User.remove({})
      .then(() => User.create(userData))
      .then(user => {
        userId = user._id.toString();
        done();
      });
  });

  it('should return a 401 response if not registered', done => {
    api.post('/api/login')
      .end((err, res) => {
        expect(res.status).to.eq(401);
        done();
      });
  });

  it('should return a 200 response if registered', done => {
    api.post('/api/login')
      .send(userData)
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

});

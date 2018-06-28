const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const User = require('../models/user');
const { dbGymBuddy } = require('../config/environment');

mongoose.connect(dbGymBuddy, (err, db) => {
  db.dropDatabase();

  User.create([{
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
  }, {
    firstName: 'Theresa',
    lastName: 'May',
    age: 51,
    address: '10 Downing Street, London, SW1A 2AA',
    goal: 'Maintenance',
    image: 'https://cdn.filestackcontent.com/kSMr0yhRCW1Yd5pZZPjV',
    location: {
      lat: 51.5034,
      lng: 0.1276
    },
    description: 'Cardio means cardio',
    username: 'May_T',
    email: 'may@gov.uk',
    password: 'password',
    passwordConfirmation: 'password'
  }, {
    firstName: 'Shadow',
    lastName: 'The Gladiator',
    age: 56,
    address: 'Birmingham',
    goal: 'Weight gain',
    image: 'https://cdn.filestackcontent.com/ikyjshjYSOGSYKtMrANx',
    location: {
      lat: 52.4531,
      lng: 1.7188
    },
    description: 'Anyone seen my pugil stick?',
    username: 'Shadow_1',
    email: 'shadow@gladiators.com',
    password: 'password',
    passwordConfirmation: 'password'
  }, {
    firstName: 'Ada',
    lastName: 'Goggins',
    age: 86,
    address: '78 Haberdasher Street',
    goal: 'Weight gain',
    image: 'https://cdn.filestackcontent.com/R9CerD3ZTWSNMbJGoMDE',
    location: {
      lat: 51.529220,
      lng: -0.085733
    },
    description: 'BEEFCAKE!!!!',
    username: 'Goggins_A',
    email: 'ada@goggins.uk',
    password: 'password',
    passwordConfirmation: 'password'
  }, {
    firstName: 'Jet',
    lastName: 'The Gladiator',
    age: 48,
    address: '11 Chicksand Street',
    goal: 'Maintenance',
    image: 'https://cdn.filestackcontent.com/Ak7JCDBZSlOQ2x1tanL5',
    location: {
      lat: 51.518511,
      lng: -0.069733
    },
    description: 'Jet! Whoo ooo ooo oohh oohh oohh!',
    username: 'Jet_1',
    email: 'jet@gladiators.uk',
    password: 'password',
    passwordConfirmation: 'password'
  }, {
    firstName: 'Kane',
    lastName: 'Harry',
    age: 24,
    address: 'White Hart Lane',
    goal: 'Weight Loss',
    image: 'https://cdn.filestackcontent.com/dZooyXciS2trx3dGkfpg',
    location: {
      lat: 51.6032,
      lng: 0.0657
    },
    description: 'I prefer rugby',
    username: 'Harry_K',
    email: 'harry@spurs.uk',
    password: 'password',
    passwordConfirmation: 'password'
  }])
    .then(users => console.log(`${users.length} user(s) created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});

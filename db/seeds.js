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
    firstName: 'Harry',
    lastName: 'Kane',
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
  }, {
    firstName: 'He',
    lastName: 'Man',
    age: 24,
    address: 'Old Street',
    goal: 'Weight gain',
    image: 'https://cdn.filestackcontent.com/dZooyXciS2trx3dGkfpg',
    location: {
      lat: 51.525233,
      lng: -0.091159
    },
    description: 'Hi guys',
    username: 'HeManEternia',
    email: 'adam@eternia.com',
    password: 'password',
    passwordConfirmation: 'password'
  }, {
    firstName: 'Skeletor',
    lastName: 'Skeletor',
    age: 66,
    address: 'Regents Street',
    goal: 'Weight Loss',
    image: 'https://cdn.filestackcontent.com/dZooyXciS2trx3dGkfpg',
    location: {
      lat: 51.6032,
      lng: 0.0657
    },
    description: 'I need to put some meat on these bones',
    username: 'Skelly21',
    email: 'skeletor@snakemountain.com',
    password: 'password',
    passwordConfirmation: 'password'
  }, {
    firstName: 'Sylvestor ',
    lastName: 'Stallone',
    age: 82,
    address: 'Brick Lane',
    goal: 'Weight Loss',
    image: 'https://cdn.filestackcontent.com/dZooyXciS2trx3dGkfpg',
    location: {
      lat: 51.512623,
      lng: -0.140304
    },
    description: 'I want to work on my bum, tum and thighs',
    username: 'Sly77',
    email: 'sstalline@planethollywood.uk',
    password: 'password',
    passwordConfirmation: 'password'
  }, {
    firstName: 'Grace',
    lastName: 'Jones',
    age: 24,
    address: 'Bunhill Row',
    goal: 'Weight Loss',
    image: 'https://cdn.filestackcontent.com/dZooyXciS2trx3dGkfpg',
    location: {
      lat: 51.522985,
      lng: -0.089823
    },
    description: 'Slave to the rhythym',
    username: 'G_Jones',
    email: 'grace@sgrace.uk',
    password: 'password',
    passwordConfirmation: 'password'
  }, {
    firstName: 'Taylor',
    lastName: 'Swift',
    age: 28,
    address: 'Pratt Street',
    goal: 'Weight Loss',
    image: 'https://cdn.filestackcontent.com/x5uM6vIoRwOTyER0zvt7',
    location: {
      lat: 51.538769,
      lng: -0.137111
    },
    description: 'Someone please feed me cake',
    username: 'Swift_',
    email: 'taylor@swift.uk',
    password: 'password',
    passwordConfirmation: 'password'
  }])
    .then(users => console.log(`${users.length} user(s) created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});

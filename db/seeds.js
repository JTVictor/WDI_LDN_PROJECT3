const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const User = require('../models/user');
const { dbGymBuddy } = require('../config/environment');

mongoose.connect(dbGymBuddy, (err, db) => {
  db.dropDatabase();

  User.create([{
    firstName: 'Chris',
    surName: 'Eubank',
    age: 51,
    address: '10 Downing Street, London, SW1A 2AA',
    goals: 'Maintenance',
    image: 'https://www.famousbirthdays.com/headshots/chris-eubank-2.jpg',
    location: {
      lat: 51.5034,
      lng: 0.1276
    },
    description: 'I am looking for somebody to punch'
  }])

    .then(users => console.log(`${users.length} user(s) created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});

const User = require('../models/user');

function indexRoute(req, res, next) {
  User.find()
    .then(users => res.json(users))
    .catch(next);
}

function showRoute(req, res, next) {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(next);
}

function createRoute(req, res, next) {
  req.body.owner = req.currentUser;
  User.create(req.body)
    .then(user => res.status(201).json(user))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute
};

const router = require('express').Router();
const users = require('../controllers/users');
const secureRoute = require('../lib/secureRoute');
const auth = require('../controllers/auth');

router.route('/users')
  .get(users.index);

// router.route('/users/new')
//   .get(users.new);

router.route('/users/:id')
  .get(users.show)
  .put(secureRoute, users.update)
  .delete(secureRoute, users.delete);

router.get('/profile', secureRoute, auth.profile);

router.post('/register', auth.register);
router.post('login', auth.login);

module.exports = router;

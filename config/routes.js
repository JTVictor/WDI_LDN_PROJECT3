const router = require('express').Router();
const users = require('../controllers/users');

router.route('/users')
  .get(users.index);

// router.route('/users/new')
//   .get(users.new);

router.route('/users/:id')
  .get(users.show)
  .put(users.update)
  .delete(users.delete);



module.exports = router;

const router = require('express').Router();
const usersController = require('./../controllers/users.controller');

// const router = express.Router();

router
    .route('/')
    .get(usersController.getAllUsers)
    .post(usersController.createUser);

router
    .route('/:id')
    .put(usersController.updateUser)
    .delete(usersController.deleteUser);

module.exports = router;
const router = require('express').Router();

const auth = require('./middleware/auth');
//importing auth middleware
// const auth = require('../middleware/auth');
const { createUser, getUserById, login } = require('./user.controller');

const { getAllUsers } = require('./user.service');

//route new user to be registered using createUser controller
router.post("/", createUser);

//route existing user to be verified using auth middleware and getUserById
router.get("/",auth, getAllUsers);

//route existing user to be login using login controller
router.post("/login", login);

module.exports = router;
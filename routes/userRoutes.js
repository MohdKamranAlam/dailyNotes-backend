const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')
const verifyJWT = require('../middleware/verifyJWT')


// If we write router.use(verifyJWT) middleware showing an error of unAuthrized when we hitting the the 
// post http://localhost:3500/users
//router.use(verifyJWT)

router.route('/')
    .get(usersController.getAllUsers,verifyJWT)
    .post(usersController.createNewUser)
    .patch(usersController.updateUser, verifyJWT)
    .delete(usersController.deleteUser,verifyJWT)

module.exports = router

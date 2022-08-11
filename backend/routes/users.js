const express = require('express')
const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/userController')

const router = express.Router()

// get all Users
router.get('/', getUsers)

// get a single User
router.get('/:id', getUser)

// create User
router.post('/create', createUser)

// update a single User
router.patch('/:id', updateUser)

// delete User
router.delete('/:id', deleteUser)

module.exports = router
const User = require('../models/User')
const mongoose = require('mongoose')

// get all users
const getUsers = async (req, res) => {

    // get all the users and sort it by decending order of created date
    const users = await User.find({}).sort({createdAt: -1})

    res.status(200).json(users)
}

// get single user
const getUser = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such user!' })
    }
    
    const user = await User.findById(id)

    if(!user) {
        return res.status(404).json({ error: 'No such user!' })
    }

    res.status(200).json(user)
}

// create new user
const createUser = async (req, res) => {
    const { name, email, password, level } = req.body

    try {
        const user = await User.create({ 
            name, email, password, level
        })
        res.status(200).json(user)
    } catch (error){
        res.status(400).json({ error: error.message })
    }
}

// update user
const updateUser = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such user!' })
    }
    
    const user = await user.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!user) {
        return res.status(404).json({ error: 'No such user!' })
    }

    res.status(200).json(user)
}

// delete user
const deleteUser = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such user!' })
    }
    
    const user = await user.findOneAndDelete({_id: id})

    if(!user) {
        return res.status(400).json({ error: 'No such user!' })
    }

    res.status(200).json(user)
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}
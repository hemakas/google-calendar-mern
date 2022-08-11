const Event = require('../models/Event')
const mongoose = require('mongoose')

// get all events
const getEvents = async (req, res) => {

    // get all the events and sort it by decending order of created date
    const events = await Event.find({}).sort({createdAt: -1})

    res.status(200).json(events)
}

// get single event
const getEvent = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such event!' })
    }
    
    const event = await Event.findById(id)

    if(!event) {
        return res.status(404).json({ error: 'No such event!' })
    }

    res.status(200).json(event)
}

// create new event
const createEvent = async (req, res) => {
    const { googleId, title, description, startDate, endDate, userId } = req.body

    try {
        const event = await Event.create({ 
            googleId, title, description, startDate, endDate, userId 
        })
        res.status(200).json(event)
    } catch (error){
        res.status(400).json({ error: error.message })
    }
}

// update event
const updateEvent = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such event!' })
    }
    
    const event = await Event.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!event) {
        return res.status(404).json({ error: 'No such event!' })
    }

    res.status(200).json(event)
}

// delete event
const deleteEvent = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such event!' })
    }
    
    const event = await Event.findOneAndDelete({_id: id})

    if(!event) {
        return res.status(400).json({ error: 'No such event!' })
    }

    res.status(200).json(event)
}

module.exports = {
    getEvents,
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent
}
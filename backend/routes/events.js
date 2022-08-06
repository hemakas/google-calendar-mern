const express = require('express')
const {
    getEvents,
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent
} = require('../controllers/eventController')

const router = express.Router()

// get all events
router.get('/', getEvents)

// get a single event
router.get('/:id', getEvent)

// create event
router.post('/create', createEvent)

// update a single event
router.patch('/:id', updateEvent)

// delete event
router.delete('/:id', deleteEvent)

module.exports = router
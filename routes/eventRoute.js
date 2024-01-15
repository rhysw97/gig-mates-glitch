const {createEvent, getEvents} = require('./../components/events')
const express = require("express")
const router = express.Router()

router.post('/', (request, response) => {
    const data = request.body

    const newEvent  = {
        artist: data.artist,
        genre: data.genre,
        location: data.location,
        date: data.date,
        time: data.time,
        eventPicture: data.eventPicture
    };

    console.log(newEvent)
   createEvent(newEvent)
})

router.get('/getEvents', (request, response) => {
    getAllEvents(response)
})

async function getAllEvents(response) {
    const eventsList = await getEvents()
    response.send(eventsList)
}

module.exports = router
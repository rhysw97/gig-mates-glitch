const Mongoose = require('mongoose')
const {Schema, model} = Mongoose

const eventSchema=new Schema({
    artist: String,
    genre: String,
    location: String,
    date: String,
    time: String,
    eventPicture: String
})

const Event = model('Events', eventSchema)

function createEvent(eventData) {
    let event = {
        artist: eventData.artist,
        genre: eventData.genre,
        location: eventData.location,
        date: eventData.date,
        time: eventData.time,
        eventPicture: eventData.eventPicture,
    }
    
    Event.create(event)
        .catch(err=>{
            console.log("Error: "+err)
        })
}

async function getEvents() {
    let data = []
    await Event.find({})
        .sort({'time': -1})
        .exec()
        .then(mongoData=>{
            data=mongoData;
        })
        .catch(err => {
            console.log('Error:' + err)
        })
    return data;
}

module.exports = {
    createEvent,
    getEvents
}
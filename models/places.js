// module.exports = [{
//     name: 'Sushi-rest',
//     city: 'Seattle',
//     state: 'WA',
//     cuisines: 'Japanese',
//     pic: '/images/Best-Sushi.jpg'
// }, {
//     name: 'Morning Coffee',
//     city: 'Phoenix',
//     state: 'AZ',
//     cuisines: 'Coffee and baked goods',
//     pic: '/images/second-rest.jpg'
// }]

const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pic: String,
    cuisines: { type: String, required: true },
    city: { type: String, default: 'Anytown' },
    state: { type: String, default: 'USA' },
    founded: Number
})


module.exports = mongoose.model('Place', placeSchema)
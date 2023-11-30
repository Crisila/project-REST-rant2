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
    pic: {
        type: String,
        default: 'https://placekitten.com/350/350'
    },
    cuisines: { type: String, required: true },
    city: { type: String, default: 'Anytown' },
    state: { type: String, default: 'USA' },
    founded: {
        type: Number,
        min: [1673, 'Surely not that old?!'],
        max: [new Date().getFullYear(), 'Hey, this is in the future!']
    }
})

placeSchema.methods.showEstablished = function () {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

 
module.exports = mongoose.model('Place', placeSchema)
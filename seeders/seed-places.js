const db = require('../models')

db.Place.create([{
     name: 'Sushi-rest',
     city: 'Seattle',
     state: 'WA',
     cuisines: 'Japanese',
     pic: '/images/Best-Sushi.jpg',
     founded: 2023
}, {
     name: 'Morning Coffee',
     city: 'Phoenix',
     state: 'AZ',
     cuisines: 'Coffee and baked goods',
     pic: '/images/second-rest.jpg',
     founded: 1991
}])
     .then(() => {
          console.log('success!')
          process.exit()
      })
     .catch(err => {
          console.log('Failure', err)
          process.exit()
     })

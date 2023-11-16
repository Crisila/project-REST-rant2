const router = require('express').Router()

 // GET /places
router.get('/', (req, res) => {
    let places = [{
  name: 'Sushi Rest',
  city: 'Seattle',
  state: 'WA',
  cuisines: 'Japanese',
  pic: '/images/sushi-rest.jpg'
}, {
  name: 'Backyard',
  city: 'Phoenix',
  state: 'AZ',
  cuisines: 'Coffee, Bakery, Brunch',
  pic: '/images/second-rest.jpg'
}]


  res.render('places/index', { places })
  
})

module.exports = router;

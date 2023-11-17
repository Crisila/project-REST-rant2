const { Router } = require('express')

const router = require('express').Router()

// GET /places/new
router.get('/new', (req, res) => {
  res.render('places/new')
})


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


// POST
router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})

  res.render('places/index', { places })
  
})







module.exports = router;

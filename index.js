// Modules and Globals
require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');

const app = express();


// Express Settings
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
// The first argument to app.use, /places sets all routes in the places controller relative to /places. This means that /places will be added in front of any other path we define in the controller.

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


// Controllers & Routes
app.use('/places', require('./controllers/places'));


app.get('/', (req, res) => {
    res.render('home')
});

// It is important that this route is at the bottom, otherwise it will override your other pages.
app.get('*', (req, res) => {
    // res.status(404).send('<h1>404 Page</h1>')
    res.render('error404')
});

app.listen(process.env.PORT);

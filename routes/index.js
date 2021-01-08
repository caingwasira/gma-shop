const express = require('express');
const router = express.Router();

// get the home page
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Green Market Africa'})
})

// register
router.get('/register', (req, res, next) => {
    res.send('GET /register')
})

router.post('/register', (req, res, next) => {
    res.send('CREATE /register')
})

router.get('/login', (req, res, next) => {
    res.send('GET /login')
})

router.post('/login', (req, res, next) => {
    res.send('CREATE /login')
})

router.get('/profile', (req, res, next) => {
    res.send('GET /profile')
})

router.put('/profile/:user_id', (req, res, next) => {
    res.send('UPDATE /profile/:user_id')
})

router.get('/forgot-pw', (req, res, next) => {
    res.send('GET /forgot-pw')
})

router.put('/forgot-pw', (req, res, next) => {
    res.send('PUT /forgot-pw')
})

router.get('/reset-pw/:token', (req, res, next) => {
    res.send('GET /reset-pw')
})

router.put('/reset-pw/:token', (req, res, next) => {
    res.send('PUT /reset-pw/:token')
})




module.exports = router;
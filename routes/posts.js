const express = require('express');
const router = express.Router();

// get the home page
router.get('/posts', (req, res, next) => {
    res.send('/posts')
})

router.get('/posts/new', (req, res, next) => {
    res.send('/posts/new')
})

router.post('/posts', (req, res, next) => {
    res.send('CREATE /posts')
})

router.get('/posts/:id', (req, res, next) => {
    res.send('GET /post/:id')
})

router.get('/posts/:id/edit', (req, res, next) => {
    if(req.params.id === '7331') res.send('EDIT /posts/:id/edit')
})

router.get('/posts/:id', (req, res, next) => {
    res.send('UPDATE /posts/:id')
})

router.delete('/posts/:id', (req, res, next) => {
    res.send('DELETE /posts/:id')
})

module.exports = router;
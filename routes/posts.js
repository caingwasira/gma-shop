const express = require('express');
const router = express.Router();

// get the home page
router.get('/', (req, res, next) => {
    res.send('/posts')
})

router.get('/new', (req, res, next) => {
    res.send('/posts/new')
})

router.post('/', (req, res, next) => {
    res.send('CREATE /posts')
})

router.get('/:id', (req, res, next) => {
    res.send('GET /post/:id')
})

router.get('/:id/edit', (req, res, next) => {
    if(req.params.id === '7331') res.send('EDIT /posts/:id/edit')
})

router.get('/:id', (req, res, next) => {
    res.send('UPDATE /posts/:id')
})

router.delete('/:id', (req, res, next) => {
    res.send('DELETE /posts/:id')
})

module.exports = router;
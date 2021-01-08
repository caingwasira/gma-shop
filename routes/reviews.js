const express = require('express');
const router = express.Router({ mergeParams: true });

// get the home page
router.get('/', (req, res, next) => {
    res.send('INDEX /posts/:id/reviews')
})

router.post('/', (req, res, next) => {
    res.send('CREATE /posts/:id/reviews')
})

router.get('/:id/edit', (req, res, next) => {
    res.send('EDIT /posts/:id/reviews/:id/edit')
})

router.get('/:id', (req, res, next) => {
    res.send('UPDATE /posts/:id/reviews/:id')
})

router.delete('/:id', (req, res, next) => {
    res.send('DELETE /posts/:id/reviews/:id')
})

module.exports = router;
const express = require('express');
const router = express.Router();

// get the home page
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Green Market Africa'})
})

module.exports = router;
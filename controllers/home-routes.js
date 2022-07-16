
const router = require('express').Router();


//View all information from surfboard table
router.get('/', (req, res) => {
  res.render('landingPage')
})

module.exports = router;
const router = require('express').Router();
// const apiRoutes = require('./api');

// router.use('/api', apiRoutes);
// router.use('/', res.render('home'));

const homeRoutes = require('./home-routes');

router.use('/', homeRoutes);

router.use((req, res) => res.send('Invalid Route! Please refer to API documentation for valid routing.'));



module.exports = router;
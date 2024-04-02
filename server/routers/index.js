const Router = require('express');
const router = new Router();

const linkRouter = require('./linkRouter');

router.use('/link', linkRouter);

module.exports = router;
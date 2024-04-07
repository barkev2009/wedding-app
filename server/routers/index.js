const Router = require('express');
const router = new Router();

const linkRouter = require('./linkRouter');
const visitOptionsRouter = require('./visitOptionsRouter');
const userRouter = require('./userRouter');

router.use('/link', linkRouter);
router.use('/user', userRouter);
router.use('/visit_options', visitOptionsRouter);

module.exports = router;
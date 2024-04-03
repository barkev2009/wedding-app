const Router = require('express');
const router = new Router();

const linkRouter = require('./linkRouter');
const userRouter = require('./userRouter');

router.use('/link', linkRouter);
router.use('/user', userRouter);

module.exports = router;
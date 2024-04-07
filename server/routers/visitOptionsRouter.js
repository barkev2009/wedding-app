const Router = require('express');
const linkController = require('../controllers/linkController');
const router = new Router();

router.get('/', linkController.getVisitOptions);

module.exports = router;
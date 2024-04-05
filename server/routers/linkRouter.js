const Router = require('express');
const linkController = require('../controllers/linkController');
const authMiddleware = require('../middleware/authMiddleware');
const router = new Router();

router.post('/', authMiddleware, linkController.create);
router.put('/:link_uuid', linkController.edit);
router.delete('/:link_uuid', authMiddleware, linkController.delete);
router.get('/', authMiddleware, linkController.getAll);
router.get('/:link_uuid', linkController.getById);

module.exports = router;
const Router = require('express');
const linkController = require('../controllers/linkController');
const router = new Router();

router.post('/', linkController.create);
router.put('/:link_uuid', linkController.edit);
router.delete('/:link_uuid', linkController.delete);
router.get('/', linkController.getAll);
router.get('/:link_uuid', linkController.getById);

module.exports = router;
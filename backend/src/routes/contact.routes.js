const { Router } = require('express');
const { ContactController } = require('../controllers');

const _contactController = new ContactController();
const router = Router();

router.get('/', _contactController.getAll);
router.get('/:contactId', _contactController.getById);
router.post('/', _contactController.create);
router.delete('/:contactId', _contactController.delete);

module.exports = router;
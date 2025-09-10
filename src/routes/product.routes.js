const router = require('express').Router();
const { create, list, get, update, remove } = require('../controllers/product.controller');
const auth = require('../middlewares/auth.middleware');

router.use(auth);            // ← protege todo con JWT
router.get('/', list);
router.post('/', create);
router.get('/:id', get);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;

const router = require('express').Router();
const { create, list, get, update, remove } = require('../controllers/cliente.controller');
const auth = require('../middlewares/auth.middleware');

// Todas las rutas de clientes protegidas con token
router.use(auth);

router.get('/', list);
router.post('/', create);
router.get('/:id', get);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;

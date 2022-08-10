const { Router } = require('express');
// Importar todos los routers;
const authRouter = require('./auth.js');
const operationsRouter = require('./operations');



const router = Router();

// Configurar los routers
router.use('/api/auth', authRouter);
router.use('/api/operations', operationsRouter);


module.exports = router;
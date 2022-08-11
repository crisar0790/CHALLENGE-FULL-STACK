const { Router } = require('express');

const authRouter = require('./auth.js');
const operationsRouter = require('./operations');
const typesRouter = require('./types');
const categoriesRouter = require('./categories');

const router = Router();

router.use('/api/auth', authRouter);
router.use('/api/operations', operationsRouter);
router.use('/api/types', typesRouter);
router.use('/api/categories', categoriesRouter);

module.exports = router;
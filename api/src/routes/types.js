const router = require('express').Router();
const { Type } = require('../db');

router.get('/', async (req, res) => {
    const types = await Type.findAll();
    res.status(200).json(types);
});

module.exports = router;
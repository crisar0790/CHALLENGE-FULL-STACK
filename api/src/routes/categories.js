const router = require('express').Router();
const { Category } = require('../db');

router.get('/', async (req,res) => {
    const categories = await Category.findAll();
    res.status(200).json(categories);
});

module.exports = router;
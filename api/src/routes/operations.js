const router = require('express').Router();
const { verifyToken } = require('./verifyToken');
const { User, Operation, Category, Type } = require('../db');

router.post('/', verifyToken, async (req, res) => {
    const { concept, amount, date, type, category } = req.body;
    const { id } = req.query;
    try {
        if (!concept || !amount || !date || !type || !category || !id) res.status(400).json('Missing information in any of the required fields')
        if (concept, amount, date, type, category, id) {
            const newOperation = await Operation.create({
                concept,
                amount,
                date
            });
            await newOperation.setUser(id);
            const newOperationType = await Type.findOne({where: {type: type}})
            await newOperation.setType(newOperationType.id);
            const newOperationCategory = await Category.findOne({where: {category: category}});
            if (newOperationCategory.typeId === null) {
                await newOperationCategory.setType(newOperationType.id);
            }
            res.status(201).json(newOperation);
        }
    } catch (error) {
        console.log(error)
    }
});

module.exports = router;
const router = require('express').Router();
const { verifyToken } = require('./verifyToken');
const { User, Operation, Category, Type } = require('../db');

//------------------------ Create ------------------------

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
            const newOperationType = await Type.findOne({ where: { type: type } })
            await newOperation.setType(newOperationType.id);
            const newOperationCategory = await Category.findOne({ where: { category: category } });
            await newOperation.setCategory(newOperationCategory.id)
            res.status(201).json(newOperation);
        }
    } catch (error) {
        console.log(error)
    }
});

//------------------------ GET ------------------------

router.get('/', verifyToken, async (req, res) => {
    const { bType, bCategory } = req.body;
    const { userId, qNew } = req.query;
    if(!userId) return res.status(400).json('Missing userId');
    try {
        let operations;
        if (qNew) {
            let ops = await Operation.findAll({
                where: {userId: userId},
                include: [
                    {
                        model: Type,
                        attributes: ['type']
                    },
                    {
                        model: Category,
                        attributes: ['category']
                    }
                ]
            });
            await ops.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
            operations = await ops.slice(0, 10);
        } else if (bType && !bCategory) {
            operations = await Operation.findAll({
                where: {userId: userId},
                include: [
                    {
                        model: Type,
                        attributes: { ['type']: bType }
                    },
                    {
                        model: Category,
                        attributes: ['category']
                    }
                ]
            });
        } else if (!bType && bCategory) {
            operations = await Operation.findAll({
                where: {userId: userId},
                include: [
                    {
                        model: Type,
                        attributes: ['type']
                    },
                    {
                        model: Category,
                        attributes: { ['category']: bCategory }
                    }
                ]
            });
        } else if (bType && bCategory) {
            operations = await Operation.findAll({
                where: {userId: userId},
                include: [
                    {
                        model: Type,
                        attributes: { ['type']: bType }
                    },
                    {
                        model: Category,
                        attributes: { ['category']: bCategory }
                    }
                ]
            });
        } else {
            operations = await Operation.findAll({
                where: {userId: userId},
                include: [
                    {
                        model: Type,
                        attributes: ['type']
                    },
                    {
                        model: Category,
                        attributes: ['category']
                    }
                ]
            });
        }
        if (operations.length) {
            res.status(200).json(operations);
        } else {
            res.status(404).json('No operations');
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;
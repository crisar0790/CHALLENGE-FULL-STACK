const router = require('express').Router();
const { verifyToken } = require('./verifyToken');
const { User, Operation, Category, Type } = require('../db');

//------------------------ Create ------------------------

router.post('/', verifyToken, async (req, res) => {
    const { amount, date, type, category } = req.body;
    const { userId } = req.query;
    try {
        if (!amount || !date || !type || !category || !userId) res.status(400).json('Missing information in any of the required fields')
        if (amount, date, type, category, userId) {
            const newOperation = await Operation.create({
                amount,
                date
            });
            await newOperation.setUser(userId);
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
    const { type, category, order } = req.body;
    const { userId, qNew } = req.query;
    if (!userId) return res.status(400).json('Missing userId');
    const oneType = type ? await Type.findOne({ where: { type: type } }) : undefined;
    const oneCategory = category ? await Category.findOne({ where: { category: category } }) : undefined;
    try {
        let operations;
        if (qNew) {
            let ops = await Operation.findAll({
                where: { userId: userId },
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
        } else if (type && !category && order === 'asc') {
            operations = await Operation.findAll({
                where: { userId: userId, typeId: oneType.id },
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
        } else if (type && !category && order === 'des') {
            let ops = await Operation.findAll({
                where: { userId: userId, typeId: oneType.id },
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
            operations = ops;
        } else if (!type && category && order === 'asc') {
            operations = await Operation.findAll({
                where: { userId: userId, categoryId: oneCategory.id },
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
        } else if (!type && category && order === 'des') {
            let ops = await Operation.findAll({
                where: { userId: userId, categoryId: oneCategory.id },
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
            operations = ops;
        } else if (type && category && order === 'asc') {
            operations = await Operation.findAll({
                where: { userId: userId, typeId: oneType.id, categoryId: oneCategory.id },
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
        } else if (type && category && order === 'des') {
            let ops = await Operation.findAll({
                where: { userId: userId, typeId: oneType.id, categoryId: oneCategory.id },
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
            operations = ops;
        } else if (!type && !category && order === 'asc') {
            operations = await Operation.findAll({
                where: { userId: userId },
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
        } else if (!type && !category && order === 'des') {
            let ops = await Operation.findAll({
                where: { userId: userId },
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
            operations = ops;
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
const router = require('express').Router();
const { verifyToken } = require('./verifyToken');
const { User, Operation, Category, Type } = require('../db');

//------------------------ CREATE ------------------------

router.post('/create', verifyToken, async (req, res) => {
    const { concept, amount, date, type, category } = req.body;
    const { userId } = req.query;
    try {
        if (!concept || !amount || !date || !type || !category || !userId) res.status(400).json('Missing information in any of the required fields');
        if (amount, date, type, category, userId) {
            const newOperation = await Operation.create({
                concept,
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
        res.status(400).json(error);
    }
});

//------------------------ UPDATE ------------------------

router.patch('/modify', verifyToken, async (req, res) => {
    const { id } = req.query;
    const { concept, amount, date, category } = req.body;
    if (!id) return res.status(400).json('Missing information in any of the required fields');
    try {
        if (!concept && !amount && !date && !category) res.status(400).json('Missing information in any of the required fields');

        if (concept && !amount && !date && !category) {
            await Operation.update(
                { concept: concept },
                { where: { id: id } }
            );
            res.status(201).json('Operation updated');
        } else if (concept && amount && !date && !category) {
            await Operation.update(
                { concept: concept, amount: amount },
                { where: { id: id } }
            );
            res.status(201).json('Operation updated');
        } else if (concept && amount && date && !category) {
            await Operation.update(
                { concept: concept, amount: amount, date: date },
                { where: { id: id } }
            );
            res.status(201).json('Operation updated');
        } else if (concept && amount && !date && category) {
            const categoryUpdated = await Category.findOne({ where: { category: category } });
            await Operation.update(
                { concept: concept, amount: amount, categoryId: categoryUpdated.id },
                { where: { id: id } }
            );
            res.status(201).json('Operation updated');
        } else if (concept && !amount && date && !category) {
            await Operation.update(
                { concept: concept, date: date },
                { where: { id: id } }
            );
            res.status(201).json('Operation updated');
        } else if (concept && !amount && date && category) {
            const categoryUpdated = await Category.findOne({ where: { category: category } });
            await Operation.update(
                { concept: concept, date: date, categoryId: categoryUpdated.id },
                { where: { id: id } }
            );
            res.status(201).json('Operation updated');
        } else if (concept && !amount && !date && category) {
            const categoryUpdated = await Category.findOne({ where: { category: category } });
            await Operation.update(
                { concept: concept, categoryId: categoryUpdated.id },
                { where: { id: id } }
            );
            res.status(201).json('Operation updated');
        } else if (concept && amount && date && category) {
            const categoryUpdated = await Category.findOne({ where: { category: category } });
            await Operation.update(
                { concept: concept, amount: amount, date: date, categoryId: categoryUpdated.id },
                { where: { id: id } }
            );
            res.status(201).json('Operation updated');
        } else if (!concept && amount && !date && !category) {
            await Operation.update(
                { amount: amount },
                { where: { id: id } }
            );
            res.status(201).json('Operation updated');
        } else if (!concept && amount && date && !category) {
            await Operation.update(
                { amount: amount, date: date },
                { where: { id: id } }
            );
            res.status(201).json('Operation updated');
        } else if (!concept && amount && !date && category) {
            const categoryUpdated = await Category.findOne({ where: { category: category } });
            await Operation.update(
                { amount: amount, categoryId: categoryUpdated.id },
                { where: { id: id } }
            );
            res.status(201).json('Operation updated');
        } else if (!concept && !amount && date && !category) {
            await Operation.update(
                { date: date },
                { where: { id: id } }
            );
            res.status(201).json('Operation updated');
        } else if (!concept && !amount && date && category) {
            const categoryUpdated = await Category.findOne({ where: { category: category } });
            await Operation.update(
                { date: date, categoryId: categoryUpdated.id },
                { where: { id: id } }
            );
            res.status(201).json('Operation updated');
        } else if (!concept && !amount && !date && category) {
            const categoryUpdated = await Category.findOne({ where: { category: category } });
            await Operation.update(
                { categoryId: categoryUpdated.id },
                { where: { id: id } }
            );
            res.status(201).json('Operation updated');
        } else if (!concept && amount && date && category) {
            const categoryUpdated = await Category.findOne({ where: { category: category } });
            await Operation.update(
                { amount: amount, date: date, categoryId: categoryUpdated.id },
                { where: { id: id } }
            );
            res.status(201).json('Operation updated');
        }
    } catch (error) {
        res.status(400).json(error);
    }
});

//------------------------ DELETE ------------------------

router.delete('/delete/:id', verifyToken, async (req, res) => {
    const { id } = req.params;
    try {
        const operation = await Operation.findByPk(id);
        if (operation) {
            await operation.destroy();
            res.status(200).json('Operation deleted')
        }
    } catch (error) {
        console.log(error)
    }
});

//------------------------ GET ------------------------

router.get('/', verifyToken, async (req, res) => {
    const { userId, qNew, type, category, order } = req.query;
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
        if (operations) {
            res.status(200).json(operations);
        } else {
            res.status(404).json('No operations');
        }
    } catch (error) {
        console.log(error)
    }
});

//------------------------ GET BALANCE ------------------------

router.get('/balance', verifyToken, async (req, res) => {
    const { userId } = req.query;
    try {
        let total;
        let incomeType = await Type.findOne({ where: { type: 'Income' } });
        let expenseType = await Type.findOne({ where: { type: 'Expense' } });
        let income = await Operation.findAll({ where: { userId: userId, typeId: incomeType.id } });
        let expense = await Operation.findAll({ where: { userId: userId, typeId: expenseType.id } });
        let incomeTotal = 0;
        let expenseTotal = 0;
        for (let i of income) {
            incomeTotal += i.amount;
        }
        for (let e of expense) {
            expenseTotal += e.amount;
        }
        total = incomeTotal - expenseTotal;
        const totalOperation = {
            total: total,
            income: incomeTotal,
            expense: expenseTotal
        }
        res.status(200).json(totalOperation);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
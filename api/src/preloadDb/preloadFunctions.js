const { types } = require('./types');
const { categories } = require('./categories');
const { Category, Type } = require('../db');

const preloadTypes = async () => {
    try {
        await Promise.all(
            types.map((t) =>
                Type.findOrCreate({
                    where: { type: t.type },
                    default: {
                        type: t.type
                    }
                })
            )
        )
    } catch (error) {
        throw new Error(error);
    }
};

const preloadCategories = async () => {
    try {
        await Promise.all(
            categories.map((c) => 
                Category.findOrCreate({
                    where: {category: c.category},
                    default: {
                        category: c.category
                    }
                })
            )
        )
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = { preloadTypes, preloadCategories };
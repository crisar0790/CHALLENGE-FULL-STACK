const { types } = require('./types');
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
        throw new Error(error)
    }
}

module.exports = { preloadTypes };
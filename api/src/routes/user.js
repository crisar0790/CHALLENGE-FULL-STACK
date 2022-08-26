const router = require('express').Router();
const { User } = require('../db');

router.get('/', async (req, res) => {

    const { email } = req.query;

    try {
        const userFound = await User.findOne({
            where: {email: email}
        });
        if (userFound.id) return res.status(200).json(userFound);
    } catch (error) {
        res.status(404).json(error)
    }

});

module.exports = router;
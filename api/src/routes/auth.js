const router = require('express').Router();
const { User } = require('../db');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

//REGISTER

router.post('/register', async (req, res) => {

    const { firstName, lastName, email, currency, password } = req.body;

    try {
        const newUser = await User.create({
            firstName,
            lastName,
            email,
            currency,
            password: CryptoJS.AES.encrypt(password, process.env.PASS_SECRET).toString()
        });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json(error)
    }

});

//LOGIN

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ where: { email: req.body.email } });
        !user && res.status(401).json('Your email is wrong or it is not registered!')
        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SECRET);
        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        OriginalPassword !== req.body.password && res.status(401).json('Wrong credential!');

        const accessToken = jwt.sign({
            id: user.id
        }, process.env.JWT_SECRET,
            { expiresIn: '3d' }
        )

        const { password, ...others } = user;

        res.status(200).json({ ...others, accessToken });

    } catch (error) {
        res.status(500).json(error)
    }

});

module.exports = router;
const express = require('express')
const { body, validationResult } = require('express-validator');
const router = express.Router()
const User = require('../models/User')
router.post("/createuser",
    body('email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password').isLength({ min: 5 }), async (req, res) => {
        try {

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            await User.create({
                name: req.body.name,
                password: req.body.password,
                email: req.body.email,
                location: req.body.location
            })
            res.json({ success: true });
        } catch (error) {
            console.log(error)
            res.json({ success: false });

        }
    })

router.post("/loginuser",
    body('email').isEmail(),

    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let email=req.body.email;

        try {
            let userData = await User.findOne({ email });

            if (!userData) {
                return res.status(400).json({ errors: "Register First" });
            }
            if (req.body.password !== userData.password) {
                return res.status(400).json({ errors: "password or email id wrong" });
            }

            return res.json({ success: true });

        } catch (error) {
            console.log(error)
            res.json({ success: false });

        }
    })
module.exports = router;
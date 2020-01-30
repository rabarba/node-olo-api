const express = require('express')
const User = require('../models/userModel')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/users', async (req, res) => {
    try {
        console.log(req)
        const user = new User(req.body)
        await user.save()
        const token = await user.generateAuthToken()

        res.status(201).send({ name: user.name, email: user.email, token })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()

        res.send({ name: user.name, email: user.email, token })
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router

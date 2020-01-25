require('./db/mongoose')
const express = require('express')
const userRouter = require('../src/routers/userRouter')

const app = express()

app.use(express.json())
app.use(userRouter)

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})
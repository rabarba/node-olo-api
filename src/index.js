require('./db/mongoose')
const express = require('express')
const userRouter = require('../src/routers/userRouter')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port + '.')
})
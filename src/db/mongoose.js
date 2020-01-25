const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.0.1/olo', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
})
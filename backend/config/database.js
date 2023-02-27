const mongoose = require('mongoose')

// Database Connection
const connectDatabase = () => {
    const url = 'mongodb://localhost:27017/Project'
    mongoose.connect(url, {
        useNewUrlParser: true, useUnifiedTopology: true
    }).then(() => console.log('mongodb server connected...'))
    .catch((err) => console.log(err))
}

module.exports = connectDatabase
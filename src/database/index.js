const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/serie-node')
mongoose.Promise = global.Promise

module.exports = mongoose
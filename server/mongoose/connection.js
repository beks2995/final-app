const mongoose = require('mongoose')

const connectdb = () => {
  mongoose.connect('mongodb+srv://beks:beka123@cluster0.b92sl.mongodb.net/gameMarket', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}

module.exports = connectdb
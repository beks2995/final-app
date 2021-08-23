const mongoose = require('mongoose')

const { Schema } = mongoose

const gameSchema = new Schema({
  game_title: String,
  thumbnail: String,
  game_company: String,
  game_date: {
    type:String,
    default: 'unknow date'
  },
  game_genre: String,
  platform: String,
  game_description: {type:String, default: 'without information...'},
  game_url: String
}, { versionKey: false })

const Game = mongoose.model('game', gameSchema)

module.exports = Game
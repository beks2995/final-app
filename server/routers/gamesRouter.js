import Game from '../mongoose/model/gameModel'
import connectdb from '../mongoose/connection'

const express = require('express')

const router = express.Router()

connectdb()

router.get('/', (req, res) => {
  Game.find({}, (err, games) => {
     if(err) console.log(err)
    res.json(games)
  })
})

router.post('/', (req, res) => {
  const game = new Game(req.body)
  game.save((err) => {
    if (err) console.log(err)
    res.json(game)
  })
})

router.put('/:game_title', (req, res) => {
  const {game_title} = req.params;
  const {game_company} = req.body
  Game.updateOne({game_title}, {$set: {game_company}},(err, game) => {
    if(err) console.log(err)
    res.json(game)
  })
})

router.delete('/:game_title', (req, res) => {
  const {game_title} = req.params
  Game.deleteOne(game_title, (err, doc) => {
    if(err) console.log(err)
    res.json(doc)
  })
})

module.exports = router
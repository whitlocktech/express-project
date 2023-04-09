const express = require('express')

const friendsController = require('../controllers/friends.controller')

const friendsRouter = express.Router()

// custom middle ware for just his router
friendsRouter.use((req, res, next) => {
    console.log('ip address:', req.ip)
    next()
})

friendsRouter.get('/', friendsController.getFriends)
friendsRouter.post('/', friendsController.postFriend)
friendsRouter.get('/:friendId', friendsController.getFriend)

module.exports = friendsRouter
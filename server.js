//Naming the project server.js allow the npm start command to be used instead of adding node index.js to the packages.json

const express = require('express')
const path = require('path')

const friendsRouter = require('./routers/friend.router')
const messagesRouter = require('./routers/messages.router')
const app = express()

const PORT = 3000

app.use((req, res, next) => {
    const start = Date.now()
    next()// dont forget call to next in middlewares or it will hang
    // Actions here for after it returns for next action
    const delta = Date.now() - start
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`)
})

app.use('/site',express.static(path.join(__dirname, 'public')))
app.use(express.json())

app.use('/friends', friendsRouter)

app.use('/messages', messagesRouter)

app.listen(PORT, () => {
    console.log(`Application is running on ${PORT}...`)
})
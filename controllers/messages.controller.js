const path = require('path')

function getMessages (req, res) { //use named functions to help find bugs
//    res.send('<ul><li>Hello friend</li></ul>')}
 //   res.sendFile(path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg'))
res.render('messages', {
    title: 'Messages to my friends',
    friend: 'Sir Isaac Newton'
}) 
}
function postMessage (req, res) {
    console.log('Updating Messages')
}

module.exports = {
    getMessages,
    postMessage
}
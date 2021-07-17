/**
 * Variable Delaration
 * @type {[type]}
 */
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json({
  extended: false,
  limit: '5mb'
}))
// configuration ======================================================= 
app.use('/', require('./routes'))

// Start the server
app.set('port', 3000)
const server = app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + server.address().port)
})

module.exports = app
const express = require('express')
const path = require('path')

const app = express()
app.get('/qcfirst/QCFirst/Images', (req, res) => res.send(Images));
app.use('/', express.static('QCFIRST'))

//Lastly, app.listen() is the function that starts a port and host, in our case the localhost for the connections to listen to incoming requests from a client. We can define the port number such as 3000.

// app.listen(3000, () => {
//     console.log('Server up at 3000')
// })
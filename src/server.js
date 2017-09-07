const express = require('express');
const router = require('./controllers/routes');
const path = require('path')

const server = express();
const PORT = process.env.PORT || 3000;

// bodyparser
// session
// passport

server.use(express.static(path.join(__dirname, 'public')))
server.use(router);

server.listen(PORT, () => {
  console.log('Server is running on port: ' + PORT)
})

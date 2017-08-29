const express = require('express');
const router = require('./controllers/routes');

const server = express();
const PORT = process.env.PORT || 3000;

// bodyparser
// session
// passport
// router

server.use(router);

server.listen(PORT, () => {
  console.log('Server is running on port: ' + PORT)
})

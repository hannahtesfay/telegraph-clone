const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const postRoutes = require('./routes')
server.use('/posts', postRoutes)

// const { init } = require('./server/db/index')
const { init } = require('./db/index.js')

const port = process.env.PORT || 3000;

// Root route
server.get('/', (req, res) => res.send('Hello, client!'))

init().then(() => {
    server.listen(port, () => console.log(`Express now departing from http://localhost:${port}!`))
}) 
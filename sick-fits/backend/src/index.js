// Start Node Server
require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

// TODO: Use express middleware to handle cookies
// TODO: Use express middleware to populate current user

server.start (
    {
        cors: {
            credentials: true,
            origin: process.env.FRONTEND_URL,
        },
    }, details => {
        console.log(`Server running on port http:/localhost:${details.port}`);
    }
);
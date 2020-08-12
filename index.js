#!/usr/bin/env node


const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
});

const port = process.env.PORT || 80;

server.listen(port, () => {
	console.log(`Example app listening on port ${port}!`);
});


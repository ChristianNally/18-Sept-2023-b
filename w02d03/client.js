const net = require('net');

const options = {
  host: 'localhost',
  port: 3214
};

const connection = net.createConnection(options);

// set the encoding on the connection
connection.setEncoding('utf-8');

// listen for incoming messages
connection.on('data', (message) => {
  console.log('message: ', message);
});

// send a message to the server
// connection.write('it is good to be here!');

// set the encoding on standard in (stdin)
process.stdin.setEncoding('utf-8');

// listen for incoming messages from stdin
process.stdin.on('data', (input) => {
  const message = input.trim(); // removes the newline character

  // send the message to the server
  connection.write(message);
});

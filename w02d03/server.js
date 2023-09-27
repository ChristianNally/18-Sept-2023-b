const net = require('net');

const server = net.createServer();

const port = 3214;

// create an array to hold all the connection objects
const connections = [];

// runs every time someone connects
server.on('connection', (connection) => {
  console.log('a new client has connected');

  // add this connection to our array of connections
  connections.push(connection);
  console.log('number of connections:', connections.length);

  // use .write to send a message to the client
  connection.write('welcome to the server!!');

  // set the encoding on the connection to utf8
  connection.setEncoding('utf-8');

  // listen for incoming messages from the client
  connection.on('data', (message) => {
    console.log('client says: ', message);

    // echo the message out to all connected clients
    for (const conn of connections) {
      // make sure that it is not the current connection (the person who sent the message)
      if (conn !== connection) {
        // send a message to each one
        conn.write(message);
      }    
    }
  });
});

// start the server with .listen
server.listen(port, () => {
  console.log(`the server is running on port ${port}`);
}); 

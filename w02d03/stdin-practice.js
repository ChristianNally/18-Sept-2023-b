// set the encoding on standard in (stdin)
process.stdin.setEncoding('utf-8');

// listen for incoming messages from stdin
process.stdin.on('data', (whateverTheUserTyped) => {
  console.log(whateverTheUserTyped.trim());
});

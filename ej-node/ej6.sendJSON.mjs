// Our HTTP server now sends a JSON response body.
// Change the location in the response to "Mars". Run the server and
//make a request to it with curl using the --verbose flag.
// What is the value of the Content-Length response header?

import { createServer } from "node:http";

const PORT = 3000;

const server = createServer((req, res) => {
  console.log("request received");

  res.writeHead(200, {"Content-Type": "application/json"});
  res.end(JSON.stringify({location: 'Mars'}));
});

server.listen(PORT,() => {
  console.log(`server running at ${PORT}`);
});

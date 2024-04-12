// Our HTTP server sends an HTML response body.
// Replace the text in the HTML with your own message.
// Run the server and use your web browser to test your changes.

 import { createServer } from "node:http";

 const PORT = 3000;

 const server = createServer((req, res) => {
  console.log("request received");

   res.writeHead(200, {"Content-Type": "text/html"});
   res.end("<html><body><h1>LOCAL PAGE<h1><body><html>");
 });

 server.listen(PORT,() => {
   console.log(`server running at ${PORT}`);
 });



const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain",
  });
  res.end("My name is Bard.");
});

server.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
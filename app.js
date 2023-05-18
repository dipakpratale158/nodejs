const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  switch (url) {
    case "/":
      res.writeHead(200, {
        "Content-Type": "text/plain",
      });
      res.end("Welcome home.");
      break;
    case "/about":
      res.writeHead(200, {
        "Content-Type": "text/plain",
      });
      res.end("Welcome to About Us page.");
      break;
    case "/node":
      res.writeHead(200, {
        "Content-Type": "text/plain",
      });
      res.end("Welcome to my Node Js project.");
      break;
    default:
      res.writeHead(404, {
        "Content-Type": "text/plain",
      });
      res.end("Page not found.");
      break;
  }
});

server.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
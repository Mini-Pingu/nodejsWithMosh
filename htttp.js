const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hi");
    res.end();
  }

  if (req.url === "/fuck") {
    res.write(JSON.stringify({ id: 123 }));
    res.end();
  }
});

// server.on("connection", (socket) => {
//   console.log("New connection...");
// });

server.listen(3000); // server is class from EventEmitter

console.log("listening on port 3000...");

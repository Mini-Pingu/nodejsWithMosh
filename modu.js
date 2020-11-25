const path = require("path");
const os = require("os");
const fs = require("fs");

let pathObj = path.parse(__filename);

console.log(pathObj.dir);

let totalMemory = os.totalmem();
let freeMemory = os.freemem();
let file = fs.readdirSync("./", function (err, files) {
  if (err) console.log("error", err);
  else console.log("result", files);
});

console.log(`${totalMemory}`);
console.log(`${freeMemory}`);
console.log(`${file}`);

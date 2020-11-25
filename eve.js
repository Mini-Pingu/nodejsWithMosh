// const EventEmitter = require("events");
const Logger = require("./logger");

const logger = new Logger();

logger.on("messageLogged", (arg) => {
  console.log("arg:", arg);
});

logger.log("messageLogged");

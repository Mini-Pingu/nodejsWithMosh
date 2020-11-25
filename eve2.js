const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("hihi", () => {
  console.log("listened");
});

emitter.emit("hihi");

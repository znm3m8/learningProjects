console.log("\033[2J");

const EventEmitter = require("events");

const Logger = require("./logger");
const logger = new Logger();

//Register a Listener
logger.on("messageLogged", e => {
  console.log("Listener called", e);
});

logger.log("message");

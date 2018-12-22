console.log("\033[2J");

function Stopwatch() {
  let startTime;
  let endTime;
  let duration = 0;
  let running = false;

  this.start = function() {
    if (running) {
      throw new Error("Stopwatch has already started");
    }
    running = true;
    startTime = new Date();
  };
  this.stop = function() {
    if (!running) {
      throw new Error("Stopwatch is not running");
    }
    endTime = new Date();
    duration += (endTime.getTime() - startTime.getTime()) / 1000;
    running = false;
  };
  this.reset = function() {
    if (running) {
      throw new Error("Stopwatch is currently running");
    }
    startTime = null;
    endTime = null;
    duration = 0;
    running = false;
  };

  Object.defineProperty(this, "duration", {
    get: function() {
      return duration;
    }
  });
}

const sw = new Stopwatch();

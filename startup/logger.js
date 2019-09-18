class Logger {
  constructor(moduleName) {
    this.moduleName = moduleName;
  }
  log(...logMessages) {
    console.log(...[new Date(), this.moduleName, ...logMessages]);
  }
  error(...logMessages) {
    console.error(...[new Date(), this.moduleName, ...logMessages]);
  }
  warn(...logMessages) {
    console.warn(...[new Date(), this.moduleName, ...logMessages]);
  }
  info(...logMessages) {
    console.info(...[new Date(), this.moduleName, ...logMessages]);
  }
}

module.exports = Logger;

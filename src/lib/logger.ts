import pino from "pino";

export const logger = pino({
  level: process.env.LOG_LEVEL || "debug",
  formatters: {
    level: (label) => ({ level: label }),
  },
  timestamp: pino.stdTimeFunctions.isoTime,
});


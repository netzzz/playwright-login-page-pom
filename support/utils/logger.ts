import fs from 'fs';
import path from 'path';
import { createLogger, format, transports } from 'winston';
const { combine, timestamp, printf } = format;

// Ensure the logs directory exists
const logsDir = path.join(__dirname, '../..', 'logs');
fs.mkdirSync(logsDir, { recursive: true });

// Create a timestamp-based filename
const logFileName = `test-log-${new Date().toISOString().replace(/[:.]/g, '-')}.log`;

// Define log format
const logFormat = printf(({ level, message, timestamp }) => {
  return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
});

// Create and export the logger
const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    logFormat
  ),
  transports: [
    new transports.File({ filename: path.join(logsDir, logFileName) }),
    new transports.Console()
  ],
});

export default logger;
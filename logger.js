const winston = require('winston');

// Configure Winston logger
const logger = winston.createLogger({
    level: 'info', // Set the log level
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(), // Log to console
        new winston.transports.File({ filename: 'test-logs.log' }) // Log to a file
    ]
});

module.exports = logger;

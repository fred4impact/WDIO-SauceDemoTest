const url = require('./urls');
const ENV = process.env.ENV;

if (!ENV || !['qa', 'dev', 'staging'].includes(ENV)) {
    console.log('Use one of the env enums in run time: ENV=staging|qa|prod');
    process.exit(1); // Exit with a non-zero status code to indicate an error
}

exports.config = {
    runner: 'local',
    specs: ['./test/**/*.js'],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        browserName: 'chrome',
        acceptInsecureCerts: true,
    }],
    logLevel: 'info',
    baseUrl: url[ENV],
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
    },
    before() {
        browser.url('/');
    },
};

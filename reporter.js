const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "cypress/reports/json",  // ** Path of .json file **//
    reportPath: "cypress/reports",
    metadata: {
        browser: {
            name: "chrome",
            version: "81",
        },
        device: "Local test machine",
        platform: {
            name: "mac",
            version: "Catalina",
        },
    },
});
import { Config } from "protractor";

/**
 * Protractor basic configuration
 */
export let config: Config = {
    seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    framework: "custom",
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    directConnect: false,
    specs: [
        "../src/**/*.feature"
        // "src/**/*.spect.js"
    ],
    baseURL: 'http://localhost:8080/',
    cucumberOpts: {
        require: [
            'e2e/**/*.steps.js'
        ],
        tags: false,
        profile: false,
        'no-source': true
    },
    ignoreUncaughtExceptions: true
}
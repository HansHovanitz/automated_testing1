// Karma configuration
// Generated on Tue Jul 26 2016 15:59:52 GMT-0700 (US Mountain Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'sinon'],


    // list of files / patterns to load in the browser
    files: [

        './node_modules/angular/angular.js',                             // angular
        //'./node_modules/angular-ui-router/release/angular-ui-router.js', // ui-router
        './node_modules/angular-mocks/angular-mocks.js',                 // loads our modules for tests
        //'./app/services/users/users.js',                                 // our Users factory
        //'./app/app.js',                                                  // our angular app
        //'./app/services/users/users.spec.js'                             // our test file for our Users fac
        //'./app/assets/js/script.spec.js',
        './node_modules/requirejs/require.js',
        //'./node_modules/rewire/lib/rewire.js',


        //'./node_modules/rewire/lib/rewire.js',
        //'./node_modules/rewire/testLib/*.js',

        'app/assets/js/script.js',
        'app/assets/js/pw.js',


        //'script.js',
        //'pw.js',
        'test/spec/*.js',

    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    //preprocessors: { '*.js': ['coverage'] },
    preprocessors: { 'app/assets/js/*.js': ['coverage'] },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'coverage'],

    


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    //logLevel: config.LOG_DISABLE,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}

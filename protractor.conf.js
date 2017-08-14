// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'firefox'
  },
  
  // directConnect: true,

  // see below link for geckoDriver
  // https://github.com/angular/protractor/blob/master/lib/config.ts
  // after following:
  // npm install geckodriver --save-dev
  // set geckDriver like below:
  geckoDriver: "/home/guney/Desktop/tdd/tdd-chp8/node_modules/geckodriver/bin/geckodriver",

  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};

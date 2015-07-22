// An example configuration file.
//var HtmlScreenshotReporter = require('C:/Users/Administrator/AppData/Roaming/npm/node_modules/protractor-jasmine2-screenshot-reporter');
var Jsondata = require('./CalculatorScripts/testData.json');
//var folderName = (new Date()).toString().split(' ').splice(1, 4).join(' ');
exports.config = {

  framework: 'jasmine2',
	//seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
    multiCapabilities: [{
        browserName: 'firefox'
    }, {
        browserName: 'chrome'
    }],



  // Spec patterns are relative to the current working directly when
  // protractor is called.
//  specs: ['./CalculatorScripts/*.js'],
    suites: {
        calc: './CalculatorScripts/*.js',
        cafe: './Cafe/*.js'
    },

    baseUrl: 'http://juliemr.github.io/protractor-demo/',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  },
  params: {
      Addi: {
        input1: Jsondata.AddInput1,
            input2: Jsondata.AddInput2,
              output:  Jsondata.AddOutput,
              VerifyHistory: Jsondata.AddHistory
      },
    Subt: {
        input1: Jsondata.SubInput1,
            input2: Jsondata.SubInput2,
            output: Jsondata.SubOutput,
            VerifyHistory: Jsondata.SubHistory
    },
      Mulp: {
          input1: Jsondata.MulInput1,
          input2: Jsondata.MulInput2,
          output: Jsondata.MulOutput,
          VerifyHistory: Jsondata.MulHistory
      }
  },

  onPrepare: function() {
        /*jasmine.getEnv().addReporter(new HtmlScreenshotReporter({
            dest: 'HTMLResults/July22.1',
            filename: 'my-report.html',
            reportOnlyFailedSpecs: false,
            captureOnlyFailedSpecs: true
        }));*/
        var jasmineReporters = require('C:/Users/Administrator/AppData/Roaming/npm/node_modules/jasmine-reporters');
        return browser.getProcessedConfig().then(function(config) {
          // you could use other properties here if you want, such as platform and version
          var browserName = config.capabilities.browserName;

          var junitReporter = new jasmineReporters.JUnitXmlReporter({
              consolidateAll: true,
              savePath: 'XMLresults',
              // this will produce distinct xml files for each capability
              filePrefix: browserName + '-xmloutput',
              modifySuiteName: function(generatedSuiteName, suite) {
                  // this will produce distinct suite names for each capability,
                  // e.g. 'firefox.login tests' and 'chrome.login tests'
                  return browserName + '.' + generatedSuiteName;
              }
          });
            jasmine.getEnv().addReporter(junitReporter);
        });
  }

};

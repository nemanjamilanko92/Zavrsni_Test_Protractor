import {Config,browser} from 'protractor';

let Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
export let config: Config = {
 SELENIUM_PROMISE_MANAGER: false,
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome'
  },
  specs: [ // './specs/Login.spec.js' 
              './specs/DodavanjeZgrada.spec.js'
           // './specs/PregledZgrada.spec.js'
           // './specs/DodavanjeStanara.spec.js'
           // './specs/PregledStanara.spec.js'
           // './specs/Stanovi.spec.js'
           // './specs/Obavestenja.spec.js'
           // './specs/PredloziTackeDnevnogReda.spec.js'
           // './specs/Kvarovi.spec.js'
           // './specs/PromenaLozinke.spec.js'
           // './specs/Stan.spec.js'
          ],
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  jasmineNodeOpts:{
    showColors:true,
  
  },
  getPageTimeout: 30000,
  onPrepare:()=>{
   browser.manage().timeouts().implicitlyWait(5000)
    browser.driver.manage().window().maximize();
   // browser.ignoreSynchronization = true;
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: 'target/screenshots',
        screenshotsFolder: 'images',
     
        fileNameDateSuffix: true,
        fixedScreenshotName: true
      }));
    
  },
  suites:{
    smoke:['spec1.js']
  },
directConnect:true,
  noGlobals: false
};
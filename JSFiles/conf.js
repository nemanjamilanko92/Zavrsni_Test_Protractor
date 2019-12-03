"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
let Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
    SELENIUM_PROMISE_MANAGER: false,
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome'
    },
    specs: [ // './specs/Login.spec.js' 
    // './specs/DodavanjeZgrada.spec.js'
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
    jasmineNodeOpts: {
        showColors: true,
    },
    getPageTimeout: 30000,
    onPrepare: () => {
        protractor_1.browser.manage().timeouts().implicitlyWait(5000);
        protractor_1.browser.driver.manage().window().maximize();
        // browser.ignoreSynchronization = true;
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: 'target/screenshots',
            screenshotsFolder: 'images',
            fileNameDateSuffix: true,
            fixedScreenshotName: true
        }));
    },
    suites: {
        smoke: ['spec1.js']
    },
    directConnect: true,
    noGlobals: false
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBMEM7QUFFMUMsSUFBSSxvQkFBb0IsR0FBRyxPQUFPLENBQUMsbUNBQW1DLENBQUMsQ0FBQztBQUM3RCxRQUFBLE1BQU0sR0FBVztJQUMzQix3QkFBd0IsRUFBRSxLQUFLO0lBQzlCLFNBQVMsRUFBRSxTQUFTO0lBQ3BCLFlBQVksRUFBRTtRQUNaLFdBQVcsRUFBRSxRQUFRO0tBQ3RCO0lBQ0QsS0FBSyxFQUFFLEVBQUUsMkJBQTJCO0lBQzNCLG9DQUFvQztJQUNwQyxrQ0FBa0M7SUFDbEMscUNBQXFDO0lBQ3JDLG1DQUFtQztJQUNuQyw0QkFBNEI7SUFDNUIsZ0NBQWdDO0lBQ2hDLDZDQUE2QztJQUM3Qyw0QkFBNEI7SUFDNUIsbUNBQW1DO0lBQ25DLHlCQUF5QjtLQUN6QjtJQUNULGtEQUFrRDtJQUNsRCxlQUFlLEVBQUM7UUFDZCxVQUFVLEVBQUMsSUFBSTtLQUVoQjtJQUNELGNBQWMsRUFBRSxLQUFLO0lBQ3JCLFNBQVMsRUFBQyxHQUFFLEVBQUU7UUFDYixvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUMvQyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM3Qyx3Q0FBd0M7UUFDdkMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FDMUIsSUFBSSxvQkFBb0IsQ0FBQztZQUN2QixRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLGlCQUFpQixFQUFFLFFBQVE7WUFFM0Isa0JBQWtCLEVBQUUsSUFBSTtZQUN4QixtQkFBbUIsRUFBRSxJQUFJO1NBQzFCLENBQUMsQ0FBQyxDQUFDO0lBRVIsQ0FBQztJQUNELE1BQU0sRUFBQztRQUNMLEtBQUssRUFBQyxDQUFDLFVBQVUsQ0FBQztLQUNuQjtJQUNILGFBQWEsRUFBQyxJQUFJO0lBQ2hCLFNBQVMsRUFBRSxLQUFLO0NBQ2pCLENBQUMifQ==
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
let Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
const jasmine_spec_reporter_1 = require("jasmine-spec-reporter");
exports.config = {
    SELENIUM_PROMISE_MANAGER: false,
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome'
    },
    specs: [
        './specs/Login.spec.js'
        //   './specs/DodavanjeZgrada.spec.js'
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
        protractor_1.browser.manage().timeouts().implicitlyWait(1000);
        protractor_1.browser.driver.manage().window().maximize();
        // browser.ignoreSynchronization = true;
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: 'target/report',
            screenshotsFolder: 'screenshots',
            takeScreenshots: true,
            takeScreenshotsOnlyOnFailures: true,
            fileNameDateSuffix: true,
            fixedScreenshotName: true,
            cleanDestination: false,
            fileNameSeparator: '-',
        }));
        jasmine.getEnv().addReporter(new jasmine_spec_reporter_1.SpecReporter({
            spec: {
                displayStacktrace: true,
                displaySuccessful: true,
                displayFailed: true
            },
            summary: {
                displayDuration: true,
                displayErrorMessages: true
            }
        }));
    },
    suites: {
        smoke: ['spec1.js']
    },
    directConnect: true,
    noGlobals: false
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBMEM7QUFDMUMsSUFBSSxvQkFBb0IsR0FBRyxPQUFPLENBQUMsbUNBQW1DLENBQUMsQ0FBQztBQUN4RSxpRUFBbUQ7QUFDeEMsUUFBQSxNQUFNLEdBQVc7SUFDM0Isd0JBQXdCLEVBQUUsS0FBSztJQUM5QixTQUFTLEVBQUUsU0FBUztJQUNwQixZQUFZLEVBQUU7UUFDWixXQUFXLEVBQUUsUUFBUTtLQUN0QjtJQUNELEtBQUssRUFBRTtRQUNNLHVCQUF1QjtRQUMzQixzQ0FBc0M7UUFDdEMsa0NBQWtDO1FBQ2xDLHFDQUFxQztRQUNyQyxtQ0FBbUM7UUFDbkMsNEJBQTRCO1FBQzVCLGdDQUFnQztRQUNoQyw2Q0FBNkM7UUFDN0MsNEJBQTRCO1FBQzVCLG1DQUFtQztRQUNuQyx5QkFBeUI7S0FDekI7SUFDVCxrREFBa0Q7SUFDbEQsZUFBZSxFQUFDO1FBQ2QsVUFBVSxFQUFDLElBQUk7S0FFaEI7SUFDRCxjQUFjLEVBQUUsS0FBSztJQUNyQixTQUFTLEVBQUMsR0FBRSxFQUFFO1FBQ2Isb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDL0Msb0JBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDN0Msd0NBQXdDO1FBQ3ZDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQzFCLElBQUksb0JBQW9CLENBQUM7WUFDdkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsaUJBQWlCLEVBQUUsYUFBYTtZQUNoQyxlQUFlLEVBQUUsSUFBSTtZQUNyQiw2QkFBNkIsRUFBRSxJQUFJO1lBQ25DLGtCQUFrQixFQUFFLElBQUk7WUFDeEIsbUJBQW1CLEVBQUUsSUFBSTtZQUN6QixnQkFBZ0IsRUFBRSxLQUFLO1lBQ3ZCLGlCQUFpQixFQUFFLEdBQUc7U0FFdkIsQ0FBQyxDQUFDLENBQUM7UUFDSixPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksb0NBQVksQ0FBQztZQUM1QyxJQUFJLEVBQUU7Z0JBQ0osaUJBQWlCLEVBQUUsSUFBSTtnQkFDdkIsaUJBQWlCLEVBQUUsSUFBSTtnQkFDdkIsYUFBYSxFQUFFLElBQUk7YUFDcEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsZUFBZSxFQUFFLElBQUk7Z0JBQ3JCLG9CQUFvQixFQUFFLElBQUk7YUFDM0I7U0FDRixDQUFDLENBQUMsQ0FBQztJQUVSLENBQUM7SUFDRCxNQUFNLEVBQUM7UUFDTCxLQUFLLEVBQUMsQ0FBQyxVQUFVLENBQUM7S0FDbkI7SUFDSCxhQUFhLEVBQUMsSUFBSTtJQUNoQixTQUFTLEVBQUUsS0FBSztDQUNqQixDQUFDIn0=
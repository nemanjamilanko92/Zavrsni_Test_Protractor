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
    specs: [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBMEM7QUFFMUMsSUFBSSxvQkFBb0IsR0FBRyxPQUFPLENBQUMsbUNBQW1DLENBQUMsQ0FBQztBQUM3RCxRQUFBLE1BQU0sR0FBVztJQUMzQix3QkFBd0IsRUFBRSxLQUFLO0lBQzlCLFNBQVMsRUFBRSxTQUFTO0lBQ3BCLFlBQVksRUFBRTtRQUNaLFdBQVcsRUFBRSxRQUFRO0tBQ3RCO0lBQ0QsS0FBSyxFQUFFO1FBQ0ssaUNBQWlDO1FBQ3BDLGtDQUFrQztRQUNsQyxxQ0FBcUM7UUFDckMsbUNBQW1DO1FBQ25DLDRCQUE0QjtRQUM1QixnQ0FBZ0M7UUFDaEMsNkNBQTZDO1FBQzdDLDRCQUE0QjtRQUM1QixtQ0FBbUM7UUFDbkMseUJBQXlCO0tBQ3pCO0lBQ1Qsa0RBQWtEO0lBQ2xELGVBQWUsRUFBQztRQUNkLFVBQVUsRUFBQyxJQUFJO0tBRWhCO0lBQ0QsY0FBYyxFQUFFLEtBQUs7SUFDckIsU0FBUyxFQUFDLEdBQUUsRUFBRTtRQUNiLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQy9DLG9CQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzdDLHdDQUF3QztRQUN2QyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUMxQixJQUFJLG9CQUFvQixDQUFDO1lBQ3ZCLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsaUJBQWlCLEVBQUUsUUFBUTtZQUUzQixrQkFBa0IsRUFBRSxJQUFJO1lBQ3hCLG1CQUFtQixFQUFFLElBQUk7U0FDMUIsQ0FBQyxDQUFDLENBQUM7SUFFUixDQUFDO0lBQ0QsTUFBTSxFQUFDO1FBQ0wsS0FBSyxFQUFDLENBQUMsVUFBVSxDQUFDO0tBQ25CO0lBQ0gsYUFBYSxFQUFDLElBQUk7SUFDaEIsU0FBUyxFQUFFLEtBQUs7Q0FDakIsQ0FBQyJ9
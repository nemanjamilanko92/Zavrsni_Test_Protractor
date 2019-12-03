"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const login_page_1 = require("../pageObj/login.page");
const using = require("jasmine-data-provider");
const data_1 = __importDefault(require("../DataProvider/data"));
const adminNavBar_page_1 = require("../pageObj/adminNavBar.page");
describe('testiranje Logovanja', () => {
    //instanciranje objekata
    let loginPage;
    let adminNavBarPage;
    beforeAll(() => __awaiter(this, void 0, void 0, function* () {
        adminNavBarPage = new adminNavBar_page_1.AdminNavBarPage();
        loginPage = new login_page_1.LoginPage();
        //odlazimo na stranicu za logovanje
        yield protractor_1.browser.get("http://localhost:8080/logovanje");
    }));
    describe("Pozitivni testovi", () => {
        //za ove testove koristimo data provider (../DataProvider/data)
        using(data_1.default.dataProviderZaLoginpage, (podaci, opis) => {
            it(`Negativni Login Testovi ${opis}}`, () => __awaiter(this, void 0, void 0, function* () {
                //unosimo pogresne podatke za logovanje
                //ocekujemo razlicite poruke za neuspesno logovanje u zavisnosti od prosledjenih podataka
                yield loginPage.logIn(podaci.email, podaci.lozinka);
                expect(yield loginPage.getErrMsgText()).toBe(podaci.poruka);
            }));
        });
    });
    describe("Negativni testovi", () => {
        it('Pozitivan Login Test', () => __awaiter(this, void 0, void 0, function* () {
            //unosimo ocekivane podatke za logovanje
            //ocekujemo da cemo na pocetnoj stranici procitati mail ulogovanog korsinika
            yield loginPage.logIn("admin@gmail.com", "Bar5slova");
            expect(yield adminNavBarPage.getAdminEmailText()).toBe("admin@gmail.com");
        }));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW4uc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NwZWNzL0xvZ2luLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFtRDtBQUNuRCxzREFBOEM7QUFDOUMsK0NBQWdEO0FBQ2hELGdFQUEyRDtBQUMzRCxrRUFBOEQ7QUFDOUQsUUFBUSxDQUFDLHNCQUFzQixFQUFDLEdBQUUsRUFBRTtJQUNsQyx3QkFBd0I7SUFDeEIsSUFBSSxTQUFtQixDQUFDO0lBQ3hCLElBQUksZUFBK0IsQ0FBQztJQUNwQyxTQUFTLENBQUMsR0FBTyxFQUFFO1FBQ2pCLGVBQWUsR0FBQyxJQUFJLGtDQUFlLEVBQUUsQ0FBQztRQUN0QyxTQUFTLEdBQUMsSUFBSSxzQkFBUyxFQUFFLENBQUM7UUFDMUIsbUNBQW1DO1FBQ25DLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztJQUN2RCxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsUUFBUSxDQUFDLG1CQUFtQixFQUFDLEdBQUUsRUFBRTtRQUNqQywrREFBK0Q7UUFDL0QsS0FBSyxDQUFDLGNBQXVCLENBQUMsdUJBQXVCLEVBQUMsQ0FBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLEVBQUU7WUFDckUsRUFBRSxDQUFDLDJCQUEyQixJQUFJLEdBQUcsRUFBQyxHQUFPLEVBQUU7Z0JBRTdDLHVDQUF1QztnQkFDdkMseUZBQXlGO2dCQUV6RixNQUFNLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ25ELE1BQU0sQ0FBQyxNQUFNLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUQsQ0FBQyxDQUFBLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0YsQ0FBQyxDQUFDLENBQUE7SUFFQSxRQUFRLENBQUMsbUJBQW1CLEVBQUMsR0FBRSxFQUFFO1FBRWpDLEVBQUUsQ0FBQyxzQkFBc0IsRUFBQyxHQUFPLEVBQUU7WUFFakMsd0NBQXdDO1lBQ3hDLDRFQUE0RTtZQUU1RSxNQUFNLFNBQVMsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDdEQsTUFBTSxDQUFDLE1BQU0sZUFBZSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM1RSxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7QUFDRixDQUFDLENBQUMsQ0FBQSJ9
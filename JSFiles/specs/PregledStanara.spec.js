"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const login_page_1 = require("../pageObj/login.page");
const adminNavBar_page_1 = require("../pageObj/adminNavBar.page");
const stanariDodavanje_page_1 = require("../pageObj/stanariDodavanje.page");
const stanariPregled_page_1 = require("../pageObj/stanariPregled.page");
describe('testiranje Dodavanja Zgrade', () => {
    let loginPage;
    let adminNavBarPage;
    let stanariDodavanjePage;
    let stanariPregledPage;
    beforeAll(() => __awaiter(this, void 0, void 0, function* () {
        //instanciranje objekata
        adminNavBarPage = new adminNavBar_page_1.AdminNavBarPage();
        loginPage = new login_page_1.LoginPage();
        stanariDodavanjePage = new stanariDodavanje_page_1.StanariDodavanjePage();
        stanariPregledPage = new stanariPregled_page_1.StanariPregledPage();
        //odlazimo na stranicu za logovanje
        yield protractor_1.browser.get("http://localhost:8080/logovanje");
        //logujemo se kao admin
        yield loginPage.logIn("admin@gmail.com", "Bar5slova");
        //navigujemo na stranicu pregleda stanara
        yield adminNavBarPage.stanariNav.click();
        yield stanariDodavanjePage.pregled.click();
    }));
    describe("Pozitivni testovi", () => {
        it("Pozitivan Test Pretrage Stanara 1", () => __awaiter(this, void 0, void 0, function* () {
            //u polje za pretragu stanara unosimo ime i prezime stanara
            //ocekujemo da ce se stanar pojaviti u filtriranoj listi
            yield stanariPregledPage.UnosPretrage("Marko");
            expect(yield stanariPregledPage.proveraStanara("Marko", "Markovic", "(marko@gmail.com)")).toBeTruthy();
        }));
        it("Pozitivan Test Pretrage Stanara 2", () => __awaiter(this, void 0, void 0, function* () {
            //u polje za pretragu stanara unosimo mail stanara
            //ocekujemo da ce se stanar pojaviti u filtriranoj listi
            yield stanariPregledPage.UnosPretrage("predSkup@gmail.com");
            expect(yield stanariPregledPage.proveraStanara("Gospodin", "Predsednik", "(predSkup@gmail.com)")).toBeTruthy();
        }));
        it("Pozitivan Test Pretrage Stanara 3", () => __awaiter(this, void 0, void 0, function* () {
            //u polje za pretragu stanara unosimo nepostojeceg stanara (nasumicni text)
            //ocekujemo poruku da ni jedan stanar nije pronadjen
            yield stanariPregledPage.UnosPretrage("AAAAAAAAA");
            expect(yield stanariPregledPage.geterrMessZaNepostojecegStanara()).toBe("Nijedan stanar sa trazenim kriterijumom nije prondajen!");
        }));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJlZ2xlZFN0YW5hcmEuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NwZWNzL1ByZWdsZWRTdGFuYXJhLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFtRDtBQUNuRCxzREFBK0M7QUFDL0Msa0VBQThEO0FBQzlELDRFQUF3RTtBQUN4RSx3RUFBb0U7QUFDcEUsUUFBUSxDQUFDLDZCQUE2QixFQUFDLEdBQUUsRUFBRTtJQUV6QyxJQUFJLFNBQW1CLENBQUM7SUFDeEIsSUFBSSxlQUErQixDQUFDO0lBQ3BDLElBQUksb0JBQXlDLENBQUM7SUFDOUMsSUFBSSxrQkFBcUMsQ0FBQztJQUMxQyxTQUFTLENBQUMsR0FBTyxFQUFFO1FBQ2pCLHdCQUF3QjtRQUN4QixlQUFlLEdBQUMsSUFBSSxrQ0FBZSxFQUFFLENBQUM7UUFDdEMsU0FBUyxHQUFDLElBQUksc0JBQVMsRUFBRSxDQUFDO1FBQzFCLG9CQUFvQixHQUFDLElBQUksNENBQW9CLEVBQUUsQ0FBQztRQUNoRCxrQkFBa0IsR0FBQyxJQUFJLHdDQUFrQixFQUFFLENBQUM7UUFDNUMsbUNBQW1DO1FBQ25DLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztRQUNyRCx1QkFBdUI7UUFDdkIsTUFBTSxTQUFTLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3RELHlDQUF5QztRQUN6QyxNQUFNLGVBQWUsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDekMsTUFBTSxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDN0MsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLFFBQVEsQ0FBQyxtQkFBbUIsRUFBQyxHQUFFLEVBQUU7UUFFakMsRUFBRSxDQUFDLG1DQUFtQyxFQUFDLEdBQU8sRUFBRTtZQUU5QywyREFBMkQ7WUFDM0Qsd0RBQXdEO1lBRXhELE1BQU0sa0JBQWtCLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQzlDLE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUV4RyxDQUFDLENBQUEsQ0FBQyxDQUFBO1FBRUYsRUFBRSxDQUFDLG1DQUFtQyxFQUFDLEdBQU8sRUFBRTtZQUU5QyxrREFBa0Q7WUFDbEQsd0RBQXdEO1lBQ3hELE1BQU0sa0JBQWtCLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLENBQUE7WUFDM0QsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxZQUFZLEVBQUUsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBRWhILENBQUMsQ0FBQSxDQUFDLENBQUE7UUFFRixFQUFFLENBQUMsbUNBQW1DLEVBQUMsR0FBTyxFQUFFO1lBRTlDLDJFQUEyRTtZQUMzRSxvREFBb0Q7WUFFcEQsTUFBTSxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUE7WUFDbEQsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLENBQUMsK0JBQStCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyx5REFBeUQsQ0FBQyxDQUFDO1FBQ3JJLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtBQUNGLENBQUMsQ0FBQyxDQUFBIn0=
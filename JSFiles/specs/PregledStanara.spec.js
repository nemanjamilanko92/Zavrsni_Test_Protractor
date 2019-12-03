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
const Select_1 = require("../helperClass/Select");
describe('testiranje Dodavanja Zgrade', () => {
    let select;
    let loginPage;
    let adminNavBarPage;
    let stanariDodavanjePage;
    let stanariPregledPage;
    beforeAll(() => __awaiter(this, void 0, void 0, function* () {
        //instanciranje objekata
        select = new Select_1.Select();
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
            yield stanariPregledPage.UnosPretrage("Gospodin Predsednik");
            expect(stanariPregledPage.getimeIPrezimeGosPred()).toBe("Gospodin Predsednik");
        }));
        it("Pozitivan Test Pretrage Stanara 2", () => __awaiter(this, void 0, void 0, function* () {
            //u polje za pretragu stanara unosimo mail stanara
            //ocekujemo da ce se stanar pojaviti u filtriranoj listi
            yield stanariPregledPage.UnosPretrage("predSkup@gmail.com");
            expect(stanariPregledPage.getimeIPrezimeGosPred()).toBe("Gospodin Predsednik");
        }));
        it("Pozitivan Test Pretrage Stanara 3", () => __awaiter(this, void 0, void 0, function* () {
            //u polje za pretragu stanara unosimo nepostojeceg stanara (nasumicni text)
            //ocekujemo poruku da ni jedan stanar nije pronadjen
            yield stanariPregledPage.UnosPretrage("AAAAAAAAA");
            expect(stanariPregledPage.geterrMessZaNepostojecegStanara()).toBe("Nijedan stanar sa trazenim kriterijumom nije prondajen!");
        }));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJlZ2xlZFN0YW5hcmEuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NwZWNzL1ByZWdsZWRTdGFuYXJhLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFtRDtBQUNuRCxzREFBK0M7QUFDL0Msa0VBQThEO0FBQzlELDRFQUF3RTtBQUN4RSx3RUFBb0U7QUFDcEUsa0RBQStDO0FBRS9DLFFBQVEsQ0FBQyw2QkFBNkIsRUFBQyxHQUFFLEVBQUU7SUFDekMsSUFBSSxNQUFhLENBQUM7SUFDbEIsSUFBSSxTQUFtQixDQUFDO0lBQ3hCLElBQUksZUFBK0IsQ0FBQztJQUNwQyxJQUFJLG9CQUF5QyxDQUFDO0lBQzlDLElBQUksa0JBQXFDLENBQUM7SUFDMUMsU0FBUyxDQUFDLEdBQU8sRUFBRTtRQUNqQix3QkFBd0I7UUFDeEIsTUFBTSxHQUFDLElBQUksZUFBTSxFQUFFLENBQUM7UUFDcEIsZUFBZSxHQUFDLElBQUksa0NBQWUsRUFBRSxDQUFDO1FBQ3RDLFNBQVMsR0FBQyxJQUFJLHNCQUFTLEVBQUUsQ0FBQztRQUMxQixvQkFBb0IsR0FBQyxJQUFJLDRDQUFvQixFQUFFLENBQUM7UUFDaEQsa0JBQWtCLEdBQUMsSUFBSSx3Q0FBa0IsRUFBRSxDQUFDO1FBQzVDLG1DQUFtQztRQUNuQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7UUFDckQsdUJBQXVCO1FBQ3ZCLE1BQU0sU0FBUyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUN0RCx5Q0FBeUM7UUFDekMsTUFBTSxlQUFlLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pDLE1BQU0sb0JBQW9CLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdDLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixRQUFRLENBQUMsbUJBQW1CLEVBQUMsR0FBRSxFQUFFO1FBRWpDLEVBQUUsQ0FBQyxtQ0FBbUMsRUFBQyxHQUFPLEVBQUU7WUFFOUMsMkRBQTJEO1lBQzNELHdEQUF3RDtZQUV4RCxNQUFNLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO1lBQzVELE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDakYsQ0FBQyxDQUFBLENBQUMsQ0FBQTtRQUVGLEVBQUUsQ0FBQyxtQ0FBbUMsRUFBQyxHQUFPLEVBQUU7WUFFOUMsa0RBQWtEO1lBQ2xELHdEQUF3RDtZQUV4RCxNQUFNLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO1lBQzNELE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDakYsQ0FBQyxDQUFBLENBQUMsQ0FBQTtRQUVGLEVBQUUsQ0FBQyxtQ0FBbUMsRUFBQyxHQUFPLEVBQUU7WUFFOUMsMkVBQTJFO1lBQzNFLG9EQUFvRDtZQUVwRCxNQUFNLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUNsRCxNQUFNLENBQUMsa0JBQWtCLENBQUMsK0JBQStCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyx5REFBeUQsQ0FBQyxDQUFDO1FBQy9ILENBQUMsQ0FBQSxDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtBQUNGLENBQUMsQ0FBQyxDQUFBIn0=
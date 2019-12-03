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
const zgradeDodavanje_page_1 = require("../pageObj/zgradeDodavanje.page");
const zgradePregled_page_1 = require("../pageObj/zgradePregled.page");
describe('testiranje Dodavanja Zgrade', () => {
    let loginPage;
    let adminNavBarPage;
    let zgradeDodavanjePage;
    let zgradePregledPage;
    beforeAll(() => __awaiter(this, void 0, void 0, function* () {
        //instanciranje objekata
        adminNavBarPage = new adminNavBar_page_1.AdminNavBarPage();
        loginPage = new login_page_1.LoginPage();
        zgradeDodavanjePage = new zgradeDodavanje_page_1.ZgradeDodavanjePage();
        zgradePregledPage = new zgradePregled_page_1.ZgradePregledPage();
        //odlazimo na stranicu za logovanje
        yield protractor_1.browser.get("http://localhost:8080/logovanje");
        //logujemo se kao admin
        yield loginPage.logIn("admin@gmail.com", "Bar5slova");
        //navigujemo na stranicu pregleda zgrada
        yield adminNavBarPage.zgradeNav.click();
        yield zgradeDodavanjePage.pregled.click();
    }));
    describe("Pozitivni testovi", () => {
        it('Pozitivni Test Pretrage Zgrade 1', () => __awaiter(this, void 0, void 0, function* () {
            //u polja za pretragu zgrada unosimo adresu i mesto zgrade
            //ocekujemo da ce se zgrada pojaviti u filtriranoj listi
            yield zgradePregledPage.UnosPretrage("Marsala Tita", "Vrbas");
            expect(yield zgradePregledPage.getAdresaZgradeText()).toBe("Marsala Tita 21, Vrbas");
        }));
        it('Pozitivni Test Pretrage Zgrade 2', () => __awaiter(this, void 0, void 0, function* () {
            //u polje za pretragu zgrada unosimo samo adresu zgrade
            //ocekujemo da ce se zgrada pojaviti u filtriranoj listi
            yield zgradePregledPage.UnosPretrage("Marsala Tita", "");
            expect(yield zgradePregledPage.getAdresaZgradeText()).toBe("Marsala Tita 21, Vrbas");
        }));
        it('Pozitivni Test Pretrage Zgrade 3', () => __awaiter(this, void 0, void 0, function* () {
            //u polje za pretragu zgrada unosimo samo mesto zgrade
            //ocekujemo da ce se zgrada pojaviti u filtriranoj listi
            yield zgradePregledPage.UnosPretrage("", "Vrbas");
            expect(yield zgradePregledPage.getAdresaZgradeText()).toBe("Marsala Tita 21, Vrbas");
        }));
        it('Pozitivni Test Pretrage Zgrade 4', () => __awaiter(this, void 0, void 0, function* () {
            //u polje za pretragu zgrade unosimo nepostojecu zgradu (nasumicni text)
            //ocekujemo poruku da ni jedna zgrada nije pronadjena
            yield zgradePregledPage.UnosPretrage("AAAAAA", "AAAAAA");
            expect(yield zgradePregledPage.errMessZaNepostojecuZgradu.getText()).toBe("Nijedna zgrada sa trazenim kriterijumima nije prondajena!");
        }));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJlZ2xlZFpncmFkYS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3BlY3MvUHJlZ2xlZFpncmFkYS5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBbUQ7QUFDbkQsc0RBQThDO0FBQzlDLGtFQUE4RDtBQUM5RCwwRUFBc0U7QUFDdEUsc0VBQWtFO0FBQ2xFLFFBQVEsQ0FBQyw2QkFBNkIsRUFBQyxHQUFFLEVBQUU7SUFDekMsSUFBSSxTQUFtQixDQUFDO0lBQ3hCLElBQUksZUFBK0IsQ0FBQztJQUNwQyxJQUFJLG1CQUF1QyxDQUFDO0lBQzVDLElBQUksaUJBQW1DLENBQUM7SUFDeEMsU0FBUyxDQUFDLEdBQU8sRUFBRTtRQUNqQix3QkFBd0I7UUFDeEIsZUFBZSxHQUFDLElBQUksa0NBQWUsRUFBRSxDQUFDO1FBQ3RDLFNBQVMsR0FBQyxJQUFJLHNCQUFTLEVBQUUsQ0FBQztRQUMxQixtQkFBbUIsR0FBQyxJQUFJLDBDQUFtQixFQUFFLENBQUM7UUFDOUMsaUJBQWlCLEdBQUMsSUFBSSxzQ0FBaUIsRUFBRSxDQUFDO1FBQzFDLG1DQUFtQztRQUNuQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7UUFDckQsdUJBQXVCO1FBQ3ZCLE1BQU0sU0FBUyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUN0RCx3Q0FBd0M7UUFDeEMsTUFBTSxlQUFlLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3hDLE1BQU0sbUJBQW1CLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzVDLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixRQUFRLENBQUMsbUJBQW1CLEVBQUMsR0FBRSxFQUFFO1FBRWpDLEVBQUUsQ0FBQyxrQ0FBa0MsRUFBQyxHQUFPLEVBQUU7WUFFN0MsMERBQTBEO1lBQzFELHdEQUF3RDtZQUV4RCxNQUFNLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDOUQsTUFBTSxDQUFDLE1BQU0saUJBQWlCLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3ZGLENBQUMsQ0FBQSxDQUFDLENBQUE7UUFFRixFQUFFLENBQUMsa0NBQWtDLEVBQUMsR0FBTyxFQUFFO1lBRTdDLHVEQUF1RDtZQUN2RCx3REFBd0Q7WUFFeEQsTUFBTSxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3pELE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUN2RixDQUFDLENBQUEsQ0FBQyxDQUFBO1FBRUYsRUFBRSxDQUFDLGtDQUFrQyxFQUFDLEdBQU8sRUFBRTtZQUU3QyxzREFBc0Q7WUFDdEQsd0RBQXdEO1lBRXhELE1BQU0saUJBQWlCLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNsRCxNQUFNLENBQUMsTUFBTSxpQkFBaUIsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDdkYsQ0FBQyxDQUFBLENBQUMsQ0FBQTtRQUVGLEVBQUUsQ0FBQyxrQ0FBa0MsRUFBQyxHQUFPLEVBQUU7WUFFN0Msd0VBQXdFO1lBQ3hFLHFEQUFxRDtZQUVyRCxNQUFNLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDekQsTUFBTSxDQUFDLE1BQU0saUJBQWlCLENBQUMsMEJBQTBCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsMkRBQTJELENBQUMsQ0FBQztRQUN6SSxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7QUFDRixDQUFDLENBQUMsQ0FBQSJ9
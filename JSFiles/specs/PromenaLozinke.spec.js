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
const PromenaLozinke_page_1 = require("../pageObj/PromenaLozinke.page");
const predsednikNavBar_page_1 = require("../pageObj/predsednikNavBar.page");
describe('testiranje Promene Lozinke', () => {
    let loginPage;
    let promenaLozinkePage;
    let predsednikNavBar;
    beforeAll(() => __awaiter(this, void 0, void 0, function* () {
        //instanciranje objekata
        loginPage = new login_page_1.LoginPage();
        promenaLozinkePage = new PromenaLozinke_page_1.PromenaLozinkePage();
        predsednikNavBar = new predsednikNavBar_page_1.PredsednikNavBarPage();
        //odlazimo na stranicu za logovanje
        yield protractor_1.browser.get("http://localhost:8080/logovanje");
        //logujemo se kao predsednik skupstine
        yield loginPage.logIn("predSkup@gmail.com", "Bar5slova");
        //navigujemo na stranicu za promenu lozinke
        yield predsednikNavBar.promenaLozinke.click();
    }));
    describe("Pozitivni testovi", () => {
        it('Promena Lozinke Pozitivan', () => __awaiter(this, void 0, void 0, function* () {
            //unosimo podatke u formu za promenu lozinke
            //ocekujemo poruku da je lozinka uspesno promenjena i da smo prebaceni na stranicu za logovanje
            yield promenaLozinkePage.unosLozinke("Bar5slova", "Bar6slova", "Bar6slova");
            expect(yield promenaLozinkePage.getAlertMsg()).toBe("Lozinka uspesno izmenjena!");
            expect(yield protractor_1.browser.getCurrentUrl()).toBe("http://localhost:8080/logovanje");
        }));
        it('Potvrda Da Je Lozinka Promenjana', () => __awaiter(this, void 0, void 0, function* () {
            //logujemo se sa novom lozinkom kako bi potvrdili da je lozinka stvarno promenjena
            //ocekujemo da cemo procitati mail ulogovanog korisnika
            yield loginPage.logIn("predSkup@gmail.com", "Bar6slova");
            expect(yield predsednikNavBar.getEmailText()).toBe("predSkup@gmail.com");
        }));
    });
    describe("Negativni testovi", () => {
        it('Promena Lozinke Negativan 1', () => __awaiter(this, void 0, void 0, function* () {
            //formu za promenu lozinke ostavljamo praznu
            //ocekujemo poruku greske za unos 
            yield predsednikNavBar.promenaLozinke.click();
            yield promenaLozinkePage.unosLozinke("", "", "");
            expect(yield promenaLozinkePage.getStaraLozinkaErrMsg()).toBe("Ovo polje je obavezno!");
            expect(yield promenaLozinkePage.getNovaLozinkaErrMsg()).toBe("Ovo polje je obavezno!");
        }));
        it('Promena Lozinke Negativan 2', () => __awaiter(this, void 0, void 0, function* () {
            //unosimo podatke za promenu lozinke gde potvrdu nove lozinke otavljamo prazanom
            //ocekujemo poruku greske za unos
            yield promenaLozinkePage.unosLozinke("a", "grb", "");
            expect(yield promenaLozinkePage.getNovaLozinkaErrMsg()).toBe("Neispravna lozinka! Pogledajte napomenu.");
            expect(yield promenaLozinkePage.getPotvrdaNoveLozinkaErrMsg()).toBe("Lozinke se ne poklapaju!");
        }));
        it('Promena Lozinke Negativan 3', () => __awaiter(this, void 0, void 0, function* () {
            //unosimo podatke za promenu lozinke gde u potvrdu nove lozinke unosimo staru
            //ocekujemo poruku greske za unos
            yield promenaLozinkePage.unosLozinke("Bar6slova", "Bar5slova", "Bar6slova");
            expect(yield promenaLozinkePage.getPotvrdaNoveLozinkaErrMsg()).toBe("Lozinke se ne poklapaju!");
        }));
        it('Promena Lozinke Negativan 4', () => __awaiter(this, void 0, void 0, function* () {
            //unosimo podatke za promenu lozinke gde u novu lozinku i potvrdu unosimo pogresne podatke (nedostaje veliko slovo)
            //ocekujemo poruku greske za unos
            yield promenaLozinkePage.unosLozinke("Bar5slova", "bar6slova", "bar6slova");
            expect(yield promenaLozinkePage.getNovaLozinkaErrMsg()).toBe("Neispravna lozinka! Pogledajte napomenu.");
        }));
        it('Promena Lozinke Negativan 5', () => __awaiter(this, void 0, void 0, function* () {
            //unosimo podatke za promenu lozinke gde u staru lozinku unosimo pogresne podatke
            //ocekujemo poruku greske za unos
            yield promenaLozinkePage.unosLozinke("a", "Bar5slova", "Bar5slova");
            yield promenaLozinkePage.promeniteLozinku.click();
            expect(yield promenaLozinkePage.getAlertMsg()).toBe("Lozinka nije validnog formata (Mora biti bar jedno veliko slovo, veliko malo slovo i broj i minimalne duzine 6)!");
        }));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvbWVuYUxvemlua2Uuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NwZWNzL1Byb21lbmFMb3ppbmtlLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFrRjtBQUNsRixzREFBOEM7QUFDOUMsd0VBQW9FO0FBQ3BFLDRFQUF3RTtBQUN4RSxRQUFRLENBQUMsNEJBQTRCLEVBQUMsR0FBRSxFQUFFO0lBQ3hDLElBQUksU0FBbUIsQ0FBQztJQUN4QixJQUFJLGtCQUFxQyxDQUFDO0lBQzFDLElBQUksZ0JBQXFDLENBQUM7SUFFMUMsU0FBUyxDQUFDLEdBQU8sRUFBRTtRQUNqQix3QkFBd0I7UUFDeEIsU0FBUyxHQUFDLElBQUksc0JBQVMsRUFBRSxDQUFDO1FBQzFCLGtCQUFrQixHQUFDLElBQUksd0NBQWtCLEVBQUUsQ0FBQztRQUM1QyxnQkFBZ0IsR0FBQyxJQUFJLDRDQUFvQixFQUFFLENBQUM7UUFDNUMsbUNBQW1DO1FBQ25DLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztRQUNyRCxzQ0FBc0M7UUFDdEMsTUFBTSxTQUFTLENBQUMsS0FBSyxDQUFDLG9CQUFvQixFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3pELDJDQUEyQztRQUMzQyxNQUFNLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNoRCxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsUUFBUSxDQUFDLG1CQUFtQixFQUFDLEdBQUUsRUFBRTtRQUVqQyxFQUFFLENBQUMsMkJBQTJCLEVBQUMsR0FBTyxFQUFFO1lBRXRDLDRDQUE0QztZQUM1QywrRkFBK0Y7WUFFL0YsTUFBTSxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUM1RSxNQUFNLENBQUMsTUFBTSxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLElB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
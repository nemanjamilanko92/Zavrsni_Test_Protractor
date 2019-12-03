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
const ZgradeNavBar_page_1 = require("../pageObj/ZgradaKucniSavet/ZgradeNavBar.page");
const Kvarovi_page_1 = require("../pageObj/ZgradaKucniSavet/Kvarovi.page");
describe('testiranje Dodavanja Kvara', () => {
    let loginPage;
    let kvaroviPage;
    let zgradeNavBar;
    beforeAll(() => __awaiter(this, void 0, void 0, function* () {
        //instanciranje objekata
        loginPage = new login_page_1.LoginPage();
        kvaroviPage = new Kvarovi_page_1.KvaroviPage();
        zgradeNavBar = new ZgradeNavBar_page_1.ZgradeNavBar();
        //odlazimo na stranicu za logovanje
        yield protractor_1.browser.get("http://localhost:8080/logovanje");
        //logujemo se kao predsednik skupstine
        yield loginPage.logIn("predSkup@gmail.com", "Bar5slova");
        //navigujemo na stranicu kvarovi
        yield protractor_1.browser.get("http://localhost:8080/zgrada/1/kvarovi");
    }));
    describe("Pozitivni testovi", () => {
        it('Dodavanje Kvara Pozitivan', () => __awaiter(this, void 0, void 0, function* () {
            //unosimo kvar sa ocekivanim podacima i unosimo odgovorno lice
            //ocekujemo poruku o uspesnom dodavanju
            yield kvaroviPage.DodajKvar("a", "a", 0);
            expect(yield kvaroviPage.getAlertObavestenjaMsg()).toBe("Kvar uspesno dodat");
        }));
        it('Dodavanje Kvara Pozitivan Bez Odgovornog Lica', () => __awaiter(this, void 0, void 0, function* () {
            //unosimo kvar sa ocekivanim podacima, ali izostavljamo odgovorno lice
            //ocekujemo poruku o uspesnom dodavanju
            yield zgradeNavBar.kvarovi.click();
            yield kvaroviPage.DodajKvarBezOdgovornogLica("a", "a", 0);
            expect(yield kvaroviPage.getAlertObavestenjaMsg()).toBe("Kvar uspesno dodat");
        }));
        it('Brisanje Kvara Pozitivan', () => __awaiter(this, void 0, void 0, function* () {
            //klickemo na dugme za brisanje kvara
            //ocekujemo poruku o uspesnom brisanju kvara
            yield zgradeNavBar.kvarovi.click();
            yield kvaroviPage.brisi.get(0).click();
            expect(yield kvaroviPage.getAlertObavestenjaMsg()).toBe("Uspesno izbrisan kvar");
        }));
    });
    describe("Negativni testovi", () => {
        it('Dodavanje Kvara Negativan 1', () => __awaiter(this, void 0, void 0, function* () {
            //podatke za kreiranje kvara ostavljamo praznim
            //ocekujemo poruku greske za unos kao i da je dugme za potvrdu kreiranja kvara onemoguceno
            yield zgradeNavBar.kvarovi.click();
            yield kvaroviPage.DodajKvar("", "", 0);
            expect(yield kvaroviPage.getMestoErrMsg()).toBe("Ovo polje ne sme biti prazno!");
            expect(yield kvaroviPage.getOpisErrMsg()).toBe("Ovo polje ne sme biti prazno!");
            expect(yield kvaroviPage.submit.isEnabled()).toBeFalsy;
        }));
        it('Dodavanje Kvara Negativan 2', () => __awaiter(this, void 0, void 0, function* () {
            //unosimo podatke za kreiranje kvara gde opis kvara otavljamo prazan
            //ocekujemo poruku greske za unos kao i da je dugme za potvrdu kreiranja kvara onemoguceno
            yield zgradeNavBar.kvarovi.click();
            yield kvaroviPage.DodajKvar("a", "", 0);
            expect(yield kvaroviPage.getOpisErrMsg()).toBe("Ovo polje ne sme biti prazno!");
            expect(yield kvaroviPage.submit.isEnabled()).toBeFalsy;
        }));
        it('Dodavanje Kvara Negativan 3', () => __awaiter(this, void 0, void 0, function* () {
            //unosimo podatke za kreiranje kvara gde mesto kvara otavljamo prazan
            //ocekujemo poruku greske za unos kao i da je dugme za potvrdu kreiranja kvara onemoguceno
            yield zgradeNavBar.kvarovi.click();
            yield kvaroviPage.DodajKvar("", "a", 0);
            expect(yield kvaroviPage.getMestoErrMsg()).toBe("Ovo polje ne sme biti prazno!");
            expect(yield kvaroviPage.submit.isEnabled()).toBeFalsy;
        }));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS3Zhcm92aS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3BlY3MvS3Zhcm92aS5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBbUQ7QUFDbkQsc0RBQThDO0FBQzlDLHFGQUE2RTtBQUM3RSwyRUFBdUU7QUFFdkUsUUFBUSxDQUFDLDRCQUE0QixFQUFDLEdBQUUsRUFBRTtJQUN4QyxJQUFJLFNBQW1CLENBQUM7SUFDeEIsSUFBSSxXQUF1QixDQUFDO0lBQzVCLElBQUksWUFBeUIsQ0FBQztJQUM5QixTQUFTLENBQUMsR0FBTyxFQUFFO1FBQ2pCLHdCQUF3QjtRQUN4QixTQUFTLEdBQUMsSUFBSSxzQkFBUyxFQUFFLENBQUM7UUFDMUIsV0FBVyxHQUFHLElBQUksMEJBQVcsRUFBRSxDQUFDO1FBQ2hDLFlBQVksR0FBRyxJQUFJLGdDQUFZLEVBQUUsQ0FBQztRQUNsQyxtQ0FBbUM7UUFDbkMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1FBQ3JELHNDQUFzQztRQUN0QyxNQUFNLFNBQVMsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDekQsZ0NBQWdDO1FBQ2hDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsd0NBQXdDLENBQUMsQ0FBQztJQUM5RCxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsUUFBUSxDQUFDLG1CQUFtQixFQUFDLEdBQUUsRUFBRTtRQUVqQyxFQUFFLENBQUMsMkJBQTJCLEVBQUMsR0FBTyxFQUFFO1lBRXRDLDhEQUE4RDtZQUM5RCx1Q0FBdUM7WUFFdkMsTUFBTSxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsTUFBTSxDQUFDLE1BQU0sV0FBVyxDQUFDLHNCQUFzQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FB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
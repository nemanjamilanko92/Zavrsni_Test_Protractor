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
describe('testiranje Dodavanja Stanara', () => {
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
        //navigujemo na stranicu stanari
        yield adminNavBarPage.stanariNav.click();
    }));
    describe("Pozitivni testovi", () => {
        it('Pozitivni Test Dodavanja Stanara', () => __awaiter(this, void 0, void 0, function* () {
            //unosimo stanara sa ocekivanim kredencijalima
            //ocekujemo poruku o uspesnom dodavanju
            //zatim proveravamo da li je stanar stvarno unesen u listu stanara
            yield stanariDodavanjePage.registracijaStanara("nesto12@nesto.com", "Nesto5", "Slavisa1", "slavkovic");
            expect(yield stanariDodavanjePage.getUspesnoRegStanarMsg()).toBe("Uspesno ste registrovali stanara!");
            yield stanariDodavanjePage.pregled.click();
            yield Select_1.Select.selectByIndex(3, stanariPregledPage.prikazi);
            expect(yield stanariPregledPage.getImeIPrezimeStanar()).toBe("Slavisa1 slavkovic");
            yield stanariDodavanjePage.registracija.click();
        }));
        it('Pozitivni Test Reset Dugme', () => __awaiter(this, void 0, void 0, function* () {
            //unosimo podatke za kreiranje stanara i zatim klikcemo na reset dugme
            //ocekujemo da su sve forme za unos prazne
            yield stanariDodavanjePage.unosenjeVrednostiStanara("nesto12@nesto.com", "Nesto5", "Slavisa1", "slavkovic");
            expect(yield stanariDodavanjePage.getEmailInputValue()).toBe("");
            expect(yield stanariDodavanjePage.getLozinkaInputValue()).toBe("");
            expect(yield stanariDodavanjePage.getImeInputValue()).toBe("");
            expect(yield stanariDodavanjePage.getPrezimeInputValue()).toBe("");
        }));
    });
    describe("Negativni testovi", () => {
        it('Negativan Test Dodavanja Istog Stanara', () => __awaiter(this, void 0, void 0, function* () {
            //unosimo vec postojeceg stanara u listu
            //ocekujemo poruku da je mail adresa stanara vec zauzeta
            yield stanariDodavanjePage.registracija.click();
            yield stanariDodavanjePage.registracijaStanara("nesto12@nesto.com", "Nesto5", "Slavisa1", "slavkovic");
            expect(yield stanariDodavanjePage.getUspesnoRegStanarMsg()).toBe("E-mail adresa: nesto12@nesto.com je zauzeta!");
        }));
        it('Negativni Test Dodavanja Stanara 1', () => __awaiter(this, void 0, void 0, function* () {
            //unosimo podatke za kreiranje stanara sa losom formom za email
            //ocekujemo poruku greske za unos email-a
            yield stanariDodavanjePage.registracijaStanara("nesto12", "Nesto5", "Slavisa1", "slavkovic");
            expect(yield stanariDodavanjePage.getEmailErrorMsg()).toBe("Neispravna email adresa!");
        }));
        it('Negativni Test Dodavanja Stanara 2', () => __awaiter(this, void 0, void 0, function* () {
            //unosimo podatke za kreiranje stanara sa losom formom za lozinku
            //ocekujemo poruku greske za unos lozinke
            yield stanariDodavanjePage.registracijaStanara("nesto12@nesto.com", "a", "Slavisa1", "slavkovic");
            expect(yield stanariDodavanjePage.getLozinkaErrorMsg()).toBe("Neispravna lozinka!");
        }));
        it('Negativni Test Dodavanja Stanara 3', () => __awaiter(this, void 0, void 0, function* () {
            //podatke za kreiranje stanara ostavljamo praznim
            //ocekujemo da je dugme za potvrdu kreiranja stanara onemoguceno
            yield stanariDodavanjePage.registracijaStanara("", "", "", "");
            expect(yield stanariDodavanjePage.registrujteBtn.isEnabled()).toBeFalsy();
        }));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9kYXZhbmplU3RhbmFyYS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3BlY3MvRG9kYXZhbmplU3RhbmFyYS5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBbUQ7QUFDbkQsc0RBQStDO0FBQy9DLGtFQUE4RDtBQUM5RCw0RUFBd0U7QUFDeEUsd0VBQW9FO0FBQ3BFLGtEQUErQztBQUMvQyxRQUFRLENBQUMsOEJBQThCLEVBQUMsR0FBRSxFQUFFO0lBQzFDLElBQUksTUFBYSxDQUFDO0lBQ2xCLElBQUksU0FBbUIsQ0FBQztJQUN4QixJQUFJLGVBQStCLENBQUM7SUFDcEMsSUFBSSxvQkFBeUMsQ0FBQztJQUM5QyxJQUFJLGtCQUFxQyxDQUFDO0lBQzFDLFNBQVMsQ0FBQyxHQUFPLEVBQUU7UUFDakIsd0JBQXdCO1FBQ3hCLE1BQU0sR0FBQyxJQUFJLGVBQU0sRUFBRSxDQUFDO1FBQ3BCLGVBQWUsR0FBQyxJQUFJLGtDQUFlLEVBQUUsQ0FBQztRQUN0QyxTQUFTLEdBQUMsSUFBSSxzQkFBUyxFQUFFLENBQUM7UUFDMUIsb0JBQW9CLEdBQUMsSUFBSSw0Q0FBb0IsRUFBRSxDQUFDO1FBQ2hELGtCQUFrQixHQUFDLElBQUksd0NBQWtCLEVBQUUsQ0FBQztRQUM1QyxtQ0FBbUM7UUFDbkMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1FBQ3JELHVCQUF1QjtRQUN2QixNQUFNLFNBQVMsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDdEQsZ0NBQWdDO1FBQ2hDLE1BQU0sZUFBZSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQyxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBQ0YsUUFBUSxDQUFDLG1CQUFtQixFQUFDLEdBQUUsRUFBRTtRQUVqQyxFQUFFLENBQUMsa0NBQWtDLEVBQUMsR0FBTyxFQUFFO1lBRTdD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
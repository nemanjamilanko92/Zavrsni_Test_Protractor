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
        //navigujemo na stranicu zgrade
        yield adminNavBarPage.zgradeNav.click();
    }));
    describe("Pozitivni testovi", () => {
        it('Pozitivni Test Dodavanja Zgrade', () => __awaiter(this, void 0, void 0, function* () {
            //unosimo zgradu sa ocekivanim podacima
            //ocekujemo poruku o uspesnom dodavanju
            //zatim proveravamo da li je zgrada stvarno unesena u listu zgrada
            yield zgradeDodavanjePage.dodavanjeZgrade("Vrbas", "Marsala Tita", "21", "1");
            expect(yield zgradeDodavanjePage.getAlertMsg()).toBe("Uspesno ste dodali zgradu!");
            yield zgradeDodavanjePage.pregled.click();
            expect(yield zgradePregledPage.proveraZgrade("Marsala Tita", "21", "Vrbas")).toBeTruthy();
        }));
        it('Pozitivni Test Reset Dugme', () => __awaiter(this, void 0, void 0, function* () {
            //unosimo podatke za kreiranje zgrade i zatim klikcemo na reset dugme
            //ocekujemo da su sve forme za unos prazne
            yield adminNavBarPage.zgradeNav.click();
            yield zgradeDodavanjePage.unosenjeVrednostiZgrade("Vrbas", "Marsala Tita", "21", "1");
            expect(yield zgradeDodavanjePage.getBrojInputValue()).toBe("");
            expect(yield zgradeDodavanjePage.getMestoInputValue()).toBe("");
            expect(yield zgradeDodavanjePage.getBrojStanovaInputValue()).toBe("");
            expect(yield zgradeDodavanjePage.getUlicaInputValue()).toBe("");
        }));
    });
    describe("Negativni testovi", () => {
        it('Negativni Test Ista Adresa Zgrade', () => __awaiter(this, void 0, void 0, function* () {
            //unosimo vec postojecu zgradu u listu
            //ocekujemo poruku Vec postoji zgrada na toj adresi!
            yield zgradeDodavanjePage.dodavanjeZgrade("Vrbas", "Marsala Tita", "21", "1");
            expect(yield zgradeDodavanjePage.getAlertMsg()).toBe("Vec postoji zgrada na toj adresi!");
        }));
        it('Negativan Test Dodavanja Zgrade 1', () => __awaiter(this, void 0, void 0, function* () {
            //unosimo podatke za kreiranje zgrade sa nulom za broj zgrade i stanova
            //ocekujemo poruku greske za unos
            yield zgradeDodavanjePage.dodavanjeZgrade("a", "a", "0", "0");
            expect(yield zgradeDodavanjePage.getErrMessBrojNula()).toBe("Broj mora biti pozitivan!");
            expect(yield zgradeDodavanjePage.getErrMessBrojStanova()).toBe("Broj mora biti pozitivan!");
        }));
        it('Negativan Test Dodavanja Zgrade 2', () => __awaiter(this, void 0, void 0, function* () {
            //podatke za kreiranje zgrade ostavljamo praznim
            //ocekujemo da je dugme za potvrdu kreiranja zgrade onemoguceno
            yield zgradeDodavanjePage.dodavanjeZgrade("", "", "", "");
            expect(yield zgradeDodavanjePage.dodajte.isEnabled()).toBeFalsy();
        }));
        it('Negativan Test Dodavanja Zgrade 3', () => __awaiter(this, void 0, void 0, function* () {
            //unosimo podatke za kreiranje stanara sa stringom umesto intidzera za broj zgrade i stanova
            //ocekujemo poruku greske za unos
            yield protractor_1.browser.refresh();
            yield zgradeDodavanjePage.dodavanjeZgrade("a", "a", "a", "a");
            expect(yield zgradeDodavanjePage.getErrMessBroj()).toBe("Ovo polje ne sme biti prazno!");
            expect(yield zgradeDodavanjePage.getErrMessBrojStanova()).toBe("Ovo polje ne sme biti prazno!");
        }));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9kYXZhbmplWmdyYWRhLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9Eb2RhdmFuamVaZ3JhZGEuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQW1EO0FBQ25ELHNEQUE4QztBQUM5QyxrRUFBOEQ7QUFDOUQsMEVBQXNFO0FBQ3RFLHNFQUFrRTtBQUNsRSxRQUFRLENBQUMsNkJBQTZCLEVBQUMsR0FBRSxFQUFFO0lBQ3pDLElBQUksU0FBbUIsQ0FBQztJQUN4QixJQUFJLGVBQStCLENBQUM7SUFDcEMsSUFBSSxtQkFBdUMsQ0FBQztJQUM1QyxJQUFJLGlCQUFtQyxDQUFDO0lBQ3hDLFNBQVMsQ0FBQyxHQUFPLEVBQUU7UUFDakIsd0JBQXdCO1FBQ3hCLGVBQWUsR0FBQyxJQUFJLGtDQUFlLEVBQUUsQ0FBQztRQUN0QyxTQUFTLEdBQUMsSUFBSSxzQkFBUyxFQUFFLENBQUM7UUFDMUIsbUJBQW1CLEdBQUMsSUFBSSwwQ0FBbUIsRUFBRSxDQUFDO1FBQzlDLGlCQUFpQixHQUFDLElBQUksc0NBQWlCLEVBQUUsQ0FBQztRQUMxQyxtQ0FBbUM7UUFDbkMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1FBQ3JELHVCQUF1QjtRQUN2QixNQUFNLFNBQVMsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDdEQsK0JBQStCO1FBQy9CLE1BQU0sZUFBZSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMxQyxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsUUFBUSxDQUFDLG1CQUFtQixFQUFDLEdBQUUsRUFBRTtRQUVqQyxFQUFFLENBQUMsaUNBQWlDLEVBQUMsR0FBTyxFQUFFO1lBRTVDLHVDQUF1QztZQUN2Qyx1Q0FBdUM7WUFDdkMsa0VBQWtFO1lBRWxFLE1BQU0sbUJBQW1CLENBQUMsZUFBZSxDQUFDLE9BQU8s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
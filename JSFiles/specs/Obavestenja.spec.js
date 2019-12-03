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
const Obavestenja_page_1 = require("../pageObj/ZgradaKucniSavet/Obavestenja.page");
const ZgradeNavBar_page_1 = require("../pageObj/ZgradaKucniSavet/ZgradeNavBar.page");
describe('testiranje Dodavanja Obavestenja', () => {
    let loginPage;
    let obavestenjaPage;
    let zgradeNavBar;
    beforeAll(() => __awaiter(this, void 0, void 0, function* () {
        //instanciranje objekata
        loginPage = new login_page_1.LoginPage();
        obavestenjaPage = new Obavestenja_page_1.ObavestenjaPage();
        zgradeNavBar = new ZgradeNavBar_page_1.ZgradeNavBar();
        //odlazimo na stranicu za logovanje
        yield protractor_1.browser.get("http://localhost:8080/logovanje");
        //logujemo se kao predsednik skupstine
        yield loginPage.logIn("predSkup@gmail.com", "Bar5slova");
        //navigujemo na stranicu obavestenja
        yield protractor_1.browser.get("http://localhost:8080/zgrada/1/obavestenja");
    }));
    describe("Pozitivni testovi", () => {
        it('Dodavanje Obavestenja Pozitivan', () => __awaiter(this, void 0, void 0, function* () {
            //unosimo obavestenje sa ocekivanim podacima
            //ocekujemo poruku o uspesnom dodavanju
            //zatim proveravamo da li je obavestenje stvarno uneseno u listu obavestenja
            yield obavestenjaPage.DodajObavestenje("aaaaaaaaaaaaaa");
            expect(yield obavestenjaPage.getAlertObavestenjaMsg()).toBe("Obavestenje uspesno dodato!");
            yield zgradeNavBar.obavestenja.click();
            expect(yield obavestenjaPage.getnovoDodatoObavestenje()).toBe("aaaaaaaaaaaaaa");
        }));
        it('Izmeni Obavestenje Pozitivan', () => __awaiter(this, void 0, void 0, function* () {
            //klikcemo na dugme za izmenu obavestenja
            //dodajemo izmenu u obavestenje
            //ocekujemo poruku o uspesnoj promeni obavestenja i proveravamo da je text stvarno izmenjen
            yield zgradeNavBar.obavestenja.click();
            yield obavestenjaPage.IzmeniObavestenje("krrrv");
            expect(yield obavestenjaPage.getAlertObavestenjaMsg()).toBe("Uspesno izmenjeno obavestenje");
            expect(yield obavestenjaPage.getnovoDodatoObavestenje()).toBe("aaaaaaaaaaaaaakrrrv");
        }));
        it('Obrisi Obavestenje Pozitivan', () => __awaiter(this, void 0, void 0, function* () {
            //klikcemo na dugme za brisanje obavestenja
            //ocekujemo poruku o uspesnom brisanju obavestenja
            yield obavestenjaPage.obrisiObavestenje();
            expect(yield obavestenjaPage.getAlertObavestenjaMsg()).toBe("Uspesno izbrisano obavestenje");
        }));
    });
    describe("Negativni testovi", () => {
        it('Dodavanje Obavestenja Negativan', () => __awaiter(this, void 0, void 0, function* () {
            //formu za unos novog obavestenja ostavljamo praznim
            //ocekujemo da je dugme za potvrdu pravljenja obavestenja onemoguceno
            yield obavestenjaPage.DodajObavestenje("");
            expect(yield obavestenjaPage.potvrdiBtn.isEnabled()).toBeFalsy;
        }));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JhdmVzdGVuamEuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NwZWNzL09iYXZlc3RlbmphLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFtRDtBQUNuRCxzREFBOEM7QUFDOUMsbUZBQStFO0FBRS9FLHFGQUE2RTtBQUM3RSxRQUFRLENBQUMsa0NBQWtDLEVBQUMsR0FBRSxFQUFFO0lBQzlDLElBQUksU0FBbUIsQ0FBQztJQUN4QixJQUFJLGVBQStCLENBQUM7SUFDcEMsSUFBSSxZQUF5QixDQUFDO0lBQzlCLFNBQVMsQ0FBQyxHQUFPLEVBQUU7UUFDakIsd0JBQXdCO1FBQ3hCLFNBQVMsR0FBQyxJQUFJLHNCQUFTLEVBQUUsQ0FBQztRQUMxQixlQUFlLEdBQUcsSUFBSSxrQ0FBZSxFQUFFLENBQUM7UUFDeEMsWUFBWSxHQUFHLElBQUksZ0NBQVksRUFBRSxDQUFDO1FBQ2xDLG1DQUFtQztRQUNuQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7UUFDckQsc0NBQXNDO1FBQ3RDLE1BQU0sU0FBUyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUN6RCxvQ0FBb0M7UUFDcEMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO0lBQ2xFLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixRQUFRLENBQUMsbUJBQW1CLEVBQUMsR0FBRSxFQUFFO1FBRWpDLEVBQUUsQ0FBQyxpQ0FBaUMsRUFBQyxHQUFPLEVBQUU7WUFFNUMsNENBQTRDO1lBQzVDLHVDQUF1QztZQUN2Qyw0RUFBNEU7WUFFNUUsTUFBTSxlQUFlLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUN6RCxNQUFNLENBQUMsTUFBTSxlQUFlLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1lBQzNGLE1BQU0sWUFBWSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN2QyxNQUFNLENBQUMsTUFBTSxlQUFlLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2xGLENBQUMsQ0FBQSxDQUFDLENBQUE7UUFFRixFQUFFLENBQUMsOEJBQThCLEVBQUMsR0FBTyxFQUFFO1lBRXpDLHlDQUF5QztZQUN6QywrQkFBK0I7WUFDL0IsMkZBQTJGO1lBRTNGLE1BQU0sWUFBWSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN2QyxNQUFNLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNqRCxNQUFNLENBQUMsTUFBTSxlQUFlLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1lBQzdGLE1BQU0sQ0FBQyxNQUFNLGVBQWUsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDdkYsQ0FBQyxDQUFBLENBQUMsQ0FBQTtRQUVGLEVBQUUsQ0FBQyw4QkFBOEIsRUFBQyxHQUFPLEVBQUU7WUFFekMsMkNBQTJDO1lBQzNDLGtEQUFrRDtZQUVsRCxNQUFNLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQzFDLE1BQU0sQ0FBQyxNQUFNLGVBQWUsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUM7UUFDL0YsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUNKLENBQUMsQ0FBQyxDQUFBO0lBRUEsUUFBUSxDQUFDLG1CQUFtQixFQUFDLEdBQUUsRUFBRTtRQUVqQyxFQUFFLENBQUMsaUNBQWlDLEVBQUMsR0FBTyxFQUFFO1lBRTVDLG9EQUFvRDtZQUNwRCxxRUFBcUU7WUFFckUsTUFBTSxlQUFlLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDM0MsTUFBTSxDQUFDLE1BQU0sZUFBZSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNqRSxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7QUFDRixDQUFDLENBQUMsQ0FBQSJ9
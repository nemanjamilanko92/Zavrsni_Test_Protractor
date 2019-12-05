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
const PredloziTackeDnevnogReda_page_1 = require("../pageObj/ZgradaKucniSavet/PredloziTackeDnevnogReda.page");
describe('testiranje Dodavanja Tacke Dnevnog Reda', () => {
    let loginPage;
    let zgradeNavBar;
    let predloziTackeDnevnogReda;
    beforeAll(() => __awaiter(this, void 0, void 0, function* () {
        //instanciranje objekata
        predloziTackeDnevnogReda = new PredloziTackeDnevnogReda_page_1.PredloziTackeDnevnogReda();
        zgradeNavBar = new ZgradeNavBar_page_1.ZgradeNavBar();
        loginPage = new login_page_1.LoginPage();
        //odlazimo na stranicu za logovanje
        yield protractor_1.browser.get("http://localhost:8080/logovanje");
        //logujemo se kao predsednik skupstine
        yield loginPage.logIn("predSkup@gmail.com", "Bar5slova");
        //navigujemo na stranicu tacaka dnevnog reda
        yield protractor_1.browser.get("http://localhost:8080/zgrada/1/tacke");
    }));
    describe("Pozitivni testovi", () => {
        it('Dodavanje Tacke Dnevnog Reda Pozitivan', () => __awaiter(this, void 0, void 0, function* () {
            //unosimo tacku dnevog reda sa ocekivanim podacima
            //ocekujemo poruku o uspesnom dodavanju
            //zatim proveravamo da li je tacka dnevog reda stvarno unesena u listu
            yield predloziTackeDnevnogReda.dodajTackuDnevnogReda("aaaaaa");
            expect(yield predloziTackeDnevnogReda.getAlertMsgText()).toBe("Predlog tacke dnevnog reda uspesno dodat");
            yield zgradeNavBar.predoloziTackeDnevnogReda.click();
            expect(yield predloziTackeDnevnogReda.getNovoDodatoOvacestenje()).toBe("aaaaaa");
        }));
        it('Imena Tacke Dnevnog Reda Pozitivan', () => __awaiter(this, void 0, void 0, function* () {
            // klikcemo na dugme za izmenu tacke dnevnog reda
            //dodajemo izmenu u tacku dnevnog reda
            //ocekujemo poruku o uspesnoj promeni tacke dnevnog reda i proveravamo da je text stvarno izmenjen
            yield zgradeNavBar.predoloziTackeDnevnogReda.click();
            yield predloziTackeDnevnogReda.IzmeniTackeDnevnogReda("haha");
            expect(yield predloziTackeDnevnogReda.getAlertMsgText()).toBe("Tacka uspesno izmenjena");
            expect(yield predloziTackeDnevnogReda.getNovoDodatoOvacestenje()).toBe("aaaaaahaha");
        }));
        it('Brisanje Tacke Dnevnog Reda Pozitivan', () => __awaiter(this, void 0, void 0, function* () {
            //klickemo na dugme za brisanje kvara
            //ocekujemo poruku o uspesnom brisanju kvara
            yield predloziTackeDnevnogReda.brisi.get(0).click();
            expect(yield predloziTackeDnevnogReda.getAlertMsgText()).toBe("Tacka uspesno izbrisana");
        }));
        it('Dodavanje Predloga Tacke U Skupstinu Pozitivan', () => __awaiter(this, void 0, void 0, function* () {
            //na dropdown listi biramo skupstinu u koju zelimo da prosledimo tacku
            //klikcemo na dugme za dodavanje tacke u skupstinu
            yield protractor_1.browser.refresh();
            yield predloziTackeDnevnogReda.dodavanjePredlogaTackeUSkupstinu(1, 0);
            expect(yield predloziTackeDnevnogReda.getAlertMsgText()).toBe("Tacka uspesno dodata u skupstinu");
        }));
    });
    describe("Negativni testovi", () => {
        it('Dodavanje Tacke Dnevnog Reda Negativan', () => __awaiter(this, void 0, void 0, function* () {
            //pri kreiranju nove tacke dnevnog reda formu za unos ostavljamo prazno
            //ocekujemo da je dugme za kreiranje tacke neaktivno
            yield predloziTackeDnevnogReda.dodajTackuDnevnogReda("");
            expect(predloziTackeDnevnogReda.potvrdiBtn.isEnabled()).toBeTruthy();
        }));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJlZGxvemlUYWNrZURuZXZub2dSZWRhLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9QcmVkbG96aVRhY2tlRG5ldm5vZ1JlZGEuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQXFEO0FBQ3JELHNEQUFpRDtBQUNqRCxxRkFBNEU7QUFDNUUsNkdBQW9HO0FBR3BHLFFBQVEsQ0FBQyx5Q0FBeUMsRUFBRSxHQUFHLEVBQUU7SUFDdkQsSUFBSSxTQUFvQixDQUFDO0lBQ3pCLElBQUksWUFBMEIsQ0FBQTtJQUM5QixJQUFJLHdCQUFrRCxDQUFBO0lBQ3RELFNBQVMsQ0FBQyxHQUFTLEVBQUU7UUFDbkIsd0JBQXdCO1FBQ3hCLHdCQUF3QixHQUFHLElBQUksd0RBQXdCLEVBQUUsQ0FBQztRQUMxRCxZQUFZLEdBQUcsSUFBSSxnQ0FBWSxFQUFFLENBQUM7UUFDbEMsU0FBUyxHQUFHLElBQUksc0JBQVMsRUFBRSxDQUFDO1FBQzVCLG1DQUFtQztRQUNuQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7UUFDckQsc0NBQXNDO1FBQ3RDLE1BQU0sU0FBUyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUN6RCw0Q0FBNEM7UUFDNUMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0lBQzVELENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixRQUFRLENBQUMsbUJBQW1CLEVBQUMsR0FBRSxFQUFFO1FBRWpDLEVBQUUsQ0FBQyx3Q0FBd0MsRUFBRSxHQUFTLEVBQUU7WUFFdEQsa0RBQWtEO1lBQ2xELHVDQUF1QztZQUN2QyxzRUFBc0U7WUFFdEUsTUFBTSx3QkFBd0IsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvRCxNQUFNLENBQUMsTUFBTSx3QkFBd0IsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQywwQ0FBMEMsQ0FBQyxDQUFBO1lBQ3pHLE1BQU0sWUFBWSxDQUFDLHlCQUF5QixDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ3BELE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixDQUFDLHdCQUF3QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDbEYsQ0FBQyxDQUFBLENBQUMsQ0FBQTtRQUVGLEVBQUUsQ0FBQyxvQ0FBb0MsRUFBRSxHQUFTLEVBQUU7WUFFbEQsaURBQWlEO1lBQ2pELHNDQUFzQztZQUN0QyxrR0FBa0c7WUFFbEcsTUFBTSxZQUFZLENBQUMseUJBQXlCLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDckQsTUFBTSx3QkFBd0IsQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5RCxNQUFNLENBQUMsTUFBTSx3QkFBd0IsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQ3pGLE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixDQUFDLHdCQUF3QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDdEYsQ0FBQyxDQUFBLENBQUMsQ0FBQTtRQUVGLEVBQUUsQ0FBQyx1Q0FBdUMsRUFBRSxHQUFTLEVBQUU7WUFFckQscUNBQXFDO1lBQ3JDLDRDQUE0QztZQUU1QyxNQUFNLHdCQUF3QixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDbkQsTUFBTSxDQUFDLE1BQU0sd0JBQXdCLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUMzRixDQUFDLENBQUEsQ0FBQyxDQUFBO1FBRUYsRUFBRSxDQUFDLGdEQUFnRCxFQUFFLEdBQVMsRUFBRTtZQUU5RCxzRUFBc0U7WUFDdEUsa0RBQWtEO1lBRWxELE1BQU0sb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN4QixNQUFNLHdCQUF3QixDQUFDLGdDQUFnQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTtZQUNwRSxNQUFNLENBQUMsTUFBTSx3QkFBd0IsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1FBQ3BHLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtJQUNBLFFBQVEsQ0FBQyxtQkFBbUIsRUFBQyxHQUFFLEVBQUU7UUFFakMsRUFBRSxDQUFDLHdDQUF3QyxFQUFFLEdBQVMsRUFBRTtZQUV0RCx1RUFBdUU7WUFDdkUsb0RBQW9EO1lBRXBELE1BQU0sd0JBQXdCLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDekQsTUFBTSxDQUFDLHdCQUF3QixDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3ZFLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtBQUNGLENBQUMsQ0FBQyxDQUFBIn0=
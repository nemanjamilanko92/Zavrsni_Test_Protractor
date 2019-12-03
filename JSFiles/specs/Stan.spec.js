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
const Stan_page_1 = require("../pageObj/Stan.page");
describe('testiranje Funkcionalnosti Stana', () => {
    let loginPage;
    let stan;
    beforeAll(() => __awaiter(this, void 0, void 0, function* () {
        //instanciranje objekata
        loginPage = new login_page_1.LoginPage();
        stan = new Stan_page_1.Stan();
        //odlazimo na stranicu za logovanje
        yield protractor_1.browser.get("http://localhost:8080/logovanje");
        //logujemo se kao admin
        yield loginPage.logIn("admin@gmail.com", "Bar5slova");
        //navigujemo na stranicu stana
        yield protractor_1.browser.get("http://localhost:8080/stan/1");
    }));
    //DA BI OVAJ TEST FUNKCIONISAO POTREBNO JE DA SU SVI VLASNICI I STANRI UKLONJENI IZ LISTE STANARA I VLASNIKA
    describe("Pozitivni testovi", () => {
        it("Postavljanje Vlasnika Pozitivan", () => __awaiter(this, void 0, void 0, function* () {
            //klikcemo na dugme za postavljanje vlasnika stana
            //ocekujemo poruku o uspesnom dodavanju vlasnika
            yield stan.postaviZaVlasnikaDugme.get(0).click();
            expect(yield stan.getAlertMsg()).toBe("Uspesno ste postavili vlasnika!");
        }));
        it("Uklanjanje Vlasnika Pozitivan", () => __awaiter(this, void 0, void 0, function* () {
            //klikcemo na dugme za brisanje vlasnika stana
            //ocekujemo poruku o uspesnom brisanju vlasnika
            yield stan.ukloniDugme.get(0).click();
            expect(yield stan.getAlertMsg()).toBe("Uspesno ste uklonili vlasnika!");
        }));
        it("Dodavanje Stanara Pozitivan", () => __awaiter(this, void 0, void 0, function* () {
            //klikcemo na dugme za dodavanje stanara
            //ocekujemo poruku o uspesnom dodavanja stanara
            yield stan.dodajUStanareDugme.get(0).click();
            expect(yield stan.getAlertMsg()).toBe("Uspesno ste dodali stanara!");
        }));
        it("Postavi Za Predsednika Pozitivan", () => __awaiter(this, void 0, void 0, function* () {
            //klikcemo na dugme za dodavanje predsednika zgrade
            //ocekujemo poruku o uspesnom dodavanja predsednika
            yield stan.postaviZaPredsednikaDugme.get(0).click();
            expect(yield stan.getAlertMsg()).toBe("Uspesno ste postavili predsednika zgrade!");
        }));
        it("Uklanjanje Stanara Pozitivan", () => __awaiter(this, void 0, void 0, function* () {
            //klikcemo na dugme za uklanjanje stanara
            //ocekujemo poruku o uspesnom uklanjanju stanara
            yield stan.ukloniDugme.get(0).click();
            expect(yield stan.getAlertMsg()).toBe("Uspesno ste uklonili stanara!");
        }));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3Rhbi5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3BlY3MvU3Rhbi5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBa0Y7QUFDbEYsc0RBQThDO0FBQzlDLG9EQUE0QztBQUU1QyxRQUFRLENBQUMsa0NBQWtDLEVBQUMsR0FBRSxFQUFFO0lBQzlDLElBQUksU0FBbUIsQ0FBQztJQUN4QixJQUFJLElBQVMsQ0FBQTtJQUNiLFNBQVMsQ0FBQyxHQUFPLEVBQUU7UUFDakIsd0JBQXdCO1FBQ3hCLFNBQVMsR0FBQyxJQUFJLHNCQUFTLEVBQUUsQ0FBQztRQUMxQixJQUFJLEdBQUcsSUFBSSxnQkFBSSxFQUFFLENBQUM7UUFDbEIsbUNBQW1DO1FBQ25DLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztRQUNyRCx1QkFBdUI7UUFDdkIsTUFBTSxTQUFTLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3RELDhCQUE4QjtRQUM5QixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7SUFDcEQsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUNGLDRHQUE0RztJQUM1RyxRQUFRLENBQUMsbUJBQW1CLEVBQUMsR0FBRSxFQUFFO1FBRWpDLEVBQUUsQ0FBQyxpQ0FBaUMsRUFBQyxHQUFPLEVBQUU7WUFFNUMsa0RBQWtEO1lBQ2xELGdEQUFnRDtZQUVoRCxNQUFNLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDakQsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUE7UUFDMUUsQ0FBQyxDQUFBLENBQUMsQ0FBQTtRQUVGLEVBQUUsQ0FBQywrQkFBK0IsRUFBQyxHQUFPLEVBQUU7WUFFMUMsOENBQThDO1lBQzlDLCtDQUErQztZQUUvQyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3RDLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFBO1FBQ3pFLENBQUMsQ0FBQSxDQUFDLENBQUE7UUFFRixFQUFFLENBQUMsNkJBQTZCLEVBQUMsR0FBTyxFQUFFO1lBRXhDLHdDQUF3QztZQUN4QywrQ0FBK0M7WUFFL0MsTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzdDLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFBO1FBQ3RFLENBQUMsQ0FBQSxDQUFDLENBQUE7UUFFRixFQUFFLENBQUMsa0NBQWtDLEVBQUMsR0FBTyxFQUFFO1lBRTdDLG1EQUFtRDtZQUNuRCxtREFBbUQ7WUFFbkQsTUFBTSxJQUFJLENBQUMseUJBQXlCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3BELE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQywyQ0FBMkMsQ0FBQyxDQUFBO1FBQ3BGLENBQUMsQ0FBQSxDQUFDLENBQUE7UUFFRixFQUFFLENBQUMsOEJBQThCLEVBQUMsR0FBTyxFQUFFO1lBRXpDLHlDQUF5QztZQUN6QyxnREFBZ0Q7WUFFaEQsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN0QyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQTtRQUN4RSxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7QUFDRixDQUFDLENBQUMsQ0FBQSJ9
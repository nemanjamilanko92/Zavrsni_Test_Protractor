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
class StanariDodavanjePage {
    constructor() {
        this.email = protractor_1.$("#email");
        this.ime = protractor_1.$("#ime");
        this.lozinka = protractor_1.$("#lozinka");
        this.pregled = protractor_1.element(protractor_1.by.css("button.btn.btn-outline-primary"));
        this.prezime = protractor_1.$("#prezime");
        this.resetujte = protractor_1.$("button.btn.btn-danger");
        this.registracija = protractor_1.element(protractor_1.by.xpath("//b[contains(text(),'Registracija')]"));
        this.registrujteBtn = protractor_1.element(protractor_1.by.xpath("//button[contains(text(),'Registrujte')]"));
        this.emailErrorMsg = protractor_1.element(protractor_1.by.xpath("//div[@class='row justify-content-md-center']//div[1]//div[1]//div[1]"));
        this.lozinkaErrorMsg = protractor_1.element(protractor_1.by.xpath("//div[contains(text(),'Neispravna lozinka!')]"));
        this.imeErrorMsg = protractor_1.element(protractor_1.by.xpath("//div[3]//div[1]//div[1]"));
        this.prezimeErrorMsg = protractor_1.element(protractor_1.by.xpath("//div[4]//div[1]//div[1]"));
        this.uspesnoRegStanar = protractor_1.element(protractor_1.by.xpath("//*[@id=\"toast-container\"]/div/div"));
    }
    registracijaStanara(email, lozinka, ime, prezime) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.email.clear();
            yield this.lozinka.clear();
            yield this.ime.clear();
            yield this.prezime.clear();
            yield this.email.sendKeys(email);
            yield this.lozinka.sendKeys(lozinka);
            yield this.ime.sendKeys(ime);
            yield this.prezime.sendKeys(prezime);
            yield this.prezime.sendKeys(protractor_1.protractor.Key.TAB); //ovaj korak je potreban kako bi se izazvala poruka na input polju broj stanova
            if ((yield this.registrujteBtn.isEnabled()) === true) {
                yield this.registrujteBtn.click();
            }
        });
    }
    unosenjeVrednostiStanara(email, lozinka, ime, prezime) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.email.clear();
            yield this.lozinka.clear();
            yield this.ime.clear();
            yield this.prezime.clear();
            yield this.email.sendKeys(email);
            yield this.lozinka.sendKeys(lozinka);
            yield this.ime.sendKeys(ime);
            yield this.prezime.sendKeys(prezime);
            yield this.resetujte.click();
        });
    }
    getUspesnoRegStanarMsg() {
        return __awaiter(this, void 0, void 0, function* () {
            let text = yield this.uspesnoRegStanar.getText();
            return text.trim();
        });
    }
    getEmailInputValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.email.getAttribute("value");
        });
    }
    getLozinkaInputValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.lozinka.getAttribute("value");
        });
    }
    getImeInputValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.ime.getAttribute("value");
        });
    }
    getPrezimeInputValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prezime.getAttribute("value");
        });
    }
    getEmailErrorMsg() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.emailErrorMsg.getText();
        });
    }
    getLozinkaErrorMsg() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.lozinkaErrorMsg.getText();
        });
    }
    getImeErrorMsg() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.imeErrorMsg.getText();
        });
    }
    getPrezimeErrorMsg() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prezimeErrorMsg.getText();
        });
    }
}
exports.StanariDodavanjePage = StanariDodavanjePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhbmFyaURvZGF2YW5qZS5wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iai9zdGFuYXJpRG9kYXZhbmplLnBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFnRjtBQUVoRixNQUFhLG9CQUFvQjtJQWMvQjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUMsY0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLEdBQUMsY0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUMsY0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsT0FBTyxHQUFDLGNBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFDLGNBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxZQUFZLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsY0FBYyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBRSwwQ0FBMEMsQ0FBQyxDQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLGFBQWEsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsdUVBQXVFLENBQUMsQ0FBQyxDQUFDO1FBQzlHLElBQUksQ0FBQyxlQUFlLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLCtDQUErQyxDQUFDLENBQUMsQ0FBQztRQUN4RixJQUFJLENBQUMsV0FBVyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywwQkFBMEIs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
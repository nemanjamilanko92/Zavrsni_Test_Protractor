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
class KvaroviPage {
    constructor() {
        this.kvarovi = protractor_1.element(protractor_1.by.xpath("//a[@class='nav-link active']"));
        this.dodaj = protractor_1.element(protractor_1.by.xpath("//button[@class='btn']"));
        this.prikaziZavrseneKvarove = protractor_1.$("input[class*='ng']");
        this.mesto = protractor_1.$("#mesto");
        this.mestoErrMsg = protractor_1.element(protractor_1.by.xpath("/html/body/app-root/app-zgrada/div/div[2]/app-dodaj-kvar/div/form/fieldset/div[1]/div/div"));
        this.opis = protractor_1.$("#opis");
        this.opisErrMsg = protractor_1.element(protractor_1.by.xpath("/html/body/app-root/app-zgrada/div/div[2]/app-dodaj-kvar/div/form/fieldset/div[2]/div/div"));
        this.izaberiBtn = protractor_1.$("#odgovorno_lice");
        this.pretraga = protractor_1.element(protractor_1.by.xpath("//input[@placeholder='Pretraga']"));
        this.prihvatiBtn = protractor_1.element.all(protractor_1.by.xpath("//table//button"));
        this.odustani = protractor_1.element(protractor_1.by.xpath("//button[@class='btn btn-danger']"));
        this.izabraniStanar = protractor_1.$("span[class*='low']");
        this.submit = protractor_1.$("#submit");
        this.alertObavestenja = protractor_1.element(protractor_1.by.xpath("//div[@class='toast-message ng-star-inserted']"));
        this.brisi = protractor_1.element.all(protractor_1.by.xpath("//span[contains(text(),'brisi')]"));
    }
    getOpisErrMsg() {
        return __awaiter(this, void 0, void 0, function* () {
            let text = yield this.opisErrMsg.getText();
            return text.trim();
        });
    }
    getMestoErrMsg() {
        return __awaiter(this, void 0, void 0, function* () {
            let text = yield this.mestoErrMsg.getText();
            return text.trim();
        });
    }
    getIzabraniStanarImePrezime() {
        return __awaiter(this, void 0, void 0, function* () {
            let text = yield this.izabraniStanar.getText();
            return text.trim();
        });
    }
    getAlertObavestenjaMsg() {
        return __awaiter(this, void 0, void 0, function* () {
            let text = yield this.alertObavestenja.getText();
            return text.trim();
        });
    }
    DodajKvar(mesto, opis, index) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.dodaj.click();
            yield this.mesto.clear();
            yield this.opis.clear();
            yield this.mesto.sendKeys(mesto);
            yield this.opis.sendKeys(opis);
            yield this.opis.sendKeys(protractor_1.protractor.Key.TAB);
            yield this.izaberiBtn.click();
            yield this.prihvatiBtn.get(index).click();
            if ((yield this.submit.isEnabled()) === true) {
                yield this.submit.click();
            }
        });
    }
    DodajKvarBezOdgovornogLica(mesto, opis, index) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.dodaj.click();
            yield this.mesto.clear();
            yield this.opis.clear();
            yield this.mesto.sendKeys(mesto);
            yield this.opis.sendKeys(opis);
            yield this.opis.sendKeys(protractor_1.protractor.Key.TAB);
            if ((yield this.submit.isEnabled()) === true) {
                yield this.submit.click();
            }
        });
    }
}
exports.KvaroviPage = KvaroviPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS3Zhcm92aS5wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcGFnZU9iai9aZ3JhZGFLdWNuaVNhdmV0L0t2YXJvdmkucGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQW9HO0FBRXBHLE1BQWEsV0FBVztJQWdCdEI7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLEtBQUssR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxzQkFBc0IsR0FBQyxjQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsS0FBSyxHQUFDLGNBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywyRkFBMkYsQ0FBQyxDQUFDLENBQUM7UUFDaEksSUFBSSxDQUFDLElBQUksR0FBQyxjQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMkZBQTJGLENBQUMsQ0FBQyxDQUFDO1FBQy9ILElBQUksQ0FBQyxVQUFVLEdBQUMsY0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxXQUFXLEdBQUMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFFBQVEs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
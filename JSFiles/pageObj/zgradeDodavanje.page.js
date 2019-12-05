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
let Ec = protractor_1.protractor.ExpectedConditions;
class ZgradeDodavanjePage {
    constructor() {
        this.broj = protractor_1.$("#broj");
        this.brojStanova = protractor_1.$("#brojStanova");
        this.mesto = protractor_1.$("#mesto");
        this.pregled = protractor_1.$("button.btn.btn-outline-primary");
        this.resetujte = protractor_1.element(protractor_1.by.xpath("//button[@class='btn btn-danger']"));
        this.ulica = protractor_1.$("#ulica");
        this.dodavanje = protractor_1.element(protractor_1.by.xpath("//li[@class='nav-item active']//button[@class='btn btn-primary']"));
        this.dodajte = protractor_1.element(protractor_1.by.xpath("//button[contains(text(),'Dodajte')]"));
        this.errMessMesto = protractor_1.element(protractor_1.by.xpath("//div[@class='row justify-content-md-center']//div[1]//div[1]//div[1]"));
        this.errMessUlica = protractor_1.element(protractor_1.by.xpath("//div[2]//div[1]//div[1]"));
        this.errMessBroj = protractor_1.element(protractor_1.by.xpath("/html/body/app-root/app-zgrade/div/app-dodaj-zgradu/div/form/fieldset/div[3]/div/div"));
        this.errMessBrojStanova = protractor_1.element(protractor_1.by.xpath("//div[4]//div[1]//div[1]"));
        this.errMessBrojNula = protractor_1.element(protractor_1.by.xpath("/html/body/app-root/app-zgrade/div/app-dodaj-zgradu/div/form/fieldset/div[3]/div/div"));
        this.alertMsg = protractor_1.element(protractor_1.by.xpath("//*[@id=\"toast-container\"]/div/div"));
    }
    dodavanjeZgrade(mesto, ulica, broj, brojStanova) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.mesto.clear();
            yield this.ulica.clear();
            yield this.broj.clear();
            yield this.brojStanova.clear();
            yield this.mesto.sendKeys(mesto);
            yield this.ulica.sendKeys(ulica);
            yield this.broj.sendKeys(broj);
            yield this.brojStanova.sendKeys(brojStanova);
            yield this.brojStanova.sendKeys(protractor_1.protractor.Key.TAB); //ovaj korak je potreban kako bi se izazvala poruka na input polju broj stanova
            if ((yield this.dodajte.isEnabled()) === true) {
                yield this.dodajte.click();
            }
        });
    }
    unosenjeVrednostiZgrade(mesto, ulica, broj, brojStanova) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.mesto.clear();
            yield this.ulica.clear();
            yield this.broj.clear();
            yield this.brojStanova.clear();
            yield this.mesto.sendKeys(mesto);
            yield this.ulica.sendKeys(ulica);
            yield this.broj.sendKeys(broj);
            yield this.brojStanova.sendKeys(brojStanova);
            yield this.resetujte.click();
        });
    }
    getErrMessMesto() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.errMessMesto.getText();
        });
    }
    getErrMessUlica() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.errMessUlica.getText();
        });
    }
    getErrMessBroj() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.errMessBroj.getText();
        });
    }
    getErrMessBrojStanova() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.errMessBrojStanova.getText();
        });
    }
    getErrMessBrojNula() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.errMessBrojNula.getText();
        });
    }
    getAlertMsg() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(Ec.visibilityOf(this.alertMsg), 5000);
            return yield this.alertMsg.getText();
        });
    }
    getUlicaInputValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.ulica.getAttribute("value");
        });
    }
    getBrojStanovaInputValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.brojStanova.getAttribute("value");
        });
    }
    getBrojInputValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.broj.getAttribute("value");
        });
    }
    getMestoInputValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.mesto.getAttribute("value");
        });
    }
}
exports.ZgradeDodavanjePage = ZgradeDodavanjePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemdyYWRlRG9kYXZhbmplLnBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqL3pncmFkZURvZGF2YW5qZS5wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBZ0Y7QUFDaEYsSUFBSSxFQUFFLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztBQUN2QyxNQUFhLG1CQUFtQjtJQUFoQztRQUNXLFNBQUksR0FBZSxjQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUIsZ0JBQVcsR0FBZSxjQUFDLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUMsVUFBSyxHQUFlLGNBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqQyxZQUFPLEdBQWUsY0FBQyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDMUQsY0FBUyxHQUFlLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUM7UUFDOUUsVUFBSyxHQUFlLGNBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqQyxjQUFTLEdBQWUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGtFQUFrRSxDQUFDLENBQUMsQ0FBQztRQUM5RyxZQUFPLEdBQWUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUMsQ0FBQztRQUMvRSxpQkFBWSxHQUFlLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx1RUFBdUUsQ0FBQyxDQUFDLENBQUM7UUFDdEgsaUJBQVksR0FBZSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLGdCQUFXLEdBQWUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHNGQUFzRixDQUFDLENBQUMsQ0FBQztRQUNwSSx1QkFBa0IsR0FBZSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMs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
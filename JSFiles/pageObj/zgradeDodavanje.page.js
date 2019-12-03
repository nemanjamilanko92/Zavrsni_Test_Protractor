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
        this.mesto = protractor_1.element(protractor_1.by.id("mesto"));
        this.pregled = protractor_1.element(protractor_1.by.css("button.btn.btn-outline-primary"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemdyYWRlRG9kYXZhbmplLnBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqL3pncmFkZURvZGF2YW5qZS5wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBZ0Y7QUFDaEYsSUFBSSxFQUFFLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztBQUN2QyxNQUFhLG1CQUFtQjtJQWU5QjtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUMsY0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUMsY0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxTQUFTLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsS0FBSyxHQUFDLGNBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxrRUFBa0UsQ0FBQyxDQUFDLENBQUM7UUFDckcsSUFBSSxDQUFDLE9BQU8sR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxZQUFZLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHVFQUF1RSxDQUFDLENBQUMsQ0FBQztRQUM3RyxJQUFJLENBQUMsWUFBWSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLFdBQVcsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsc0ZBQXNGLENBQUMsQ0FBQyxDQUFDO1FBQzNILElBQUksQ0FBQyxrQkFBa0IsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxlQUFlLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHNGQUFzRixDQUFDLENBQUMsQ0FBQztRQUMvSCxJQUFJLENBQUMsUUFBUSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVZLGVBQWUsQ0FBQyxLQUFhLEVBQUUsS0FBYSxFQUFFLElBQVksRUFBRSxXQUFtQjs7WUFDMUYsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3pCLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN6QixNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDeEIsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQy9CLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9CLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDN0MsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyx1QkFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLCtFQUErRTtZQUNwSSxJQUFHLENBQUEsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxNQUFHLElBQUksRUFBQztnQkFDdkMsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQzVCO1FBQ0wsQ0FBQztLQUFBO0lBRWMsdUJBQXVCLENBQUMsS0FBYSxFQUFFLEtBQWEsRUFBRSxJQUFZLEVBQUUsV0FBbUI7O1lBQ2xHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN6QixNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDekIsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3hCLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMvQixNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pDLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQixNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzdDLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMvQixDQUFDO0tBQUE7SUFFWSxlQUFlOztZQUMxQixPQUFPLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMzQyxDQUFDO0tBQUE7SUFFWSxlQUFlOztZQUMxQixPQUFPLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMzQyxDQUFDO0tBQUE7SUFFWSxjQUFjOztZQUN6QixPQUFPLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMxQyxDQUFDO0tBQUE7SUFFWSxxQkFBcUI7O1lBQ2hDLE9BQU8sTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakQsQ0FBQztLQUFBO0lBRVksa0JBQWtCOztZQUM3QixPQUFPLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM5QyxDQUFDO0tBQUE7SUFFWSxXQUFXOztZQUN0QixNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hELE9BQU8sTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3ZDLENBQUM7S0FBQTtJQUVZLGtCQUFrQjs7WUFDN0IsT0FBTyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELENBQUM7S0FBQTtJQUVZLHdCQUF3Qjs7WUFDbkMsT0FBTyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RELENBQUM7S0FBQTtJQUVZLGlCQUFpQjs7WUFDNUIsT0FBTyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9DLENBQUM7S0FBQTtJQUVZLGtCQUFrQjs7WUFDN0IsT0FBTyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELENBQUM7S0FBQTtDQUNGO0FBbkdELGtEQW1HQyJ9
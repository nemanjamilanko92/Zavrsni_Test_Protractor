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
const Select_1 = require("../../helperClass/Select");
class PredloziTackeDnevnogReda {
    constructor() {
        this.dodajTackuDnevnogRedaDugme = protractor_1.element(protractor_1.by.xpath("//button[@class='btn']"));
        this.dodajPredlogTackeDugme = protractor_1.element.all(protractor_1.by.css("button[class*='btn-succ']"));
        this.dropDownSkupstina = protractor_1.element(protractor_1.by.css("[class*='custom']"));
        this.brisi = protractor_1.element.all(protractor_1.by.xpath("//span[contains(text(),'brisi')]"));
        this.izmeniTackeDnevnogReda = protractor_1.element.all(protractor_1.by.xpath("//span[contains(text(),'izmeni')]"));
        this.unosIzmeneTeksta = protractor_1.$("#noviTekst");
        this.odustani = protractor_1.element.all(protractor_1.by.xpath("//font[contains(text(),'odustani')]"));
        this.novaTackaDnevnogReda = protractor_1.$("#tekstPtdr");
        this.potvrdiBtn = protractor_1.element(protractor_1.by.css("button[class*='btn btn-pri']"));
        this.alertMsg = protractor_1.element(protractor_1.by.xpath("//*[@id=\"toast-container\"]/div"));
        this.novaDodataTackaDnevnogReda = protractor_1.element.all(protractor_1.by.xpath("//span[@class='line-breaker']"));
        this.potvrdiIzmenuTacke = protractor_1.element.all(protractor_1.by.xpath("//span[contains(text(),'potvrdi')]"));
    }
    getNovoDodatoOvacestenje() {
        return __awaiter(this, void 0, void 0, function* () {
            let text = yield this.novaDodataTackaDnevnogReda.get(0).getText();
            return text.trim();
        });
    }
    getAlertMsgText() {
        return __awaiter(this, void 0, void 0, function* () {
            let text = yield this.alertMsg.getText();
            return text.trim();
        });
    }
    dodajTackuDnevnogReda(text) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.dodajTackuDnevnogRedaDugme.click();
            yield this.novaTackaDnevnogReda.clear();
            yield this.novaTackaDnevnogReda.sendKeys(text);
            if ((yield this.potvrdiBtn.isEnabled()) === true) {
                yield this.potvrdiBtn.click();
            }
        });
    }
    IzmeniTackeDnevnogReda(text) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.izmeniTackeDnevnogReda.get(0).click();
            yield this.unosIzmeneTeksta.sendKeys(text);
            yield this.potvrdiIzmenuTacke.get(0).click();
        });
    }
    dodavanjePredlogaTackeUSkupstinu(value, index) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Select_1.Select.selectByIndex(value, this.dropDownSkupstina);
            yield this.dodajPredlogTackeDugme.get(index).click();
        });
    }
}
exports.PredloziTackeDnevnogReda = PredloziTackeDnevnogReda;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJlZGxvemlUYWNrZURuZXZub2dSZWRhLnBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9wYWdlT2JqL1pncmFkYUt1Y25pU2F2ZXQvUHJlZGxvemlUYWNrZURuZXZub2dSZWRhLnBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFvRztBQUNwRyxxREFBa0Q7QUFDbEQsTUFBYSx3QkFBd0I7SUFjbkM7UUFDRSxJQUFJLENBQUMsMEJBQTBCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsc0JBQXNCLEdBQUMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUE7UUFDNUUsSUFBSSxDQUFDLGlCQUFpQixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUE7UUFDM0QsSUFBSSxDQUFDLEtBQUssR0FBQyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsQ0FBQTtRQUNwRSxJQUFJLENBQUMsc0JBQXNCLEdBQUMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUE7UUFDdEYsSUFBSSxDQUFDLGdCQUFnQixHQUFDLGNBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFDLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMscUNBQXFDLENBQUMsQ0FBQyxDQUFBO1FBQzFFLElBQUksQ0FBQyxvQkFBb0IsR0FBQyxjQUFDLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDekMsSUFBSSxDQUFDLFVBQVUsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFBO1FBQy9ELElBQUksQ0FBQyxRQUFRLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsQ0FBQTtRQUNuRSxJQUFJLENBQUMsMEJBQTBCLEdBQUMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7UUFDdkYsSUFBSSxDQUFDLGtCQUFrQixHQUFDLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxDQUFBO0lBQ3JGLENBQUM7SUFDWSx3QkFBd0I7O1lBQ3BDLElBQUksSUFBSSxHQUFJLE1BQU0sSUFBSSxDQUFDLDBCQUEwQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtZQUNsRSxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQixDQUFDO0tBQUE7SUFDWSxlQUFlOztZQUMzQixJQUFJLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDekMsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEIsQ0FBQztLQUFBO0lBRVcscUJBQXFCLENBQUMsSUFBVzs7WUFDM0MsTUFBTSxJQUFJLENBQUMsMEJBQTBCLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDOUMsTUFBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDekMsTUFBTSxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9DLElBQUcsQ0FBQSxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLE1BQUcsSUFBSSxFQUFFO2dCQUM1QyxNQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDL0I7UUFDSCxDQUFDO0tBQUE7SUFFWSxzQkFBc0IsQ0FBQyxJQUFXOztZQUM5QyxNQUFNLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDakQsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNDLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5QyxDQUFDO0tBQUE7SUFDWSxnQ0FBZ0MsQ0FBQyxLQUFZLEVBQUMsS0FBWTs7WUFDckUsTUFBTSxlQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtZQUN4RCxNQUFNLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkQsQ0FBQztLQUFBO0NBQ0Y7QUF2REQsNERBdURDIn0=
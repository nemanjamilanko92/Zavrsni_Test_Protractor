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
class ObavestenjaPage {
    constructor() {
        this.dodajObavestenje = protractor_1.$("#dodajObavestenje");
        this.izmeniObavestenje = protractor_1.element.all(protractor_1.by.css("#izmeniObavestenje"));
        this.brisiObavestenje = protractor_1.element.all(protractor_1.by.xpath("//span[contains(text(),'brisi')]"));
        this.potvrdiIzmenu = protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'potvrdi')]"));
        this.odustani = protractor_1.element(protractor_1.by.xpath("//div[@class='container']//div[1]//div[1]//table[1]//tbody[1]//tr[3]//td[1]//span[1]//a[3]"));
        this.unosIzmeneTeksta = protractor_1.element(protractor_1.by.xpath("//*[@id=\"noviTekst\"]"));
        this.alertObavestenja = protractor_1.element(protractor_1.by.xpath("//*[@id=\"toast-container\"]/div/div"));
        this.novoObavestenje = protractor_1.$("#tekstObavestenja");
        this.potvrdiBtn = protractor_1.$("#dodajObavestenje");
        this.novoDodatoObavestenje = protractor_1.element(protractor_1.by.xpath("//div[@class='container']//div[1]//div[1]//table[1]//tbody[1]//tr[2]//td[1]//span[1]"));
    }
    getAlertObavestenjaMsg() {
        return __awaiter(this, void 0, void 0, function* () {
            let text = yield this.alertObavestenja.getText();
            return text.trim();
        });
    }
    unosNovoObavestenje(value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.novoObavestenje.sendKeys(value);
        });
    }
    DodajObavestenje(text) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.dodajObavestenje.click();
            yield this.novoObavestenje.clear();
            yield this.novoObavestenje.sendKeys(text);
            if ((yield this.potvrdiBtn.isEnabled()) === true) {
                yield this.potvrdiBtn.click();
            }
        });
    }
    getnovoDodatoObavestenje() {
        return __awaiter(this, void 0, void 0, function* () {
            let text = yield this.novoDodatoObavestenje.getText();
            return text.trim();
        });
    }
    IzmeniObavestenje(text) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.izmeniObavestenje.get(0).click();
            yield this.unosIzmeneTeksta.sendKeys(text);
            yield this.potvrdiIzmenu.click();
        });
    }
    obrisiObavestenje() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.brisiObavestenje.get(0).click();
        });
    }
}
exports.ObavestenjaPage = ObavestenjaPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JhdmVzdGVuamEucGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhZ2VPYmovWmdyYWRhS3VjbmlTYXZldC9PYmF2ZXN0ZW5qYS5wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBb0c7QUFFcEcsTUFBYSxlQUFlO0lBVzFCO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixHQUFDLGNBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxpQkFBaUIsR0FBQyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLGFBQWEsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxRQUFRLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDRGQUE0RixDQUFDLENBQUMsQ0FBQztRQUM5SCxJQUFJLENBQUMsZ0JBQWdCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsZUFBZSxHQUFDLGNBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxVQUFVLEdBQUMsY0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLHFCQUFxQixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxzRkFBc0YsQ0FBQyxDQUFDLENBQUM7SUFDdkksQ0FBQztJQUVZLHNCQUFzQjs7WUFDakMsSUFBSSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakQsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkIsQ0FBQztLQUFBO0lBRVUsbUJBQW1CLENBQUMsS0FBYTs7WUFDOUMsTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxDQUFDO0tBQUE7SUFFVSxnQkFBZ0IsQ0FBQyxJQUFZOztZQUN4QyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNwQyxNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDbkMsTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QyxJQUFHLENBQUEsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxNQUFHLElBQUksRUFBRTtnQkFDNUMsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQzdCO1FBQ0EsQ0FBQztLQUFBO0lBRVksd0JBQXdCOztZQUNuQyxJQUFJLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN0RCxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixDQUFDO0tBQUE7SUFFWSxpQkFBaUIsQ0FBQyxJQUFZOztZQUM1QyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDNUMsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNDLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsQyxDQUFDO0tBQUE7SUFFWSxpQkFBaUI7O1lBQzdCLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1QyxDQUFDO0tBQUE7Q0FDRjtBQXhERCwwQ0F3REMifQ==
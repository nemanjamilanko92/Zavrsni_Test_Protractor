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
class PromenaLozinkePage {
    constructor() {
        this.novaLozinka = protractor_1.$("#novaLozinka");
        this.potvrdaNoveLozinke = protractor_1.$("#potvrdaNoveLozinke");
        this.promeniteLozinku = protractor_1.$("button.btn.btn-primary");
        this.staraLozinka = protractor_1.$("#staraLozinka");
        this.alertMsg = protractor_1.element(protractor_1.by.xpath("//*[@id='toast-container']/div/div"));
        this.staraLozinkaErrMsg = protractor_1.element(protractor_1.by.xpath("/html/body/app-root/app-promena-lozinke/div/form/fieldset/div[1]/div"));
        this.novaLozinkaErrMsg = protractor_1.element(protractor_1.by.xpath("/html/body/app-root/app-promena-lozinke/div/form/fieldset/div[2]/div[1]/div"));
        this.potvrdaNoveLozinkeErrMsg = protractor_1.element(protractor_1.by.xpath("/html/body/app-root/app-promena-lozinke/div/form/fieldset/div[2]/div[2]/div"));
    }
    getAlertMsg() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(Ec.visibilityOf(this.alertMsg), 5000);
            let text = yield this.alertMsg.getText();
            return text.trim();
        });
    }
    getStaraLozinkaErrMsg() {
        return __awaiter(this, void 0, void 0, function* () {
            let text = yield this.staraLozinkaErrMsg.getText();
            return text.trim();
        });
    }
    getNovaLozinkaErrMsg() {
        return __awaiter(this, void 0, void 0, function* () {
            let text = yield this.novaLozinkaErrMsg.getText();
            return text.trim();
        });
    }
    getPotvrdaNoveLozinkaErrMsg() {
        return __awaiter(this, void 0, void 0, function* () {
            let text = yield this.potvrdaNoveLozinkeErrMsg.getText();
            return text.trim();
        });
    }
    unosLozinke(staraLozinka, novaLozinka, potvrdaNoveLozinke) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.staraLozinka.clear();
            yield this.novaLozinka.clear();
            yield this.potvrdaNoveLozinke.clear();
            yield this.staraLozinka.sendKeys(staraLozinka);
            yield this.novaLozinka.sendKeys(novaLozinka);
            yield this.potvrdaNoveLozinke.sendKeys(potvrdaNoveLozinke);
            if ((yield this.promeniteLozinku.isEnabled()) === true) {
                yield this.promeniteLozinku.click();
            }
        });
    }
}
exports.PromenaLozinkePage = PromenaLozinkePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvbWVuYUxvemlua2UucGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmovUHJvbWVuYUxvemlua2UucGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQW9HO0FBQ3BHLElBQUksRUFBRSxHQUFHLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7QUFDdkMsTUFBYSxrQkFBa0I7SUFTN0I7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFDLGNBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsa0JBQWtCLEdBQUMsY0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLGdCQUFnQixHQUFDLGNBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxZQUFZLEdBQUMsY0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsa0JBQWtCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHNFQUFzRSxDQUFDLENBQUMsQ0FBQztRQUNsSCxJQUFJLENBQUMsaUJBQWlCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDZFQUE2RSxDQUFDLENBQUMsQ0FBQztRQUN4SCxJQUFJLENBQUMsd0JBQXdCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDZFQUE2RSxDQUFDLENBQUMsQ0FBQztJQUNqSSxDQUFDO0lBRVksV0FBVzs7WUFDdEIsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQztZQUN4RCxJQUFJLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDekMsT0FBUSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsQ0FBQztLQUFBO0lBRVkscUJBQXFCOztZQUNoQyxJQUFJLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNuRCxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixDQUFDO0tBQUE7SUFFWSxvQkFBb0I7O1lBQy9CLElBQUksSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2xELE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLENBQUM7S0FBQTtJQUVZLDJCQUEyQjs7WUFDdEMsSUFBSSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsd0JBQXdCLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDekQsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsQ0FBQztLQUFBO0lBRWEsV0FBVyxDQUFDLFlBQW9CLEVBQUUsV0FBbUIsRUFBRSxrQkFBMEI7O1lBQzVGLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNoQyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDL0IsTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdEMsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMvQyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzdDLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQzNELElBQUcsQ0FBQSxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsTUFBRyxJQUFJLEVBQUU7Z0JBQ2hELE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ3RDO1FBQ0gsQ0FBQztLQUFBO0NBQ0Y7QUFwREQsZ0RBb0RDIn0=
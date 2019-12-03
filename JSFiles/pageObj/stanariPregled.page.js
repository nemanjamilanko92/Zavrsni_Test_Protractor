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
class StanariPregledPage {
    constructor() {
        this.prikazi = protractor_1.element(protractor_1.by.xpath("//select[@id='prikaz']"));
        this.filterZaPretragu = protractor_1.element(protractor_1.by.xpath("//input[@id='filter']"));
        this.pretraga = protractor_1.element(protractor_1.by.xpath("//button[contains(text(),'Pretraga')]"));
        this.imeIPrezime = protractor_1.element(protractor_1.by.xpath("//a[contains(text(),'Gospodin Predsednik')]"));
        this.errMessZaNepostojecegStanara = protractor_1.element(protractor_1.by.xpath("//h2[contains(text(),'Nijedan stanar sa trazenim kriterijumom nije')]"));
        this.imePrezimeStanar = protractor_1.element(protractor_1.by.xpath("//a[contains(text(),'Slavisa1 slavkovic')]"));
    }
    UnosPretrage(imeIPrezime) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.filterZaPretragu.clear();
            yield this.filterZaPretragu.sendKeys(imeIPrezime);
            yield this.pretraga.click();
        });
    }
    getImeIPrezimeStanar() {
        return __awaiter(this, void 0, void 0, function* () {
            let text = yield this.imePrezimeStanar.getText();
            return text.trim();
        });
    }
    getimeIPrezimeGosPred() {
        return __awaiter(this, void 0, void 0, function* () {
            let text = yield this.imeIPrezime.getText();
            return text.trim();
        });
    }
    geterrMessZaNepostojecegStanara() {
        return __awaiter(this, void 0, void 0, function* () {
            let text = yield this.errMessZaNepostojecegStanara.getText();
            return text.trim();
        });
    }
}
exports.StanariPregledPage = StanariPregledPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhbmFyaVByZWdsZWQucGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmovc3RhbmFyaVByZWdsZWQucGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQW9HO0FBRXBHLE1BQWEsa0JBQWtCO0lBTzdCO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxnQkFBZ0IsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxRQUFRLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsV0FBVyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLDRCQUE0QixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx1RUFBdUUsQ0FBQyxDQUFDLENBQUM7UUFDN0gsSUFBSSxDQUFDLGdCQUFnQixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDLENBQUM7SUFDeEYsQ0FBQztJQUVZLFlBQVksQ0FBQyxXQUFtQjs7WUFDN0MsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDcEMsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2xELE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1QixDQUFDO0tBQUE7SUFFWSxvQkFBb0I7O1lBQy9CLElBQUksSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2hELE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLENBQUM7S0FBQTtJQUVZLHFCQUFxQjs7WUFDaEMsSUFBSSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzNDLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLENBQUM7S0FBQTtJQUNZLCtCQUErQjs7WUFDMUMsSUFBSSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDNUQsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsQ0FBQztLQUFBO0NBQ0Y7QUFuQ0QsZ0RBbUNDIn0=
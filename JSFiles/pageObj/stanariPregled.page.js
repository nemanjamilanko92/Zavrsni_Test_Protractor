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
    geterrMessZaNepostojecegStanara() {
        return __awaiter(this, void 0, void 0, function* () {
            let text = yield this.errMessZaNepostojecegStanara.getText();
            return text.trim();
        });
    }
    proveraStanara(ime, prezime, email) {
        return __awaiter(this, void 0, void 0, function* () {
            let provera = [];
            provera.push(ime + " " + prezime + " " + email);
            let ImePrezime = [];
            let tableRow = protractor_1.element.all(protractor_1.by.xpath("//tbody/tr"));
            const table_rowSize = yield tableRow.count();
            for (let i = 0; i < table_rowSize; i++) {
                let Columns_row = tableRow.get(i).all(protractor_1.by.css("td:nth-of-type(1)"));
                let columns_count = yield Columns_row.count();
                for (let column = 0; column < columns_count; column++) {
                    ImePrezime.push(yield Columns_row.get(column).getText());
                }
            }
            console.log(ImePrezime);
            const found = provera.some(r => ImePrezime.includes(r));
            return found;
        });
    }
}
exports.StanariPregledPage = StanariPregledPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhbmFyaVByZWdsZWQucGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmovc3RhbmFyaVByZWdsZWQucGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQW9HO0FBRXBHLE1BQWEsa0JBQWtCO0lBTTdCO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxnQkFBZ0IsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxRQUFRLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsNEJBQTRCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHVFQUF1RSxDQUFDLENBQUMsQ0FBQztRQUM3SCxJQUFJLENBQUMsZ0JBQWdCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUMsQ0FBQztJQUN4RixDQUFDO0lBRVksWUFBWSxDQUFDLFdBQW1COztZQUM3QyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNwQyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDbEQsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzVCLENBQUM7S0FBQTtJQUVZLG9CQUFvQjs7WUFDL0IsSUFBSSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDaEQsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsQ0FBQztLQUFBO0lBR1ksK0JBQStCOztZQUMxQyxJQUFJLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM1RCxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixDQUFDO0tBQUE7SUFHYSxjQUFjLENBQUUsR0FBVyxFQUFFLE9BQWUsRUFBRSxLQUFhOztZQUN2RSxJQUFJLE9BQU8sR0FBWSxFQUFFLENBQUM7WUFDeEIsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFDLE9BQU8sR0FBQyxHQUFHLEdBQUUsS0FBSyxDQUFDLENBQUM7WUFDekMsSUFBSSxVQUFVLEdBQVksRUFBRSxDQUFDO1lBQzdCLElBQUksUUFBUSxHQUF1QixvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFFdkUsTUFBTSxhQUFhLEdBQVUsTUFBTSxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDcEQsS0FBSSxJQUFJLENBQUMsR0FBVSxDQUFDLEVBQUMsQ0FBQyxHQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUUsRUFBQztnQkFFdkMsSUFBSSxXQUFXLEdBQXNCLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO2dCQUN0RixJQUFJLGFBQWEsR0FBRSxNQUFNLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDN0MsS0FBTSxJQUFJLE1BQU0sR0FBVSxDQUFDLEVBQUUsTUFBTSxHQUFHLGFBQWEsRUFBRSxNQUFNLEVBQUUsRUFBRTtvQkFFN0QsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLFdBQVcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztpQkFDekQ7YUFDSDtZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDdkIsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUEsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUN0RCxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO0tBQUE7Q0FDRjtBQXBERCxnREFvREMifQ==
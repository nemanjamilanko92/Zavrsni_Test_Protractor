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
class ZgradePregledPage {
    constructor() {
        this.prikazi = protractor_1.$("#prikaz");
        this.ulicaBroj = protractor_1.element(protractor_1.by.xpath("//input[@id='ulicaBroj']"));
        this.mesto = protractor_1.$("#mesto");
        this.pretraga = protractor_1.element(protractor_1.by.xpath("//button[contains(text(),'Pretraga')]"));
        this.adresaZgrade = protractor_1.element(protractor_1.by.xpath("//a[contains(text(),'Marsala Tita 21, Vrbas')]"));
        this.errMessZaNepostojecuZgradu = protractor_1.element(protractor_1.by.xpath("//h2[contains(text(),'Nijedna zgrada sa trazenim kriterijumima nije')]"));
    }
    UnosPretrage(ulicaBroj, mesto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ulicaBroj.clear();
            yield this.mesto.clear();
            yield this.ulicaBroj.sendKeys(ulicaBroj);
            yield this.mesto.sendKeys(mesto);
            yield this.pretraga.click();
        });
    }
    getAdresaZgradeText() {
        return __awaiter(this, void 0, void 0, function* () {
            let text = yield this.adresaZgrade.getText();
            return text.trim();
        });
    }
    //metoda za potvrdu da li je stanar/zgrada uneta u bazu
    proveraZgrade(ulica, broj, mesto) {
        return __awaiter(this, void 0, void 0, function* () {
            let provera;
            provera.push(ulica + " " + broj + "," + " " + mesto);
            let adrese;
            let tableRow = protractor_1.element.all(protractor_1.by.xpath("//tbody/tr"));
            const table_rowSize = tableRow.size();
            for (let i = 0; i < table_rowSize; i++) {
                let Columns_row = tableRow[i].findElements(protractor_1.By.cssSelector("td:nth-of-type(1)"));
                const columns_count = Columns_row.size();
                for (let column = 0; column < columns_count; column++) {
                    adrese.push(Columns_row[column].getText());
                }
            }
            const found = provera.some(r => adrese.includes(r));
            return found;
        });
    }
}
exports.ZgradePregledPage = ZgradePregledPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemdyYWRlUHJlZ2xlZC5wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iai96Z3JhZGVQcmVnbGVkLnBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFvRztBQUVwRyxNQUFhLGlCQUFpQjtJQU81QjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUMsY0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsS0FBSyxHQUFDLGNBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLFlBQVksR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsZ0RBQWdELENBQUMsQ0FBQyxDQUFDO1FBQ3RGLElBQUksQ0FBQywwQkFBMEIsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsd0VBQXdFLENBQUMsQ0FBQyxDQUFDO0lBQzlILENBQUM7SUFFWSxZQUFZLENBQUMsU0FBaUIsRUFBRSxLQUFhOztZQUMxRCxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDN0IsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3pCLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDekMsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUIsQ0FBQztLQUFBO0lBRVksbUJBQW1COztZQUM5QixJQUFJLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDN0MsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsQ0FBQztLQUFBO0lBRUQsdURBQXVEO0lBQzFDLGFBQWEsQ0FBRSxLQUFhLEVBQUUsSUFBWSxFQUFFLEtBQWE7O1lBQ3BFLElBQUksT0FBa0IsQ0FBQztZQUNyQixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxHQUFHLEdBQUMsSUFBSSxHQUFDLEdBQUcsR0FBRSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDOUMsSUFBSSxNQUFpQixDQUFDO1lBQ3RCLElBQUksUUFBUSxHQUF1QixvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDdkUsTUFBTSxhQUFhLEdBQVUsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzdDLEtBQUksSUFBSSxDQUFDLEdBQVUsQ0FBQyxFQUFDLENBQUMsR0FBQyxhQUFhLEVBQUMsQ0FBQyxFQUFFLEVBQUM7Z0JBRXZDLElBQUksV0FBVyxHQUFzQixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLGVBQUUsQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO2dCQUNuRyxNQUFNLGFBQWEsR0FBRyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3pDLEtBQU0sSUFBSSxNQUFNLEdBQVUsQ0FBQyxFQUFFLE1BQU0sR0FBRyxhQUFhLEVBQUUsTUFBTSxFQUFFLEVBQUU7b0JBRTNELE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7aUJBQzdDO2FBQ0g7WUFDRCxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ2xELE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7S0FBQTtDQUNGO0FBaERELDhDQWdEQyJ9
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
class Stan {
    constructor() {
        this.postaviZaPredsednikaDugme = protractor_1.element.all(protractor_1.by.xpath("//button[contains(text(),'Postavi za predsednika')]"));
        this.postaviZaVlasnikaDugme = protractor_1.element.all(protractor_1.by.xpath("//button[contains(text(),'Postavi za vlasnika')]"));
        this.ukloniDugme = protractor_1.element.all(protractor_1.by.xpath("//button[contains(text(),'Ukloni')]"));
        this.dodajUStanareDugme = protractor_1.element.all(protractor_1.by.xpath("//button[contains(text(),'Dodaj u stanare')]"));
        this.unosImePrezime = protractor_1.element(protractor_1.by.xpath("//input[@id='filter']"));
        this.filtrirajDugme = protractor_1.element(protractor_1.by.xpath("//button[contains(text(),'Filtriraj')]"));
        this.alertMsg = protractor_1.element(protractor_1.by.xpath("//*[@id=\"toast-container\"]/div/div"));
    }
    getAlertMsg() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(Ec.visibilityOf(this.alertMsg));
            let text = yield this.alertMsg.getText();
            return text.trim();
        });
    }
}
exports.Stan = Stan;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3Rhbi5wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iai9TdGFuLnBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFvRztBQUNwRyxJQUFJLEVBQUUsR0FBRyx1QkFBVSxDQUFDLGtCQUFrQixDQUFDO0FBRXZDLE1BQWEsSUFBSTtJQWFmO1FBQ0UsSUFBSSxDQUFDLHlCQUF5QixHQUFDLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQyxDQUFBO1FBQzNHLElBQUksQ0FBQyxzQkFBc0IsR0FBQyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGtEQUFrRCxDQUFDLENBQUMsQ0FBQTtRQUNyRyxJQUFJLENBQUMsV0FBVyxHQUFDLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMscUNBQXFDLENBQUMsQ0FBQyxDQUFBO1FBQzdFLElBQUksQ0FBQyxrQkFBa0IsR0FBQyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDhDQUE4QyxDQUFDLENBQUMsQ0FBQTtRQUM3RixJQUFJLENBQUMsY0FBYyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUE7UUFDOUQsSUFBSSxDQUFDLGNBQWMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQyxDQUFBO1FBQy9FLElBQUksQ0FBQyxRQUFRLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUMsQ0FBQTtJQUN6RSxDQUFDO0lBRVksV0FBVzs7WUFDdEIsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO1lBQ2xELElBQUksSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtZQUN4QyxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixDQUFDO0tBQUE7Q0FDRjtBQTVCRCxvQkE0QkMifQ==
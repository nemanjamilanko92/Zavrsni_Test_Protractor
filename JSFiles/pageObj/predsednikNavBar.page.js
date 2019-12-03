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
class PredsednikNavBarPage {
    constructor() {
        this.izlogujteSe = protractor_1.$("button.btn.btn-secondary");
        this.pocetna = protractor_1.element(protractor_1.by.xpath("//a[contains(text(),'Pocetna')]"));
        this.promenaLozinke = protractor_1.element(protractor_1.by.xpath("//a[contains(text(),'Promena lozinke')]"));
        this.emailText = protractor_1.element(protractor_1.by.xpath("//label[@class='nav-link active']"));
        this.logOutBtn = protractor_1.element(protractor_1.by.xpath("//button[@class='btn btn-secondary']"));
    }
    getEmailText() {
        return __awaiter(this, void 0, void 0, function* () {
            let text = yield this.emailText.getText();
            return text.trim();
        });
    }
}
exports.PredsednikNavBarPage = PredsednikNavBarPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZHNlZG5pa05hdkJhci5wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iai9wcmVkc2VkbmlrTmF2QmFyLnBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUE2RztBQUU3RyxNQUFhLG9CQUFvQjtJQU0vQjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUMsY0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLE9BQU8sR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxjQUFjLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsU0FBUyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFNBQVMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFWSxZQUFZOztZQUN2QixJQUFJLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDMUMsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsQ0FBQztLQUFBO0NBQ0Q7QUFsQkQsb0RBa0JDIn0=
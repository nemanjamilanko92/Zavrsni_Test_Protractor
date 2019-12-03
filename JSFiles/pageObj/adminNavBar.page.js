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
class AdminNavBarPage {
    constructor() {
        this.pocetnaNav = protractor_1.element(protractor_1.by.xpath("//a[contains(text(),'Pocetna')]"));
        this.zgradeNav = protractor_1.element(protractor_1.by.xpath("//a[@class='nav-link'][contains(text(),'Zgrade')]"));
        this.stanariNav = protractor_1.element(protractor_1.by.xpath("//a[@class='nav-link'][contains(text(),'Stanari')]"));
        this.institucijeNav = protractor_1.element(protractor_1.by.xpath("//a[@class='nav-link'][contains(text(),'Institucije')]"));
        this.firmeNav = protractor_1.element(protractor_1.by.xpath("//a[@class='nav-link'][contains(text(),'Firme')]"));
        this.logOutBtn = protractor_1.element(protractor_1.by.xpath("//button[@class='btn btn-secondary']"));
        this.adminEmailText = protractor_1.element(protractor_1.by.xpath("//label[@class='nav-link active']"));
    }
    getAdminEmailText() {
        return __awaiter(this, void 0, void 0, function* () {
            let text = yield this.adminEmailText.getText();
            return text.trim();
        });
    }
}
exports.AdminNavBarPage = AdminNavBarPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW5OYXZCYXIucGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmovYWRtaW5OYXZCYXIucGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQWdGO0FBRWhGLE1BQWEsZUFBZTtJQVMxQjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQTtRQUNwRSxJQUFJLENBQUMsU0FBUyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxtREFBbUQsQ0FBQyxDQUFDLENBQUE7UUFDckYsSUFBSSxDQUFDLFVBQVUsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsb0RBQW9ELENBQUMsQ0FBQyxDQUFBO1FBQ3ZGLElBQUksQ0FBQyxjQUFjLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHdEQUF3RCxDQUFDLENBQUMsQ0FBQTtRQUMvRixJQUFJLENBQUMsUUFBUSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxrREFBa0QsQ0FBQyxDQUFDLENBQUE7UUFDbkYsSUFBSSxDQUFDLFNBQVMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxDQUFBO1FBQ3hFLElBQUksQ0FBQyxjQUFjLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQTtJQUM1RSxDQUFDO0lBRVksaUJBQWlCOztZQUM1QixJQUFJLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDL0MsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsQ0FBQztLQUFBO0NBQ0Q7QUF2QkQsMENBdUJDIn0=
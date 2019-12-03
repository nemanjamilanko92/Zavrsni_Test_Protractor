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
class LoginPage {
    constructor() {
        this.ExpectedConditions = protractor_1.protractor.ExpectedConditions;
        this.email = protractor_1.$("#email");
        this.lozinka = protractor_1.$("#lozinka");
        this.ulogujSeBtn = protractor_1.element(protractor_1.by.xpath("//button[@class='btn btn-primary']"));
        this.errorMsg = protractor_1.element(protractor_1.by.xpath("/html/body/app-root/app-logovanje/div/form/fieldset/div[1]"));
    }
    logIn(email, lozinka) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.email.clear();
            yield this.lozinka.clear();
            yield this.email.sendKeys(email);
            yield this.lozinka.sendKeys(lozinka);
            yield this.ulogujSeBtn.click();
        });
    }
    getErrMsgText() {
        return __awaiter(this, void 0, void 0, function* () {
            let text = yield this.errorMsg.getText();
            return text.trim();
        });
    }
}
exports.LoginPage = LoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ucGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmovbG9naW4ucGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQWdGO0FBRWhGLE1BQWEsU0FBUztJQU9wQjtRQU5BLHVCQUFrQixHQUFJLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7UUFPbEQsSUFBSSxDQUFDLEtBQUssR0FBQyxjQUFDLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBQyxjQUFDLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxDQUFBO1FBQ3hFLElBQUksQ0FBQyxRQUFRLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDREQUE0RCxDQUFDLENBQUMsQ0FBQTtJQUMvRixDQUFDO0lBRVksS0FBSyxDQUFDLEtBQVksRUFBRSxPQUFjOztZQUMvQyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDekIsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzNCLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNyQyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDL0IsQ0FBQztLQUFBO0lBRVksYUFBYTs7WUFDeEIsSUFBSSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3pDLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLENBQUM7S0FBQTtDQUNEO0FBMUJELDhCQTBCQyJ9
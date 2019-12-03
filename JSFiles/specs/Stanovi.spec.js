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
const login_page_1 = require("../pageObj/login.page");
const Stanovi_page_1 = require("../pageObj/ZgradaKucniSavet/Stanovi.page");
describe('testiranje Dodavanja Zgrade', () => {
    let loginPage;
    let stanoviPage;
    beforeAll(() => __awaiter(this, void 0, void 0, function* () {
        stanoviPage = new Stanovi_page_1.StanoviPage();
        loginPage = new login_page_1.LoginPage();
        yield protractor_1.browser.get("http://localhost:8080/logovanje");
        yield loginPage.logIn("admin@gmail.com", "Bar5slova");
        yield protractor_1.browser.get("http://localhost:8080/zgrada/1/stanovi");
    }));
    it("test", () => __awaiter(this, void 0, void 0, function* () {
        yield stanoviPage.vlasnikIstanari.get(0).click();
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3Rhbm92aS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3BlY3MvU3Rhbm92aS5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBbUQ7QUFDbkQsc0RBQThDO0FBQzlDLDJFQUF1RTtBQUN2RSxRQUFRLENBQUMsNkJBQTZCLEVBQUMsR0FBRSxFQUFFO0lBQ3pDLElBQUksU0FBbUIsQ0FBQztJQUN4QixJQUFJLFdBQXVCLENBQUE7SUFDM0IsU0FBUyxDQUFDLEdBQU8sRUFBRTtRQUNqQixXQUFXLEdBQUUsSUFBSSwwQkFBVyxFQUFFLENBQUM7UUFDL0IsU0FBUyxHQUFDLElBQUksc0JBQVMsRUFBRSxDQUFDO1FBQzFCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztRQUNyRCxNQUFNLFNBQVMsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDdEQsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO0lBQzlELENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsTUFBTSxFQUFDLEdBQU8sRUFBRTtRQUNsQixNQUFNLFdBQVcsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2xELENBQUMsQ0FBQSxDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQSJ9
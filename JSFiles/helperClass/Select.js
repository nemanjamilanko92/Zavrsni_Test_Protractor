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
const stanariPregled_page_1 = require("../pageObj/stanariPregled.page");
let stanariPregledPage = new stanariPregled_page_1.StanariPregledPage();
class Select {
    static selectByIndex(index, dropdown) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dropdown.click();
            protractor_1.browser.sleep(1000);
            index = index + 1;
            console.log("Selecting element based index : " + index);
            yield dropdown.element(protractor_1.by.css("option:nth-child(" + index + ")")).click();
        });
    }
}
exports.Select = Select;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VsZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vaGVscGVyQ2xhc3MvU2VsZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBZ0U7QUFDaEUsd0VBQW1FO0FBQ25FLElBQUksa0JBQWtCLEdBQUcsSUFBSSx3Q0FBa0IsRUFBRSxDQUFDO0FBQ2xELE1BQWEsTUFBTTtJQUNSLE1BQU0sQ0FBTyxhQUFhLENBQUMsS0FBWSxFQUFDLFFBQXNCOztZQUNwRSxNQUFNLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUNyQixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNsQixLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxHQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ3ZELE1BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFDLEtBQUssR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ3hFLENBQUM7S0FBQTtDQUNIO0FBUkYsd0JBUUUifQ==
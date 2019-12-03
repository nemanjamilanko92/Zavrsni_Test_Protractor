"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class ZgradeNavBar {
    constructor() {
        this.stanovi = protractor_1.element(protractor_1.by.xpath("//a[contains(text(),'Stanovi')]"));
        this.obavestenja = protractor_1.element(protractor_1.by.xpath("//a[contains(text(),'Obavestenja')]"));
        this.predoloziTackeDnevnogReda = protractor_1.element(protractor_1.by.xpath("//a[contains(text(),'Predlozi tacke dnevnog reda')]"));
        this.sastanciSkupstine = protractor_1.element(protractor_1.by.xpath("//a[contains(text(),'Sastanci skupstine')]"));
        this.kvarovi = protractor_1.element(protractor_1.by.xpath("//a[contains(text(),'Kvarovi')]"));
    }
}
exports.ZgradeNavBar = ZgradeNavBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWmdyYWRlTmF2QmFyLnBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9wYWdlT2JqL1pncmFkYUt1Y25pU2F2ZXQvWmdyYWRlTmF2QmFyLnBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBb0c7QUFFcEcsTUFBYSxZQUFZO0lBT3ZCO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxXQUFXLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHFDQUFxQyxDQUFDLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMseUJBQXlCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHFEQUFxRCxDQUFDLENBQUMsQ0FBQztRQUN4RyxJQUFJLENBQUMsaUJBQWlCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUMsQ0FBQztRQUN2RixJQUFJLENBQUMsT0FBTyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQztDQUNGO0FBZEQsb0NBY0MifQ==
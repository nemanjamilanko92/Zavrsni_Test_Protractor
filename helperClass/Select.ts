import {browser, by, ElementFinder, element } from "protractor";
import { StanariPregledPage } from "../pageObj/stanariPregled.page"
let stanariPregledPage = new StanariPregledPage();
export class Select {
    public static async selectByIndex(index:number,dropdown:ElementFinder):Promise<any>{
     await dropdown.click()
      browser.sleep(1000)
       index = index + 1;
        console.log("Selecting element based index : "+index)
      await  dropdown.element(by.css("option:nth-child("+index+")")).click()
    }
 }
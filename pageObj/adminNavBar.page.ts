import {browser,element,by,By,ElementFinder,$, $$,protractor} from 'protractor';

export class AdminNavBarPage{
   
  public pocetnaNav:ElementFinder;
  public zgradeNav:ElementFinder;
  public stanariNav:ElementFinder;
  public institucijeNav:ElementFinder;
  public firmeNav:ElementFinder;
  public logOutBtn:ElementFinder;
  private adminEmailText:ElementFinder;
  constructor(){
    this.pocetnaNav=element(by.xpath("//a[contains(text(),'Pocetna')]"))
    this.zgradeNav=element(by.xpath("//a[@class='nav-link'][contains(text(),'Zgrade')]"))
    this.stanariNav=element(by.xpath("//a[@class='nav-link'][contains(text(),'Stanari')]"))
    this.institucijeNav=element(by.xpath("//a[@class='nav-link'][contains(text(),'Institucije')]"))
    this.firmeNav=element(by.xpath("//a[@class='nav-link'][contains(text(),'Firme')]"))
    this.logOutBtn=element(by.xpath("//button[@class='btn btn-secondary']"))
    this.adminEmailText=element(by.xpath("//label[@class='nav-link active']"))
  }
  
  public async getAdminEmailText():Promise<string> {
    let text = await this.adminEmailText.getText();
    return text.trim();
	}
}
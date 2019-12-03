import {browser,element,by,By,ElementFinder,$, $$,protractor, ElementArrayFinder} from 'protractor';

export class KvaroviPage{
  private kvarovi:ElementFinder;
  private dodaj:ElementFinder;
  private prikaziZavrseneKvarove:ElementFinder;
  private mesto:ElementFinder;
  private mestoErrMsg:ElementFinder;
  private opis:ElementFinder;
  private opisErrMsg:ElementFinder;
  private izaberiBtn:ElementFinder;
  private pretraga:ElementFinder;
  private prihvatiBtn:ElementArrayFinder;
  private odustani:ElementFinder;
  private izabraniStanar:ElementFinder;
  public submit:ElementFinder;
  private alertObavestenja:ElementFinder;
  public brisi:ElementArrayFinder;
  constructor(){
    this.kvarovi=element(by.xpath("//a[@class='nav-link active']"));
    this.dodaj=element(by.xpath("//button[@class='btn']"));
    this.prikaziZavrseneKvarove=$("input[class*='ng']");
    this.mesto=$("#mesto");
    this.mestoErrMsg=element(by.xpath("/html/body/app-root/app-zgrada/div/div[2]/app-dodaj-kvar/div/form/fieldset/div[1]/div/div"));
    this.opis=$("#opis");
    this.opisErrMsg=element(by.xpath("/html/body/app-root/app-zgrada/div/div[2]/app-dodaj-kvar/div/form/fieldset/div[2]/div/div"));
    this.izaberiBtn=$("#odgovorno_lice");
    this.pretraga=element(by.xpath("//input[@placeholder='Pretraga']"));
    this.prihvatiBtn=element.all(by.xpath("//table//button"));
    this.odustani=element(by.xpath("//button[@class='btn btn-danger']"));
    this.izabraniStanar=$("span[class*='low']");
    this.submit=$("#submit");
    this.alertObavestenja=element(by.xpath("//div[@class='toast-message ng-star-inserted']"));
    this.brisi=element.all(by.xpath("//span[contains(text(),'brisi')]"));
  }

  public async getOpisErrMsg():Promise<string> {
    let text = await this.opisErrMsg.getText();
    return text.trim();
  }

  public async getMestoErrMsg():Promise<string> {
    let text = await this.mestoErrMsg.getText();
    return text.trim();
	}
  
  public async getIzabraniStanarImePrezime():Promise<string> {
    let text = await this.izabraniStanar.getText();
    return text.trim();
  }

  public async getAlertObavestenjaMsg():Promise<string> {	  
    let text = await this.alertObavestenja.getText();
    return text.trim();
  }
  
  public async DodajKvar(mesto: string, opis: string, index: number) {
		await this.dodaj.click();
		await this.mesto.clear();
		await this.opis.clear();
		await this.mesto.sendKeys(mesto);
		await this.opis.sendKeys(opis);
		await this.opis.sendKeys(protractor.Key.TAB);
		await this.izaberiBtn.click();
		await this.prihvatiBtn.get(index).click();
		if(await this.submit.isEnabled()===true) {
      await this.submit.click();
		}
	}
	
	public async DodajKvarBezOdgovornogLica(mesto: string, opis: string, index: number) {
		await this.dodaj.click();
		await this.mesto.clear();
		await this.opis.clear();
		await this.mesto.sendKeys(mesto);
		await this.opis.sendKeys(opis);
		await this.opis.sendKeys(protractor.Key.TAB);
    if(await this.submit.isEnabled()===true) {
      await this.submit.click();
		}
  }
}
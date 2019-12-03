import {browser,element,by,By,ElementFinder,$, $$,protractor, ElementArrayFinder} from 'protractor';
let Ec = protractor.ExpectedConditions;
export class PromenaLozinkePage{
  private novaLozinka:ElementFinder;
  private potvrdaNoveLozinke:ElementFinder;
  public promeniteLozinku:ElementFinder;
  private staraLozinka:ElementFinder;
  private alertMsg:ElementFinder;
  private staraLozinkaErrMsg:ElementFinder;
  private novaLozinkaErrMsg:ElementFinder;
  private potvrdaNoveLozinkeErrMsg:ElementFinder;
  constructor(){
    this.novaLozinka=$("#novaLozinka");
    this.potvrdaNoveLozinke=$("#potvrdaNoveLozinke");
    this.promeniteLozinku=$("button.btn.btn-primary");
    this.staraLozinka=$("#staraLozinka");
    this.alertMsg=element(by.xpath("//*[@id='toast-container']/div/div"));
    this.staraLozinkaErrMsg=element(by.xpath("/html/body/app-root/app-promena-lozinke/div/form/fieldset/div[1]/div"));
    this.novaLozinkaErrMsg=element(by.xpath("/html/body/app-root/app-promena-lozinke/div/form/fieldset/div[2]/div[1]/div"));
    this.potvrdaNoveLozinkeErrMsg=element(by.xpath("/html/body/app-root/app-promena-lozinke/div/form/fieldset/div[2]/div[2]/div"));
  }

  public async getAlertMsg():Promise<string> {
    await browser.wait(Ec.visibilityOf(this.alertMsg),5000);
    let text = await this.alertMsg.getText();
    return  text.trim();
  }
  
  public async getStaraLozinkaErrMsg():Promise<string> {
    let text = await this.staraLozinkaErrMsg.getText();
    return text.trim();
  }
  
  public async getNovaLozinkaErrMsg():Promise<string> {
    let text = await this.novaLozinkaErrMsg.getText();
    return text.trim();
  }
  
  public async getPotvrdaNoveLozinkaErrMsg():Promise<string> {
    let text = await this.potvrdaNoveLozinkeErrMsg.getText();
    return text.trim();
	}
    
  public async unosLozinke(staraLozinka: string, novaLozinka: string, potvrdaNoveLozinke: string) {
    await this.staraLozinka.clear();
    await this.novaLozinka.clear();
    await this.potvrdaNoveLozinke.clear();
    await this.staraLozinka.sendKeys(staraLozinka);
    await this.novaLozinka.sendKeys(novaLozinka);
    await this.potvrdaNoveLozinke.sendKeys(potvrdaNoveLozinke);
    if(await this.promeniteLozinku.isEnabled()===true) {
       await this.promeniteLozinku.click();
    }
  }
}
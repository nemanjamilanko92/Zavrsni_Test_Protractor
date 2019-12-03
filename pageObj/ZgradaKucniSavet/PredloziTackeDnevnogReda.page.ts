import {browser,element,by,By,ElementFinder,$, $$,protractor, ElementArrayFinder} from 'protractor';
import { Select } from '../../helperClass/Select';
export class PredloziTackeDnevnogReda{

  private dodajTackuDnevnogRedaDugme:ElementFinder
  private dodajPredlogTackeDugme:ElementArrayFinder
  private dropDownSkupstina:ElementFinder
  public brisi:ElementArrayFinder
  public izmeniTackeDnevnogReda:ElementArrayFinder
  private unosIzmeneTeksta:ElementFinder
  private odustani:ElementArrayFinder
  private novaTackaDnevnogReda:ElementFinder
  public potvrdiBtn:ElementFinder
  private alertMsg:ElementFinder
  private novaDodataTackaDnevnogReda:ElementArrayFinder
  private potvrdiIzmenuTacke:ElementArrayFinder
  constructor(){
    this.dodajTackuDnevnogRedaDugme=element(by.xpath("//button[@class='btn']"));
    this.dodajPredlogTackeDugme=element.all(by.css("button[class*='btn-succ']"))
    this.dropDownSkupstina=element(by.css("[class*='custom']"))
    this.brisi=element.all(by.xpath("//span[contains(text(),'brisi')]"))
    this.izmeniTackeDnevnogReda=element.all(by.xpath("//span[contains(text(),'izmeni')]"))
    this.unosIzmeneTeksta=$("#noviTekst")
    this.odustani=element.all(by.xpath("//font[contains(text(),'odustani')]"))
    this.novaTackaDnevnogReda=$("#tekstPtdr")
    this.potvrdiBtn=element(by.css("button[class*='btn btn-pri']"))
    this.alertMsg=element(by.xpath("//*[@id=\"toast-container\"]/div"))
    this.novaDodataTackaDnevnogReda=element.all(by.xpath("//span[@class='line-breaker']"));
    this.potvrdiIzmenuTacke=element.all(by.xpath("//span[contains(text(),'potvrdi')]"))
  }
  public async getNovoDodatoOvacestenje() {
   let text =  await this.novaDodataTackaDnevnogReda.get(0).getText()
   return text.trim();
  }
  public async getAlertMsgText() {
   let text = await this.alertMsg.getText();
   return text.trim();
  }
  
	public async dodajTackuDnevnogReda(text:string) {
    await this.dodajTackuDnevnogRedaDugme.click();
    await  this.novaTackaDnevnogReda.clear();
    await this.novaTackaDnevnogReda.sendKeys(text);
    if(await this.potvrdiBtn.isEnabled()===true) {
     await  this.potvrdiBtn.click();
    }
  }

  public async IzmeniTackeDnevnogReda(text:string) {
   await this.izmeniTackeDnevnogReda.get(0).click();
   await this.unosIzmeneTeksta.sendKeys(text);
   await this.potvrdiIzmenuTacke.get(0).click();
  }
  public async dodavanjePredlogaTackeUSkupstinu(value:number,index:number) {
    await Select.selectByIndex(value,this.dropDownSkupstina)
    await this.dodajPredlogTackeDugme.get(index).click();
  }
}
  
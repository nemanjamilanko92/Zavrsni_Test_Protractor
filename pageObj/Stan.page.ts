import {browser,element,by,By,ElementFinder,$, $$,protractor, ElementArrayFinder} from 'protractor';
let Ec = protractor.ExpectedConditions;

export class Stan{
  public  postaviZaPredsednikaDugme:ElementArrayFinder;
  public  postaviZaVlasnikaDugme:ElementArrayFinder;
  public  ukloniDugme:ElementArrayFinder;
  public  dodajUStanareDugme:ElementArrayFinder;
  private  unosImePrezime:ElementFinder;
  private  filtrirajDugme:ElementFinder;
  private  alertMsg:ElementFinder;
  private  vlasnikPostavljenSuccesMsg:ElementFinder;
  private  vlasnikUklonjenSuccesMsg:ElementFinder;
  private  stanarUklonjenSuccesMsg:ElementFinder;
  private  stanarDodatSuccesMsg:ElementFinder;
  private  predsednikDodatSuccesMsg:ElementFinder;
  constructor(){
    this.postaviZaPredsednikaDugme=element.all(by.xpath("//button[contains(text(),'Postavi za predsednika')]"))
    this.postaviZaVlasnikaDugme=element.all(by.xpath("//button[contains(text(),'Postavi za vlasnika')]"))
    this.ukloniDugme=element.all(by.xpath("//button[contains(text(),'Ukloni')]"))
    this.dodajUStanareDugme=element.all(by.xpath("//button[contains(text(),'Dodaj u stanare')]"))
    this.unosImePrezime=element(by.xpath("//input[@id='filter']"))
    this.filtrirajDugme=element(by.xpath("//button[contains(text(),'Filtriraj')]"))
    this.alertMsg=element(by.xpath("//*[@id=\"toast-container\"]/div/div"))
  }

  public async getAlertMsg():Promise<String>{
    await browser.wait(Ec.visibilityOf(this.alertMsg))
    let text = await this.alertMsg.getText()
    return text.trim();
  }
}
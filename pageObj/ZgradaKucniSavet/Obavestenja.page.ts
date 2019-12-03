import {browser,element,by,By,ElementFinder,$, $$,protractor, ElementArrayFinder} from 'protractor';

export class ObavestenjaPage{
  private dodajObavestenje:ElementFinder;
  public izmeniObavestenje:ElementArrayFinder;
  public brisiObavestenje:ElementArrayFinder;
  private potvrdiIzmenu:ElementFinder;
  private odustani:ElementFinder;
  private unosIzmeneTeksta:ElementFinder;
  private alertObavestenja:ElementFinder;
  private novoObavestenje:ElementFinder;
  public potvrdiBtn:ElementFinder;
  private novoDodatoObavestenje:ElementFinder;
  constructor(){
    this.dodajObavestenje=$("#dodajObavestenje");
    this.izmeniObavestenje=element.all(by.css("#izmeniObavestenje"));
    this.brisiObavestenje=element.all(by.xpath("//span[contains(text(),'brisi')]"));
    this.potvrdiIzmenu=element(by.xpath("//span[contains(text(),'potvrdi')]"));
    this.odustani=element(by.xpath("//div[@class='container']//div[1]//div[1]//table[1]//tbody[1]//tr[3]//td[1]//span[1]//a[3]"));
    this.unosIzmeneTeksta=element(by.xpath("//*[@id=\"noviTekst\"]"));
    this.alertObavestenja=element(by.xpath("//*[@id=\"toast-container\"]/div/div"));
    this.novoObavestenje=$("#tekstObavestenja");
    this.potvrdiBtn=$("#dodajObavestenje");
    this.novoDodatoObavestenje=element(by.xpath("//div[@class='container']//div[1]//div[1]//table[1]//tbody[1]//tr[2]//td[1]//span[1]"));
  }

  public async getAlertObavestenjaMsg():Promise<string> {	  
    let text = await this.alertObavestenja.getText();
    return text.trim();
    }
    
  public async unosNovoObavestenje(value: string) {
		await this.novoObavestenje.sendKeys(value);
    }
    
  public async DodajObavestenje(text: string) {
    await this.dodajObavestenje.click();
    await this.novoObavestenje.clear();
    await this.novoObavestenje.sendKeys(text);
		if(await this.potvrdiBtn.isEnabled()===true) {
			await this.potvrdiBtn.click();
			}
    }
    
    public async getnovoDodatoObavestenje():Promise<string> {
      let text = await this.novoDodatoObavestenje.getText();
      return text.trim();
    }
    
    public async IzmeniObavestenje(text: string) {
			await this.izmeniObavestenje.get(0).click();
			await this.unosIzmeneTeksta.sendKeys(text);
			await this.potvrdiIzmenu.click();
		}
		
		public async obrisiObavestenje() {
			await this.brisiObavestenje.get(0).click();
		}
}
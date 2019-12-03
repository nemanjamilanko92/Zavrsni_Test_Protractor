import {browser,element,by,By,ElementFinder,$, $$,protractor, ElementArrayFinder} from 'protractor';

export class StanariPregledPage{
  public  prikazi:ElementFinder;
  private  filterZaPretragu:ElementFinder;
  private  pretraga:ElementFinder;
  private  imeIPrezime:ElementFinder;
  private  errMessZaNepostojecegStanara:ElementFinder;
  private  imePrezimeStanar:ElementFinder;
  constructor(){
    this.prikazi=element(by.xpath("//select[@id='prikaz']"));
    this.filterZaPretragu=element(by.xpath("//input[@id='filter']"));
    this.pretraga=element(by.xpath("//button[contains(text(),'Pretraga')]"));
    this.imeIPrezime=element(by.xpath("//a[contains(text(),'Gospodin Predsednik')]"));
    this.errMessZaNepostojecegStanara=element(by.xpath("//h2[contains(text(),'Nijedan stanar sa trazenim kriterijumom nije')]"));
    this.imePrezimeStanar=element(by.xpath("//a[contains(text(),'Slavisa1 slavkovic')]"));
  }

  public async UnosPretrage(imeIPrezime: string) {
		await this.filterZaPretragu.clear();
		await this.filterZaPretragu.sendKeys(imeIPrezime);
		await this.pretraga.click();
  }
  
  public async getImeIPrezimeStanar():Promise<string> { 
    let text = await this.imePrezimeStanar.getText();
     return text.trim();
  }

  public async getimeIPrezimeGosPred():Promise<string> { 
    let text = await this.imeIPrezime.getText();
     return text.trim();
  }
  public async geterrMessZaNepostojecegStanara():Promise<string> { 
    let text = await this.errMessZaNepostojecegStanara.getText();
     return text.trim();
  }
}
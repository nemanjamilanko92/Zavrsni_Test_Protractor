import {browser,element,by,By,ElementFinder,$, $$,protractor, ElementArrayFinder} from 'protractor';

export class ZgradePregledPage{
  private  prikazi:ElementFinder;
  private  ulicaBroj:ElementFinder;
  private  mesto:ElementFinder;
  private  pretraga:ElementFinder;
  private  adresaZgrade:ElementFinder;
  public  errMessZaNepostojecuZgradu:ElementFinder;
  constructor(){
    this.prikazi=$("#prikaz");
    this.ulicaBroj=element(by.xpath("//input[@id='ulicaBroj']"));
    this.mesto=$("#mesto");
    this.pretraga=element(by.xpath("//button[contains(text(),'Pretraga')]"));
    this.adresaZgrade=element(by.xpath("//a[contains(text(),'Marsala Tita 21, Vrbas')]"));
    this.errMessZaNepostojecuZgradu=element(by.xpath("//h2[contains(text(),'Nijedna zgrada sa trazenim kriterijumima nije')]"));
  }

  public async UnosPretrage(ulicaBroj: string, mesto: string) {
		await this.ulicaBroj.clear();
		await this.mesto.clear();
		await this.ulicaBroj.sendKeys(ulicaBroj);
		await this.mesto.sendKeys(mesto);
		await this.pretraga.click();
  }

  public async getAdresaZgradeText(){
    let text = await this.adresaZgrade.getText();
    return text.trim();
  }
  
  //metoda za potvrdu da li je stanar/zgrada uneta u bazu
	public async  proveraZgrade (ulica: string, broj: string, mesto: string):Promise<boolean>{
    let provera: string []=[];
      provera.push(ulica+" "+broj+","+ " " + mesto);
      let adrese: string []=[];
      let tableRow:ElementArrayFinder =  element.all(by.xpath("//tbody/tr"));
   
      const table_rowSize:number = await tableRow.count();
      for(let i:number = 0;i<table_rowSize;i++){
        
        let Columns_row:ElementArrayFinder=  tableRow.get(i).all(by.css("td:nth-of-type(1)"));
        let columns_count =await Columns_row.count();
        for ( let column:number = 0; column < columns_count; column++) {
            
            adrese.push(await Columns_row.get(column).getText()); 
         }        
      }
      console.log(adrese)
      const found = provera.some(r=> adrese.includes(r))
      return found;   
  }
}
import {browser,element,by,By,ElementFinder,$, $$,protractor, ElementArrayFinder} from 'protractor';

export class StanariPregledPage{
  public  prikazi:ElementFinder;
  private  filterZaPretragu:ElementFinder;
  private  pretraga:ElementFinder;
  private  errMessZaNepostojecegStanara:ElementFinder;
  private  imePrezimeStanar:ElementFinder;
  constructor(){
    this.prikazi=element(by.xpath("//select[@id='prikaz']"));
    this.filterZaPretragu=element(by.xpath("//input[@id='filter']"));
    this.pretraga=element(by.xpath("//button[contains(text(),'Pretraga')]"));
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

 
  public async geterrMessZaNepostojecegStanara():Promise<string> { 
    let text = await this.errMessZaNepostojecegStanara.getText();
     return text.trim();
  }


  public async  proveraStanara (ime: string, prezime: string, email: string):Promise<boolean>{
    let provera: string []=[];
      provera.push(ime+" "+prezime+" "+ email);
      let ImePrezime: string []=[];
      let tableRow:ElementArrayFinder =  element.all(by.xpath("//tbody/tr"));
   
      const table_rowSize:number = await tableRow.count();
      for(let i:number = 0;i<table_rowSize;i++){
        
        let Columns_row:ElementArrayFinder=  tableRow.get(i).all(by.css("td:nth-of-type(1)"));
        let columns_count =await Columns_row.count();
        for ( let column:number = 0; column < columns_count; column++) {
            
          ImePrezime.push(await Columns_row.get(column).getText()); 
         }        
      }
      console.log(ImePrezime)
      const found = provera.some(r=> ImePrezime.includes(r))
      return found;   
  }
}
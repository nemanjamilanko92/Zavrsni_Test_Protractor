import {browser,element,by,By,ElementFinder,$, $$,protractor} from 'protractor';
let Ec = protractor.ExpectedConditions;
export class ZgradeDodavanjePage{
  private  broj:ElementFinder;
  private  brojStanova:ElementFinder;
  private  mesto:ElementFinder;
  public  pregled:ElementFinder;
  public  resetujte:ElementFinder;
  private  ulica:ElementFinder;
  public  dodavanje:ElementFinder;
  public  dodajte:ElementFinder;
  private  errMessMesto:ElementFinder;
  private  errMessUlica:ElementFinder;
  private  errMessBroj:ElementFinder;
  private  errMessBrojStanova:ElementFinder;
  private  errMessBrojNula:ElementFinder;
  private  alertMsg:ElementFinder;
  constructor(){
    this.broj=$("#broj");
    this.brojStanova=$("#brojStanova");
    this.mesto=element(by.id("mesto"));
    this.pregled=element(by.css("button.btn.btn-outline-primary"));
    this.resetujte=element(by.xpath("//button[@class='btn btn-danger']"));
    this.ulica=$("#ulica");
    this.dodavanje=element(by.xpath("//li[@class='nav-item active']//button[@class='btn btn-primary']"));
    this.dodajte=element(by.xpath("//button[contains(text(),'Dodajte')]"));
    this.errMessMesto=element(by.xpath("//div[@class='row justify-content-md-center']//div[1]//div[1]//div[1]"));
    this.errMessUlica=element(by.xpath("//div[2]//div[1]//div[1]"));
    this.errMessBroj=element(by.xpath("/html/body/app-root/app-zgrade/div/app-dodaj-zgradu/div/form/fieldset/div[3]/div/div"));
    this.errMessBrojStanova=element(by.xpath("//div[4]//div[1]//div[1]"));
    this.errMessBrojNula=element(by.xpath("/html/body/app-root/app-zgrade/div/app-dodaj-zgradu/div/form/fieldset/div[3]/div/div"));
    this.alertMsg=element(by.xpath("//*[@id=\"toast-container\"]/div/div")); 
  }

  public async dodavanjeZgrade(mesto: string, ulica: string, broj: string, brojStanova: string){
    await this.mesto.clear();
    await this.ulica.clear();
    await this.broj.clear();
    await this.brojStanova.clear();
    await this.mesto.sendKeys(mesto);
    await this.ulica.sendKeys(ulica);
    await this.broj.sendKeys(broj);
    await this.brojStanova.sendKeys(brojStanova);
    await this.brojStanova.sendKeys(protractor.Key.TAB); //ovaj korak je potreban kako bi se izazvala poruka na input polju broj stanova
    if(await this.dodajte.isEnabled()===true){
      await this.dodajte.click();
    }
}

  public async unosenjeVrednostiZgrade(mesto: string, ulica: string, broj: string, brojStanova: string){
    await this.mesto.clear();
    await this.ulica.clear();
    await this.broj.clear();
    await this.brojStanova.clear();
    await this.mesto.sendKeys(mesto);
    await this.ulica.sendKeys(ulica);
    await this.broj.sendKeys(broj);
    await this.brojStanova.sendKeys(brojStanova);
    await this.resetujte.click();
  }

  public async getErrMessMesto():Promise<string> {
    return await this.errMessMesto.getText();
  }
      
  public async getErrMessUlica():Promise<string> {
    return await this.errMessUlica.getText();
  }
      
  public async getErrMessBroj():Promise<string> {
    return await this.errMessBroj.getText();
  } 

  public async getErrMessBrojStanova():Promise<string> {
    return await this.errMessBrojStanova.getText();
  } 
    
  public async getErrMessBrojNula():Promise<string> {
    return await this.errMessBrojNula.getText();
  }

  public async getAlertMsg():Promise<string> {
    await browser.wait(Ec.visibilityOf(this.alertMsg),5000);
    return await this.alertMsg.getText();
  }

  public async getUlicaInputValue():Promise<string>{
    return await this.ulica.getAttribute("value");
  }
    
  public async getBrojStanovaInputValue():Promise<string>{
    return await this.brojStanova.getAttribute("value");
  }
    
  public async getBrojInputValue():Promise<string>{
    return await this.broj.getAttribute("value");
  }
    
  public async getMestoInputValue():Promise<string>{
    return await this.mesto.getAttribute("value");
  } 
}


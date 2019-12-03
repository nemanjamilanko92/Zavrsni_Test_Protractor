import {browser,element,by,By,ElementFinder,$, $$,protractor} from 'protractor';

export class StanariDodavanjePage{
  private  email:ElementFinder;
  private  ime:ElementFinder;
  private  lozinka:ElementFinder;
  public  pregled:ElementFinder;
  private  prezime:ElementFinder;
  public  resetujte:ElementFinder;
  public  registracija:ElementFinder;
  public  registrujteBtn:ElementFinder;
  private  emailErrorMsg:ElementFinder;
  private  lozinkaErrorMsg:ElementFinder;
  private  imeErrorMsg:ElementFinder;
  private  prezimeErrorMsg:ElementFinder;
  private  uspesnoRegStanar:ElementFinder;
  constructor(){
    this.email=$("#email");
    this.ime=$("#ime");
    this.lozinka=$("#lozinka");
    this.pregled=element(by.css("button.btn.btn-outline-primary"));
    this.prezime=$("#prezime");
    this.resetujte=$("button.btn.btn-danger");
    this.registracija=element(by.xpath("//b[contains(text(),'Registracija')]"));
    this.registrujteBtn=element(by.xpath( "//button[contains(text(),'Registrujte')]"));
    this.emailErrorMsg=element(by.xpath("//div[@class='row justify-content-md-center']//div[1]//div[1]//div[1]"));
    this.lozinkaErrorMsg=element(by.xpath("//div[contains(text(),'Neispravna lozinka!')]"));
    this.imeErrorMsg=element(by.xpath("//div[3]//div[1]//div[1]"));
    this.prezimeErrorMsg=element(by.xpath("//div[4]//div[1]//div[1]"));
    this.uspesnoRegStanar=element(by.xpath("//*[@id=\"toast-container\"]/div/div"));
  }

  public async registracijaStanara(email: string, lozinka: string, ime: string, prezime: string) {
    await this.email.clear();
    await this.lozinka.clear();
    await this.ime.clear();
    await this.prezime.clear();
    await this.email.sendKeys(email);
    await this.lozinka.sendKeys(lozinka);
    await this.ime.sendKeys(ime);
    await this.prezime.sendKeys(prezime);
    await this.prezime.sendKeys(protractor.Key.TAB); //ovaj korak je potreban kako bi se izazvala poruka na input polju broj stanova
      if(await this.registrujteBtn.isEnabled()===true){
        await this.registrujteBtn.click();
      }
  }
  
  public async unosenjeVrednostiStanara(email: string, lozinka: string, ime: string, prezime: string) {
    await this.email.clear();
    await this.lozinka.clear();
    await this.ime.clear();
    await this.prezime.clear();
    await this.email.sendKeys(email);
    await this.lozinka.sendKeys(lozinka);
    await this.ime.sendKeys(ime);
    await this.prezime.sendKeys(prezime);
    await this.resetujte.click();			
  }

  public async getUspesnoRegStanarMsg():Promise<string> { 
    let text = await this.uspesnoRegStanar.getText();
     return text.trim();
  }
    
  public async getEmailInputValue():Promise<string> {
    return await this.email.getAttribute("value");
  }
      
  public async getLozinkaInputValue():Promise<string> {
    return await this.lozinka.getAttribute("value");
  }
      
  public async getImeInputValue():Promise<string> {
    return await this.ime.getAttribute("value");
  }
      
  public async getPrezimeInputValue():Promise<string> {
    return await this.prezime.getAttribute("value");
  }
  
  public async getEmailErrorMsg():Promise<string> {
    return await this.emailErrorMsg.getText();
  }
  
  public async getLozinkaErrorMsg():Promise<string> {
    return await this.lozinkaErrorMsg.getText();
  }

  public async getImeErrorMsg():Promise<string> {
    return await this.imeErrorMsg.getText();
  }

  public async getPrezimeErrorMsg():Promise<string> {
    return await this.prezimeErrorMsg.getText();
  }
}
import {browser,element,by,By,ElementFinder,$, $$,protractor} from 'protractor';

export class LoginPage{
  ExpectedConditions =  protractor.ExpectedConditions;

  private email:ElementFinder
  private lozinka:ElementFinder
  private  ulogujSeBtn:ElementFinder
  private  errorMsg:ElementFinder
  constructor(){
    this.email=$("#email")
    this.lozinka=$("#lozinka")
    this.ulogujSeBtn=element(by.xpath("//button[@class='btn btn-primary']"))
    this.errorMsg=element(by.xpath("/html/body/app-root/app-logovanje/div/form/fieldset/div[1]"))
  }

  public async logIn(email:string, lozinka:string) {
		await this.email.clear();
		await this.lozinka.clear();
		await this.email.sendKeys(email);
		await this.lozinka.sendKeys(lozinka);
		await this.ulogujSeBtn.click();
  }

  public async getErrMsgText():Promise<string> {
    let text = await this.errorMsg.getText();
    return text.trim();
	}
}



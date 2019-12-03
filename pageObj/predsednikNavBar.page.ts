import {browser,element,by,By,ElementFinder,$, $$,protractor, ElementArrayFinder, promise} from 'protractor';

export class PredsednikNavBarPage{
  private  izlogujteSe:ElementFinder;
	private  pocetna:ElementFinder;
	public  promenaLozinke:ElementFinder;
	private  emailText:ElementFinder;
	private  logOutBtn:ElementFinder;
  constructor(){
    this.izlogujteSe=$("button.btn.btn-secondary");
    this.pocetna=element(by.xpath("//a[contains(text(),'Pocetna')]"));
    this.promenaLozinke=element(by.xpath("//a[contains(text(),'Promena lozinke')]"));
    this.emailText=element(by.xpath("//label[@class='nav-link active']"));
    this.logOutBtn=element(by.xpath("//button[@class='btn btn-secondary']"));
  }

  public async getEmailText():Promise<string> {
    let text = await this.emailText.getText();
    return text.trim();
	}
}
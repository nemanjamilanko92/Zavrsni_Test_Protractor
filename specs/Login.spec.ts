import { browser, element,by,By } from "protractor"
import{LoginPage} from "../pageObj/login.page"
import using = require("jasmine-data-provider");
import dataProviderZaLoginpage from '../DataProvider/data';
import { AdminNavBarPage } from "../pageObj/adminNavBar.page";
describe('testiranje Logovanja',()=>{
  //instanciranje objekata
  let loginPage:LoginPage;
  let adminNavBarPage:AdminNavBarPage;
  beforeAll(async()=>{
    adminNavBarPage=new AdminNavBarPage();
    loginPage=new LoginPage();
    //odlazimo na stranicu za logovanje
    await browser.get("http://localhost:8080/logovanje");
  })

  describe("Pozitivni testovi",()=>{
  //za ove testove koristimo data provider (../DataProvider/data)
  using(dataProviderZaLoginpage.dataProviderZaLoginpage,(podaci,opis)=>{
  it(`Negativni Login Testovi ${opis}}`,async()=>{

    //unosimo pogresne podatke za logovanje
    //ocekujemo razlicite poruke za neuspesno logovanje u zavisnosti od prosledjenih podataka

    await loginPage.logIn(podaci.email,podaci.lozinka);
    expect(await loginPage.getErrMsgText()).toBe(podaci.poruka);
  })
})
})

  describe("Negativni testovi",()=>{

  it('Pozitivan Login Test',async()=>{

    //unosimo ocekivane podatke za logovanje
    //ocekujemo da cemo na pocetnoj stranici procitati mail ulogovanog korsinika

    await loginPage.logIn("admin@gmail.com", "Bar5slova");
    expect(await adminNavBarPage.getAdminEmailText()).toBe("admin@gmail.com");
  })
})
})
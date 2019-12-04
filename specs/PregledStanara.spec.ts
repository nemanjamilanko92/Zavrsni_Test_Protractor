import { browser, element,by,By } from "protractor"
import {LoginPage} from "../pageObj/login.page"
import { AdminNavBarPage } from "../pageObj/adminNavBar.page";
import { StanariDodavanjePage } from "../pageObj/stanariDodavanje.page";
import { StanariPregledPage } from "../pageObj/stanariPregled.page";
describe('testiranje Dodavanja Zgrade',()=>{

  let loginPage:LoginPage;
  let adminNavBarPage:AdminNavBarPage;
  let stanariDodavanjePage:StanariDodavanjePage;
  let stanariPregledPage:StanariPregledPage;
  beforeAll(async()=>{
    //instanciranje objekata
    adminNavBarPage=new AdminNavBarPage();
    loginPage=new LoginPage();
    stanariDodavanjePage=new StanariDodavanjePage();
    stanariPregledPage=new StanariPregledPage();
    //odlazimo na stranicu za logovanje
    await browser.get("http://localhost:8080/logovanje");
    //logujemo se kao admin
    await loginPage.logIn("admin@gmail.com", "Bar5slova");
    //navigujemo na stranicu pregleda stanara
    await adminNavBarPage.stanariNav.click();
    await stanariDodavanjePage.pregled.click();
  })

  describe("Pozitivni testovi",()=>{

  it("Pozitivan Test Pretrage Stanara 1",async()=>{

    //u polje za pretragu stanara unosimo ime i prezime stanara
    //ocekujemo da ce se stanar pojaviti u filtriranoj listi
   
    await stanariPregledPage.UnosPretrage("Marko")
    expect(await stanariPregledPage.proveraStanara("Marko", "Markovic", "(marko@gmail.com)")).toBeTruthy()

  })

  it("Pozitivan Test Pretrage Stanara 2",async()=>{

    //u polje za pretragu stanara unosimo mail stanara
    //ocekujemo da ce se stanar pojaviti u filtriranoj listi
    await stanariPregledPage.UnosPretrage("predSkup@gmail.com")
    expect(await stanariPregledPage.proveraStanara("Gospodin", "Predsednik", "(predSkup@gmail.com)")).toBeTruthy()
    
  })

  it("Pozitivan Test Pretrage Stanara 3",async()=>{

    //u polje za pretragu stanara unosimo nepostojeceg stanara (nasumicni text)
    //ocekujemo poruku da ni jedan stanar nije pronadjen

    await stanariPregledPage.UnosPretrage("AAAAAAAAA")
    expect(await stanariPregledPage.geterrMessZaNepostojecegStanara()).toBe("Nijedan stanar sa trazenim kriterijumom nije prondajen!");
  })
})  
})
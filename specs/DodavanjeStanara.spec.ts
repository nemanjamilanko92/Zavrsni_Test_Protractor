import { browser, element,by,By } from "protractor"
import {LoginPage} from "../pageObj/login.page"
import { AdminNavBarPage } from "../pageObj/adminNavBar.page";
import { StanariDodavanjePage } from "../pageObj/stanariDodavanje.page";
import { StanariPregledPage } from "../pageObj/stanariPregled.page";
import { Select } from "../helperClass/Select";
describe('testiranje Dodavanja Stanara',()=>{
  let select:Select;
  let loginPage:LoginPage;
  let adminNavBarPage:AdminNavBarPage;
  let stanariDodavanjePage:StanariDodavanjePage;
  let stanariPregledPage:StanariPregledPage;
  beforeAll(async()=>{
    //instanciranje objekata
    select=new Select();
    adminNavBarPage=new AdminNavBarPage();
    loginPage=new LoginPage();
    stanariDodavanjePage=new StanariDodavanjePage();
    stanariPregledPage=new StanariPregledPage();
    //odlazimo na stranicu za logovanje
    await browser.get("http://localhost:8080/logovanje");
    //logujemo se kao admin
    await loginPage.logIn("admin@gmail.com", "Bar5slova");
    //navigujemo na stranicu stanari
    await adminNavBarPage.stanariNav.click();
  })
  describe("Pozitivni testovi",()=>{

  it('Pozitivni Test Dodavanja Stanara',async()=>{
//test
//asdsad
    //unosimo stanara sa ocekivanim kredencijalima
    //ocekujemo poruku o uspesnom dodavanju
    //zatim proveravamo da li je stanar stvarno unesen u listu stanara

    await stanariDodavanjePage.registracijaStanara("nesto12@nesto.com", "Nesto5", "Slavisa1", "slavkovic");
    expect(await stanariDodavanjePage.getUspesnoRegStanarMsg()).toBe("Uspesno ste registrovali stanara!");
    await stanariDodavanjePage.pregled.click();
    await Select.selectByIndex(3,stanariPregledPage.prikazi);
    expect(await stanariPregledPage.getImeIPrezimeStanar()).toBe("Slavisa1 slavkovic");
    await stanariDodavanjePage.registracija.click()
  
  })

  it('Pozitivni Test Reset Dugme',async()=>{

    //unosimo podatke za kreiranje stanara i zatim klikcemo na reset dugme
    //ocekujemo da su sve forme za unos prazne
    
    await stanariDodavanjePage.unosenjeVrednostiStanara("nesto12@nesto.com", "Nesto5", "Slavisa1", "slavkovic");
    expect(await stanariDodavanjePage.getEmailInputValue()).toBe("");
    expect(await stanariDodavanjePage.getLozinkaInputValue()).toBe("");
    expect(await stanariDodavanjePage.getImeInputValue()).toBe("");
    expect(await stanariDodavanjePage.getPrezimeInputValue()).toBe("");
  })
})
  describe("Negativni testovi",()=>{

  it('Negativan Test Dodavanja Istog Stanara',async()=>{

  //unosimo vec postojeceg stanara u listu
  //ocekujemo poruku da je mail adresa stanara vec zauzeta

  await stanariDodavanjePage.registracija.click();
  await stanariDodavanjePage.registracijaStanara("nesto12@nesto.com", "Nesto5", "Slavisa1", "slavkovic");
  expect(await stanariDodavanjePage.getUspesnoRegStanarMsg()).toBe("E-mail adresa: nesto12@nesto.com je zauzeta!");
  })

  it('Negativni Test Dodavanja Stanara 1',async()=>{

    //unosimo podatke za kreiranje stanara sa losom formom za email
    //ocekujemo poruku greske za unos email-a

    await stanariDodavanjePage.registracijaStanara("nesto12", "Nesto5", "Slavisa1", "slavkovic");
    expect(await stanariDodavanjePage.getEmailErrorMsg()).toBe("Neispravna email adresa!");
  })

  it('Negativni Test Dodavanja Stanara 2',async()=>{

    //unosimo podatke za kreiranje stanara sa losom formom za lozinku
    //ocekujemo poruku greske za unos lozinke

    await stanariDodavanjePage.registracijaStanara("nesto12@nesto.com", "a", "Slavisa1", "slavkovic");
    expect(await stanariDodavanjePage.getLozinkaErrorMsg()).toBe("Neispravna lozinka!");
  })

  it('Negativni Test Dodavanja Stanara 3',async()=>{

    //podatke za kreiranje stanara ostavljamo praznim
    //ocekujemo da je dugme za potvrdu kreiranja stanara onemoguceno

    await stanariDodavanjePage.registracijaStanara("", "", "", "");
    expect(await stanariDodavanjePage.registrujteBtn.isEnabled()).toBeFalsy();
  })
})
})
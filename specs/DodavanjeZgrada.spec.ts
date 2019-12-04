import { browser, element,by,By } from "protractor"
import{LoginPage} from "../pageObj/login.page"
import { AdminNavBarPage } from "../pageObj/adminNavBar.page";
import { ZgradeDodavanjePage } from "../pageObj/zgradeDodavanje.page";
import { ZgradePregledPage } from "../pageObj/zgradePregled.page";
describe('testiranje Dodavanja Zgrade',()=>{
  let loginPage:LoginPage;
  let adminNavBarPage:AdminNavBarPage;
  let zgradeDodavanjePage:ZgradeDodavanjePage;
  let zgradePregledPage:ZgradePregledPage;
  beforeAll(async()=>{
    //instanciranje objekata
    adminNavBarPage=new AdminNavBarPage();
    loginPage=new LoginPage();
    zgradeDodavanjePage=new ZgradeDodavanjePage();
    zgradePregledPage=new ZgradePregledPage();
    //odlazimo na stranicu za logovanje
    await browser.get("http://localhost:8080/logovanje");
    //logujemo se kao admin
    await loginPage.logIn("admin@gmail.com", "Bar5slova");
    //navigujemo na stranicu zgrade
    await adminNavBarPage.zgradeNav.click();
  })

  describe("Pozitivni testovi",()=>{

  it('Pozitivni Test Dodavanja Zgrade',async()=>{

    //unosimo zgradu sa ocekivanim podacima
    //ocekujemo poruku o uspesnom dodavanju
    //zatim proveravamo da li je zgrada stvarno unesena u listu zgrada

    await zgradeDodavanjePage.dodavanjeZgrade("Vrbas", "Marsala Tita", "21", "1");
    expect(await zgradeDodavanjePage.getAlertMsg()).toBe("Uspesno ste dodali zgradu!");
    await zgradeDodavanjePage.pregled.click();
   await zgradePregledPage.proveraZgrade("Marsala Tita", "21", "Vrbas")
    expect(await zgradePregledPage.getAdresaZgradeText()).toBe("Marsala Tita 21, Vrbas");
  })

  it('Pozitivni Test Reset Dugme',async()=>{

    //unosimo podatke za kreiranje zgrade i zatim klikcemo na reset dugme
    //ocekujemo da su sve forme za unos prazne

    await adminNavBarPage.zgradeNav.click();
    await zgradeDodavanjePage.unosenjeVrednostiZgrade("Vrbas", "Marsala Tita", "21", "1");
    expect(await zgradeDodavanjePage.getBrojInputValue()).toBe("");
    expect(await zgradeDodavanjePage.getMestoInputValue()).toBe("");
    expect(await zgradeDodavanjePage.getBrojStanovaInputValue()).toBe("");
    expect(await zgradeDodavanjePage.getUlicaInputValue()).toBe("");
  })
})
  describe("Negativni testovi",()=>{

  it('Negativni Test Ista Adresa Zgrade',async()=>{

    //unosimo vec postojecu zgradu u listu
    //ocekujemo poruku Vec postoji zgrada na toj adresi!
    
    await zgradeDodavanjePage.dodavanjeZgrade("Vrbas", "Marsala Tita", "21", "1");
    expect(await zgradeDodavanjePage.getAlertMsg()).toBe("Vec postoji zgrada na toj adresi!");
  })


  it('Negativan Test Dodavanja Zgrade 1',async()=>{

    //unosimo podatke za kreiranje zgrade sa nulom za broj zgrade i stanova
    //ocekujemo poruku greske za unos

    await zgradeDodavanjePage.dodavanjeZgrade("a","a","0","0");
    expect(await zgradeDodavanjePage.getErrMessBrojNula()).toBe("Broj mora biti pozitivan!");
    expect(await zgradeDodavanjePage.getErrMessBrojStanova()).toBe("Broj mora biti pozitivan!");
  })
  
  it('Negativan Test Dodavanja Zgrade 2',async()=>{

    //podatke za kreiranje zgrade ostavljamo praznim
    //ocekujemo da je dugme za potvrdu kreiranja zgrade onemoguceno

    await zgradeDodavanjePage.dodavanjeZgrade("","","","");
    expect(await zgradeDodavanjePage.dodajte.isEnabled()).toBeFalsy();
  })

  it('Negativan Test Dodavanja Zgrade 3',async()=>{

    //unosimo podatke za kreiranje stanara sa stringom umesto intidzera za broj zgrade i stanova
    //ocekujemo poruku greske za unos

    await browser.refresh();
    await zgradeDodavanjePage.dodavanjeZgrade("a","a","a","a");
    expect(await zgradeDodavanjePage.getErrMessBroj()).toBe("Ovo polje ne sme biti prazno!");
    expect(await zgradeDodavanjePage.getErrMessBrojStanova()).toBe("Ovo polje ne sme biti prazno!");
  })
})
})
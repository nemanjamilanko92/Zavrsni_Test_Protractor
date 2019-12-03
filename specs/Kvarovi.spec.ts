import { browser, element,by,By } from "protractor"
import{LoginPage} from "../pageObj/login.page"
import { ZgradeNavBar } from "../pageObj/ZgradaKucniSavet/ZgradeNavBar.page";
import { KvaroviPage } from "../pageObj/ZgradaKucniSavet/Kvarovi.page";
import { async } from "q";
describe('testiranje Dodavanja Kvara',()=>{
  let loginPage:LoginPage;
  let kvaroviPage:KvaroviPage;
  let zgradeNavBar:ZgradeNavBar;
  beforeAll(async()=>{
    //instanciranje objekata
    loginPage=new LoginPage();
    kvaroviPage = new KvaroviPage();
    zgradeNavBar = new ZgradeNavBar();
    //odlazimo na stranicu za logovanje
    await browser.get("http://localhost:8080/logovanje");
    //logujemo se kao predsednik skupstine
    await loginPage.logIn("predSkup@gmail.com", "Bar5slova");
    //navigujemo na stranicu kvarovi
    await browser.get("http://localhost:8080/zgrada/1/kvarovi");
  })

  describe("Pozitivni testovi",()=>{

  it('Dodavanje Kvara Pozitivan',async()=>{

    //unosimo kvar sa ocekivanim podacima i unosimo odgovorno lice
    //ocekujemo poruku o uspesnom dodavanju

    await kvaroviPage.DodajKvar("a","a",0);
    expect(await kvaroviPage.getAlertObavestenjaMsg()).toBe("Kvar uspesno dodat")
  })

  it('Dodavanje Kvara Pozitivan Bez Odgovornog Lica',async()=>{

    //unosimo kvar sa ocekivanim podacima, ali izostavljamo odgovorno lice
    //ocekujemo poruku o uspesnom dodavanju

    await zgradeNavBar.kvarovi.click();
    await kvaroviPage.DodajKvarBezOdgovornogLica("a","a",0);
    expect(await kvaroviPage.getAlertObavestenjaMsg()).toBe("Kvar uspesno dodat")
  })

  it('Brisanje Kvara Pozitivan',async()=>{

    //klickemo na dugme za brisanje kvara
    //ocekujemo poruku o uspesnom brisanju kvara

    await zgradeNavBar.kvarovi.click();
    await kvaroviPage.brisi.get(0).click();
    expect(await kvaroviPage.getAlertObavestenjaMsg()).toBe("Uspesno izbrisan kvar");
  })
})

  describe("Negativni testovi",()=>{

  it('Dodavanje Kvara Negativan 1',async()=>{

    //podatke za kreiranje kvara ostavljamo praznim
    //ocekujemo poruku greske za unos kao i da je dugme za potvrdu kreiranja kvara onemoguceno

    await zgradeNavBar.kvarovi.click();
    await kvaroviPage.DodajKvar("","",0);
    expect(await kvaroviPage.getMestoErrMsg()).toBe("Ovo polje ne sme biti prazno!");
    expect(await kvaroviPage.getOpisErrMsg()).toBe("Ovo polje ne sme biti prazno!");
    expect(await kvaroviPage.submit.isEnabled()).toBeFalsy;
  })

  it('Dodavanje Kvara Negativan 2',async()=>{

    //unosimo podatke za kreiranje kvara gde opis kvara otavljamo prazan
    //ocekujemo poruku greske za unos kao i da je dugme za potvrdu kreiranja kvara onemoguceno

    await zgradeNavBar.kvarovi.click();
    await kvaroviPage.DodajKvar("a","",0);
    expect(await kvaroviPage.getOpisErrMsg()).toBe("Ovo polje ne sme biti prazno!");
    expect(await kvaroviPage.submit.isEnabled()).toBeFalsy;
  })

  it('Dodavanje Kvara Negativan 3',async()=>{

    //unosimo podatke za kreiranje kvara gde mesto kvara otavljamo prazan
    //ocekujemo poruku greske za unos kao i da je dugme za potvrdu kreiranja kvara onemoguceno

    await zgradeNavBar.kvarovi.click();
    await kvaroviPage.DodajKvar("","a",0);
    expect(await kvaroviPage.getMestoErrMsg()).toBe("Ovo polje ne sme biti prazno!");
    expect(await kvaroviPage.submit.isEnabled()).toBeFalsy;
  })
})
})
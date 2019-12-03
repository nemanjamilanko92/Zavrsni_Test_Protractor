import { browser, element,by,By } from "protractor"
import{LoginPage} from "../pageObj/login.page"
import { ObavestenjaPage } from "../pageObj/ZgradaKucniSavet/Obavestenja.page";
import { async } from "q";
import { ZgradeNavBar } from "../pageObj/ZgradaKucniSavet/ZgradeNavBar.page";
describe('testiranje Dodavanja Obavestenja',()=>{
  let loginPage:LoginPage;
  let obavestenjaPage:ObavestenjaPage;
  let zgradeNavBar:ZgradeNavBar;
  beforeAll(async()=>{
    //instanciranje objekata
    loginPage=new LoginPage();
    obavestenjaPage = new ObavestenjaPage();
    zgradeNavBar = new ZgradeNavBar();
    //odlazimo na stranicu za logovanje
    await browser.get("http://localhost:8080/logovanje");
    //logujemo se kao predsednik skupstine
    await loginPage.logIn("predSkup@gmail.com", "Bar5slova");
    //navigujemo na stranicu obavestenja
    await browser.get("http://localhost:8080/zgrada/1/obavestenja");
  })

  describe("Pozitivni testovi",()=>{

  it('Dodavanje Obavestenja Pozitivan',async()=>{

    //unosimo obavestenje sa ocekivanim podacima
    //ocekujemo poruku o uspesnom dodavanju
    //zatim proveravamo da li je obavestenje stvarno uneseno u listu obavestenja

    await obavestenjaPage.DodajObavestenje("aaaaaaaaaaaaaa");
    expect(await obavestenjaPage.getAlertObavestenjaMsg()).toBe("Obavestenje uspesno dodato!");
    await zgradeNavBar.obavestenja.click();
    expect(await obavestenjaPage.getnovoDodatoObavestenje()).toBe("aaaaaaaaaaaaaa");
  })

  it('Izmeni Obavestenje Pozitivan',async()=>{

    //klikcemo na dugme za izmenu obavestenja
    //dodajemo izmenu u obavestenje
    //ocekujemo poruku o uspesnoj promeni obavestenja i proveravamo da je text stvarno izmenjen

    await zgradeNavBar.obavestenja.click();
    await obavestenjaPage.IzmeniObavestenje("krrrv");
    expect(await obavestenjaPage.getAlertObavestenjaMsg()).toBe("Uspesno izmenjeno obavestenje");
    expect(await obavestenjaPage.getnovoDodatoObavestenje()).toBe("aaaaaaaaaaaaaakrrrv");
  })

  it('Obrisi Obavestenje Pozitivan',async()=>{

    //klikcemo na dugme za brisanje obavestenja
    //ocekujemo poruku o uspesnom brisanju obavestenja

    await obavestenjaPage.obrisiObavestenje();
    expect(await obavestenjaPage.getAlertObavestenjaMsg()).toBe("Uspesno izbrisano obavestenje");
  })
})

  describe("Negativni testovi",()=>{

  it('Dodavanje Obavestenja Negativan',async()=>{

    //formu za unos novog obavestenja ostavljamo praznim
    //ocekujemo da je dugme za potvrdu pravljenja obavestenja onemoguceno

    await obavestenjaPage.DodajObavestenje("");
    expect(await obavestenjaPage.potvrdiBtn.isEnabled()).toBeFalsy;  
  })
})
})
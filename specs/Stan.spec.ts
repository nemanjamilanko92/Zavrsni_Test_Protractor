import { browser, element,by,By, ExpectedConditions ,protractor} from "protractor"
import{LoginPage} from "../pageObj/login.page"
import { Stan } from "../pageObj/Stan.page";

describe('testiranje Funkcionalnosti Stana',()=>{
  let loginPage:LoginPage;
  let stan:Stan
  beforeAll(async()=>{
    //instanciranje objekata
    loginPage=new LoginPage();
    stan = new Stan();
    //odlazimo na stranicu za logovanje
    await browser.get("http://localhost:8080/logovanje");
    //logujemo se kao admin
    await loginPage.logIn("admin@gmail.com", "Bar5slova");
    //navigujemo na stranicu stana
    await browser.get("http://localhost:8080/stan/1");
  })
  //DA BI OVAJ TEST FUNKCIONISAO POTREBNO JE DA SU SVI VLASNICI I STANRI UKLONJENI IZ LISTE STANARA I VLASNIKA
  describe("Pozitivni testovi",()=>{

  it("Postavljanje Vlasnika Pozitivan",async()=>{

    //klikcemo na dugme za postavljanje vlasnika stana
    //ocekujemo poruku o uspesnom dodavanju vlasnika

    await stan.postaviZaVlasnikaDugme.get(0).click();
    expect(await stan.getAlertMsg()).toBe("Uspesno ste postavili vlasnika!")
  })

  it("Uklanjanje Vlasnika Pozitivan",async()=>{

    //klikcemo na dugme za brisanje vlasnika stana
    //ocekujemo poruku o uspesnom brisanju vlasnika

    await stan.ukloniDugme.get(0).click();
    expect(await stan.getAlertMsg()).toBe("Uspesno ste uklonili vlasnika!")
  })
    
  it("Dodavanje Stanara Pozitivan",async()=>{

    //klikcemo na dugme za dodavanje stanara
    //ocekujemo poruku o uspesnom dodavanja stanara

    await stan.dodajUStanareDugme.get(0).click();
    expect(await stan.getAlertMsg()).toBe("Uspesno ste dodali stanara!")
  })

  it("Postavi Za Predsednika Pozitivan",async()=>{

    //klikcemo na dugme za dodavanje predsednika zgrade
    //ocekujemo poruku o uspesnom dodavanja predsednika

    await stan.postaviZaPredsednikaDugme.get(0).click();
    expect(await stan.getAlertMsg()).toBe("Uspesno ste postavili predsednika zgrade!")
  }) 
    
  it("Uklanjanje Stanara Pozitivan",async()=>{

    //klikcemo na dugme za uklanjanje stanara
    //ocekujemo poruku o uspesnom uklanjanju stanara

    await stan.ukloniDugme.get(0).click();
    expect(await stan.getAlertMsg()).toBe("Uspesno ste uklonili stanara!")
  })
}) 
})
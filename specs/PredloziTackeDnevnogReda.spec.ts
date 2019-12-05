import { browser, element, by, By } from "protractor"
import { LoginPage } from "../pageObj/login.page"
import { ZgradeNavBar } from "../pageObj/ZgradaKucniSavet/ZgradeNavBar.page"
import { PredloziTackeDnevnogReda } from "../pageObj/ZgradaKucniSavet/PredloziTackeDnevnogReda.page"
import { async } from "q";

describe('testiranje Dodavanja Tacke Dnevnog Reda', () => {
  let loginPage: LoginPage;
  let zgradeNavBar: ZgradeNavBar
  let predloziTackeDnevnogReda: PredloziTackeDnevnogReda
  beforeAll(async () => {
    //instanciranje objekata
    predloziTackeDnevnogReda = new PredloziTackeDnevnogReda();
    zgradeNavBar = new ZgradeNavBar();
    loginPage = new LoginPage();
    //odlazimo na stranicu za logovanje
    await browser.get("http://localhost:8080/logovanje");
    //logujemo se kao predsednik skupstine
    await loginPage.logIn("predSkup@gmail.com", "Bar5slova");
    //navigujemo na stranicu tacaka dnevnog reda
    await browser.get("http://localhost:8080/zgrada/1/tacke"); 
  })

  describe("Pozitivni testovi",()=>{

  it('Dodavanje Tacke Dnevnog Reda Pozitivan', async () => {

    //unosimo tacku dnevog reda sa ocekivanim podacima
    //ocekujemo poruku o uspesnom dodavanju
    //zatim proveravamo da li je tacka dnevog reda stvarno unesena u listu

    await predloziTackeDnevnogReda.dodajTackuDnevnogReda("aaaaaa");
    expect(await predloziTackeDnevnogReda.getAlertMsgText()).toBe("Predlog tacke dnevnog reda uspesno dodat")
    await zgradeNavBar.predoloziTackeDnevnogReda.click()
    expect(await predloziTackeDnevnogReda.getNovoDodatoOvacestenje()).toBe("aaaaaa")
  })
  
  it('Imena Tacke Dnevnog Reda Pozitivan', async () => {

    // klikcemo na dugme za izmenu tacke dnevnog reda
    //dodajemo izmenu u tacku dnevnog reda
    //ocekujemo poruku o uspesnoj promeni tacke dnevnog reda i proveravamo da je text stvarno izmenjen
    
    await zgradeNavBar.predoloziTackeDnevnogReda.click();
    await predloziTackeDnevnogReda.IzmeniTackeDnevnogReda("haha");
    expect(await predloziTackeDnevnogReda.getAlertMsgText()).toBe("Tacka uspesno izmenjena");
    expect(await predloziTackeDnevnogReda.getNovoDodatoOvacestenje()).toBe("aaaaaahaha")
  })

  it('Brisanje Tacke Dnevnog Reda Pozitivan', async () => {

    //klickemo na dugme za brisanje kvara
    //ocekujemo poruku o uspesnom brisanju kvara

    await predloziTackeDnevnogReda.brisi.get(0).click()
    expect(await predloziTackeDnevnogReda.getAlertMsgText()).toBe("Tacka uspesno izbrisana");
  })

  it('Dodavanje Predloga Tacke U Skupstinu Pozitivan', async () => {

    //na dropdown listi biramo skupstinu u koju zelimo da prosledimo tacku
    //klikcemo na dugme za dodavanje tacke u skupstinu

    await browser.refresh();
    await predloziTackeDnevnogReda.dodavanjePredlogaTackeUSkupstinu(1,0)
    expect(await predloziTackeDnevnogReda.getAlertMsgText()).toBe("Tacka uspesno dodata u skupstinu");
  })
})
  describe("Negativni testovi",()=>{

  it('Dodavanje Tacke Dnevnog Reda Negativan', async () => {

    //pri kreiranju nove tacke dnevnog reda formu za unos ostavljamo prazno
    //ocekujemo da je dugme za kreiranje tacke neaktivno

    await predloziTackeDnevnogReda.dodajTackuDnevnogReda("");
    expect(predloziTackeDnevnogReda.potvrdiBtn.isEnabled()).toBeTruthy();
  })
})
})

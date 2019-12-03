import { browser, element,by,By, ExpectedConditions ,protractor} from "protractor"
import{LoginPage} from "../pageObj/login.page"
import { PromenaLozinkePage } from "../pageObj/PromenaLozinke.page";
import { PredsednikNavBarPage } from "../pageObj/predsednikNavBar.page";
describe('testiranje Promene Lozinke',()=>{
  let loginPage:LoginPage;
  let promenaLozinkePage:PromenaLozinkePage;
  let predsednikNavBar:PredsednikNavBarPage;
 
  beforeAll(async()=>{
    //instanciranje objekata
    loginPage=new LoginPage();
    promenaLozinkePage=new PromenaLozinkePage();
    predsednikNavBar=new PredsednikNavBarPage();
    //odlazimo na stranicu za logovanje
    await browser.get("http://localhost:8080/logovanje");
    //logujemo se kao predsednik skupstine
    await loginPage.logIn("predSkup@gmail.com", "Bar5slova");
    //navigujemo na stranicu za promenu lozinke
    await predsednikNavBar.promenaLozinke.click();
  })

  describe("Pozitivni testovi",()=>{

  it('Promena Lozinke Pozitivan',async()=>{

    //unosimo podatke u formu za promenu lozinke
    //ocekujemo poruku da je lozinka uspesno promenjena i da smo prebaceni na stranicu za logovanje

    await promenaLozinkePage.unosLozinke("Bar5slova", "Bar6slova", "Bar6slova");
    expect(await promenaLozinkePage.getAlertMsg()).toBe("Lozinka uspesno izmenjena!");
    expect(await browser.getCurrentUrl()).toBe("http://localhost:8080/logovanje");
  })

  it('Potvrda Da Je Lozinka Promenjana',async()=>{

    //logujemo se sa novom lozinkom kako bi potvrdili da je lozinka stvarno promenjena
    //ocekujemo da cemo procitati mail ulogovanog korisnika

    await loginPage.logIn("predSkup@gmail.com","Bar6slova")
    expect(await predsednikNavBar.getEmailText()).toBe("predSkup@gmail.com");
  })
}) 

  describe("Negativni testovi",()=>{

  it('Promena Lozinke Negativan 1',async()=>{

    //formu za promenu lozinke ostavljamo praznu
    //ocekujemo poruku greske za unos 

    await predsednikNavBar.promenaLozinke.click();
    await promenaLozinkePage.unosLozinke("","","");
    expect(await promenaLozinkePage.getStaraLozinkaErrMsg()).toBe("Ovo polje je obavezno!");
    expect(await promenaLozinkePage.getNovaLozinkaErrMsg()).toBe("Ovo polje je obavezno!");
  })

  it('Promena Lozinke Negativan 2',async()=>{

    //unosimo podatke za promenu lozinke gde potvrdu nove lozinke otavljamo prazanom
    //ocekujemo poruku greske za unos

    await promenaLozinkePage.unosLozinke("a","grb","");
    expect(await promenaLozinkePage.getNovaLozinkaErrMsg()).toBe("Neispravna lozinka! Pogledajte napomenu.");
    expect(await promenaLozinkePage.getPotvrdaNoveLozinkaErrMsg()).toBe("Lozinke se ne poklapaju!");
  })  

  it('Promena Lozinke Negativan 3',async()=>{

    //unosimo podatke za promenu lozinke gde u potvrdu nove lozinke unosimo staru
    //ocekujemo poruku greske za unos

    await promenaLozinkePage.unosLozinke("Bar6slova","Bar5slova","Bar6slova");
    expect(await promenaLozinkePage.getPotvrdaNoveLozinkaErrMsg()).toBe("Lozinke se ne poklapaju!");
  })  

  it('Promena Lozinke Negativan 4',async()=>{

    //unosimo podatke za promenu lozinke gde u novu lozinku i potvrdu unosimo pogresne podatke (nedostaje veliko slovo)
    //ocekujemo poruku greske za unos

    await promenaLozinkePage.unosLozinke("Bar5slova","bar6slova","bar6slova");
    expect(await promenaLozinkePage.getNovaLozinkaErrMsg()).toBe("Neispravna lozinka! Pogledajte napomenu.");
  }) 

  it('Promena Lozinke Negativan 5',async()=>{

    //unosimo podatke za promenu lozinke gde u staru lozinku unosimo pogresne podatke
    //ocekujemo poruku greske za unos

    await promenaLozinkePage.unosLozinke("a","Bar5slova","Bar5slova");
    await promenaLozinkePage.promeniteLozinku.click();
    expect(await promenaLozinkePage.getAlertMsg()).toBe("Lozinka nije validnog formata (Mora biti bar jedno veliko slovo, veliko malo slovo i broj i minimalne duzine 6)!");
  })  
})
})
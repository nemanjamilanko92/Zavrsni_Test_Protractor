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
    //navigujemo na stranicu pregleda zgrada
    await adminNavBarPage.zgradeNav.click();
    await zgradeDodavanjePage.pregled.click();
  })

  describe("Pozitivni testovi",()=>{

  it('Pozitivni Test Pretrage Zgrade 1',async()=>{

    //u polja za pretragu zgrada unosimo adresu i mesto zgrade
    //ocekujemo da ce se zgrada pojaviti u filtriranoj listi

    await zgradePregledPage.UnosPretrage("Marsala Tita", "Vrbas");
    expect(await zgradePregledPage.getAdresaZgradeText()).toBe("Marsala Tita 21, Vrbas");
  })

  it('Pozitivni Test Pretrage Zgrade 2',async()=>{

    //u polje za pretragu zgrada unosimo samo adresu zgrade
    //ocekujemo da ce se zgrada pojaviti u filtriranoj listi

    await zgradePregledPage.UnosPretrage("Marsala Tita", "");
    expect(await zgradePregledPage.getAdresaZgradeText()).toBe("Marsala Tita 21, Vrbas");
  })

  it('Pozitivni Test Pretrage Zgrade 3',async()=>{

    //u polje za pretragu zgrada unosimo samo mesto zgrade
    //ocekujemo da ce se zgrada pojaviti u filtriranoj listi

    await zgradePregledPage.UnosPretrage("", "Vrbas");
    expect(await zgradePregledPage.getAdresaZgradeText()).toBe("Marsala Tita 21, Vrbas");
  })

  it('Pozitivni Test Pretrage Zgrade 4',async()=>{

    //u polje za pretragu zgrade unosimo nepostojecu zgradu (nasumicni text)
    //ocekujemo poruku da ni jedna zgrada nije pronadjena

    await zgradePregledPage.UnosPretrage("AAAAAA", "AAAAAA");
    expect(await zgradePregledPage.errMessZaNepostojecuZgradu.getText()).toBe("Nijedna zgrada sa trazenim kriterijumima nije prondajena!");
  })
})
})
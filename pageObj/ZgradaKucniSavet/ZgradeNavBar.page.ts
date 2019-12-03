import {browser,element,by,By,ElementFinder,$, $$,protractor, ElementArrayFinder} from 'protractor';

export class ZgradeNavBar{

  public stanovi:ElementFinder
  public obavestenja:ElementFinder
  public predoloziTackeDnevnogReda:ElementFinder
  public sastanciSkupstine:ElementFinder
  public kvarovi:ElementFinder
  constructor() {
    this.stanovi=element(by.xpath("//a[contains(text(),'Stanovi')]"));
    this.obavestenja=element(by.xpath("//a[contains(text(),'Obavestenja')]"));
    this.predoloziTackeDnevnogReda=element(by.xpath("//a[contains(text(),'Predlozi tacke dnevnog reda')]"));
    this.sastanciSkupstine=element(by.xpath("//a[contains(text(),'Sastanci skupstine')]"));
    this.kvarovi=element(by.xpath("//a[contains(text(),'Kvarovi')]"));
  }
}
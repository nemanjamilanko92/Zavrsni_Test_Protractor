import {browser,element,by,By,ElementFinder,$, $$,protractor, ElementArrayFinder} from 'protractor';

export class StanoviPage{

 public vlasnikIstanari:ElementArrayFinder
  constructor(){
    this.vlasnikIstanari=element.all(by.css("a[class*='btn-primary']"));
  }
}
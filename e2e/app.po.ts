import { browser, by, element } from 'protractor';

export class AdvancedAngularPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('aa-root h1')).getText();
  }
}

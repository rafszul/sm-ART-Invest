import { browser, element, by } from 'protractor';

export class SmArtInvestPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('smart-root h1')).getText();
  }
}

import { SmArtInvestPage } from './app.po';

describe('sm-art-invest App', () => {
  let page: SmArtInvestPage;

  beforeEach(() => {
    page = new SmArtInvestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('smart works!');
  });
});

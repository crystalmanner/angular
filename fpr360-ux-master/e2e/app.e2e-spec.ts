import { ChargebackPage } from './app.po';

describe('chargeback App', () => {
  let page: ChargebackPage;

  beforeEach(() => {
    page = new ChargebackPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

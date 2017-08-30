import { Angular2HighchartsPage } from './app.po';

describe('angular2-highcharts App', () => {
  let page: Angular2HighchartsPage;

  beforeEach(() => {
    page = new Angular2HighchartsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

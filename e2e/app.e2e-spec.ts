import { Cmr3Page } from './app.po';

describe('cmr3 App', function() {
  let page: Cmr3Page;

  beforeEach(() => {
    page = new Cmr3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

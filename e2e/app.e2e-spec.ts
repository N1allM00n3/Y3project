import { Y3projectPage } from './app.po';

describe('y3project App', function() {
  let page: Y3projectPage;

  beforeEach(() => {
    page = new Y3projectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import nightmare from 'nightmare';

describe('When visit the homepage', () => {
  it('welcomes the user', async () => {
    window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;
    let page = nightmare().goto('http://localhost:3000');

    let text = await page.evaluate(() => document.body.textContent).end();

    expect(text).toContain('Tinknetica Blog');
  });
});

describe('When visit the post edit page', () => {
  let preparedPage;

  beforeEach(() => {
    window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;
    preparedPage = nightmare()
      .goto('http://localhost:3000')
      .click('a[href="/post/1"]')
      .wait('.item:last-child')
  });

  it('should create comment', async () => {
    let page = preparedPage
      .insert('input[name="text"]', 'Hello Mary-Lu!')
      .insert('input[name="phone"]', '5551234567')
      .click('input.button[type="submit"]')
      .wait('.item:last-child');

    let selector = await page.evaluate(() => document.querySelector(
      'div.comments > .item:last-child').innerHTML
    ).end();

    expect(selector).toContain('Hello Mary-Lu!');
  });

  it('should validate text presence', async () => {
    let page = preparedPage
      .insert('input[name="text"]', '')
      .insert('input[name="phone"]', '5551234567')

    let selector = await page.evaluate(() => document.querySelector(
      'div.create-comment').innerHTML
    ).end();

    expect(selector).toContain('Should be longer then 5 symbols!');
  });

  it('should validate phone presence', async () => {
    let page = preparedPage
      .insert('input[name="text"]', 'Hello Mary-Lu')
      .insert('input[name="phone"]', '')

    let selector = await page.evaluate(() => document.querySelector(
      'div.create-comment').innerHTML
    ).end();

    expect(selector).toContain('Required!');
  });
});

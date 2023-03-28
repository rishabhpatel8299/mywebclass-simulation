const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  // Replace with the URL of your website
  await page.goto('http://localhost:3000');
});

test('1. Valid page title', async ({ page }) => {
  const title = await page.title();
  expect(title).toBe('MyWebClass.org');
});

test('2. Presence of meta tags', async ({ page }) => {
  const keywords = await page.$eval('meta[name="keywords"]', el => el.content);
  const description = await page.$eval('meta[name="description"]', el => el.content);
  expect(keywords).toBeTruthy();
  expect(description).toBeTruthy();
});

test('3. Presence of favicon', async ({ page }) => {
  const favicon = await page.$('link[rel="icon"]');
  expect(favicon).toBeTruthy();
});

test('4. Presence of navigation bar', async ({ page }) => {
  const navbar = await page.$('nav.navbar');
  expect(navbar).toBeTruthy();
});

test('5. Presence of all navigation links', async ({ page }) => {
  const navLinks = await page.$$eval('ul.navbar-nav > li > a', links =>
    links.map(link => link.getAttribute('href'))
  );
  const expectedLinks = [
    'index.html',
    'aboutus.html',
    'articles-git.html',
    'terms.html',
  ];
  expectedLinks.forEach(link => expect(navLinks).toContain(link));
});

test('6. Presence of main content', async ({ page }) => {
  const main = await page.$('main');
  expect(main).toBeTruthy();
});

test('7. Presence of Welcome heading', async ({ page }) => {
  const welcomeHeading = await page.$('h1.display-4');
  expect(welcomeHeading).toBeTruthy();
});

test('8. Presence of Why choose section', async ({ page }) => {
  const whyChooseSection = await page.$('h2:has-text("Why choose MyWebClass.org ?")');
  expect(whyChooseSection).toBeTruthy();
});

test('9. Presence of Featured Articles section', async ({ page }) => {
  const featuredArticlesSection = await page.$('h2:has-text("Featured Articles")');
  expect(featuredArticlesSection).toBeTruthy();
});

test('10. Presence of Start Learning Today heading', async ({ page }) => {
  const heading = await page.textContent('h1:has-text("Start Learning Today")');
  expect(heading).toBeTruthy();
});

test('11. Presence of sign-up form', async ({ page }) => {
  const form = await page.locator('form');
  expect(await form.isVisible()).toBeTruthy();
});

test('12. Presence of email input field in sign-up form', async ({ page }) => {
  const emailInput = await page.locator('input[type="email"]');
  expect(await emailInput.isVisible()).toBeTruthy();
});

test('13. Presence of password input field in sign-up form', async ({ page }) => {
  const passwordInput = await page.locator('input[type="password"]');
  expect(await passwordInput.isVisible()).toBeTruthy();
});

test('14. Presence of remember me checkbox in sign-up form', async ({ page }) => {
  const checkbox = await page.locator('input[type="checkbox"]');
  expect(await checkbox.isVisible()).toBeTruthy();
});

test('15. Presence of sign-up button in sign-up form', async ({ page }) => {
  const signUpButton = await page.locator('button:has-text("Sign up")');
  expect(await signUpButton.isVisible()).toBeTruthy();
});

 test('16. Presence of 3 featured articles', async ({ page }) => {
    const articles = await page.locator('.card');
    expect(await articles.count()).toBe(3);
  });

  test('17. Presence of Testing, Pytests, Playwright Tests article', async ({ page }) => {
    const testingArticle = await page.locator('a.watchHidme1');
    expect(await testingArticle.isVisible()).toBeTruthy();
  });

  test('18. Presence of Project Management article', async ({ page }) => {
    const projectManagementArticle = await page.locator('a.watchHidme2');
    expect(await projectManagementArticle.isVisible()).toBeTruthy();
  });

   test('19. Bootstrap CSS is loaded', async ({ page }) => {
    const bootstrapCSS = await page.locator('link[href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"]');
    expect(await bootstrapCSS.getAttribute('rel')).toBe('stylesheet');
  });

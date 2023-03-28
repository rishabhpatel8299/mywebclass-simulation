const { test, expect } = require('@playwright/test');

test.describe('Articles Page - Pytests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/articles-test.html');
  });

  test('1. Page load', async ({ page }) => {
  const title = await page.title();
  expect(title).toBe('Mywebclass | Article Testing');
});

test('2. Home link', async ({ page }) => {
  const homeLink = await page.$('a[href="index.html"]');
  const homeText = await homeLink.textContent();
  expect(homeText).toBe('Home');
});

test('3. About Us link', async ({ page }) => {
  const aboutLink = await page.$('a[href="aboutus.html"]');
  const aboutText = await aboutLink.textContent();
  expect(aboutText).toBe('About Us');
});

test('4. Articles link', async ({ page }) => {
  const articlesLink = await page.$('a[href="articles-git.html"]');
  const articlesText = await articlesLink.textContent();
  expect(articlesText).toBe('Articles');
});

test('5. Terms & Policy link', async ({ page }) => {
  const termsLink = await page.$('a[href="terms.html"]');
  const termsText = await termsLink.textContent();
  expect(termsText).toBe('Terms & Policy');
});

test('6. Navbar toggler', async ({ page }) => {
  const toggler = await page.$('.navbar-toggler');
  expect(toggler).toBeTruthy();
});

});
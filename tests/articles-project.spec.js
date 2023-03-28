const { test, expect } = require('@playwright/test');

test.describe('Articles Page - Project Management', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/articles-project.html');
  });

  test('1. Page title is correct', async ({ page }) => {
    expect(await page.title()).toBe('Mywebclass | Article - Project Management');
  });

  test('2. Navigation bar is visible', async ({ page }) => {
    const navbar = await page.locator('nav.navbar');
    expect(await navbar.isVisible()).toBe(true);
  });

  test('3. Meta description is correct', async ({ page }) => {
    const description = await page.locator('meta[name="description"]');
    expect(await description.getAttribute('content')).toBe(' Discover the benefits of Agile project management and how it differs from traditional project management. Learn about the iterative approach, continuous improvement, customer collaboration, and flexibility that makes Agile project management so effective in delivering higher-quality products, faster time to market, and increased customer satisfaction');
  });

  test('4. Meta keywords are correct', async ({ page }) => {
    const keywords = await page.locator('meta[name="keywords"]');
    expect(await keywords.getAttribute('content')).toBe('Agile project management, iterative approach, continuous improvement, customer collaboration, traditional project management, flexibility, higher-quality products, faster time to market, customer satisfaction');
  });

  test('5. Bootstrap CSS is loaded', async ({ page }) => {
    const bootstrapCSS = await page.locator('link[href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"]');
    expect(await bootstrapCSS.getAttribute('rel')).toBe('stylesheet');
  });

  test('6. Navbar-toggler button is visible on mobile view', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 }); // iPhone X dimensions
    const navbarToggler = await page.locator('.navbar-toggler');
    expect(await navbarToggler.isVisible()).toBe(true);
  });

  test('7. Article title is correct', async ({ page }) => {
    const articleTitle = await page.locator('h2.fw-bold.lh-1');
    expect(await articleTitle.textContent()).toBe('Project Management - Agile');
  });

});
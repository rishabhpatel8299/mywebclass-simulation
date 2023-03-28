const { test, expect } = require('@playwright/test');

test.describe('Articles Page - Git', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/articles-git.html');
  });

  test('1. Page title is correct', async ({ page }) => {
    expect(await page.title()).toBe('Mywebclass | Article Git, Git Actions');
  });

  test('3. Navigation bar is visible', async ({ page }) => {
    const navbar = await page.locator('nav.navbar');
    expect(await navbar.isVisible()).toBe(true);
  });


  test('4. Meta description is correct', async ({ page }) => {
    const description = await page.locator('meta[name="description"]');
    expect(await description.getAttribute('content')).toBe('Discover the power of Git, GitActions, and GitHub in software development. Learn about the benefits of version control, collaboration, and code hosting with Git, along with the automation of tasks like testing and deployment with GitActions. Explore the features of GitHub that enable teams to collaborate on projects effectively. Find out how these tools can revolutionize your software development projects.');
  });

  test('5. Meta keywords are correct', async ({ page }) => {
    const keywords = await page.locator('meta[name="keywords"]');
    expect(await keywords.getAttribute('content')).toBe(' Git, GitActions, GitHub, version control system, collaboration, code hosting, automation, testing, deployment, software development.');
  });

  test('6. Bootstrap CSS is loaded', async ({ page }) => {
    const bootstrapCSS = await page.locator('link[href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"]');
    expect(await bootstrapCSS.getAttribute('rel')).toBe('stylesheet');
  });

  test('7. Navbar-toggler button is visible on mobile view', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 }); // iPhone X dimensions
    const navbarToggler = await page.locator('.navbar-toggler');
    expect(await navbarToggler.isVisible()).toBe(true);
  });

  test('8. Footer is present and visible', async ({ page }) => {
    const footer = await page.locator('footer');
    expect(await footer.isVisible()).toBe(true);
  });

});
const { test, expect } = require('@playwright/test');

test.describe('Terms and Policy page', () => {

  test.beforeEach(async ({ page }) => {
    // Navigate to the page before each test
    await page.goto('http://localhost:3000/terms.html');
  });

  test('1. Page title is correct', async ({ page }) => {
    const pageTitle = await page.title();
    expect(pageTitle).toBe('Mywebclass | Terms & Policy');
  });

  test('2. Presence of navbar', async ({ page }) => {
    const navbar = await page.locator('nav.navbar');
    expect(await navbar.isVisible()).toBeTruthy();
  });

  test('3. Navbar contains correct links', async ({ page }) => {
    const links = [
      { text: 'Home', href: 'index.html' },
      { text: 'About Us', href: 'aboutus.html' },
      { text: 'Articles', href: 'articles-git.html' },
      { text: 'Terms & Policy', href: 'terms.html' },
    ];

    for (const link of links) {
      const navbarLink = await page.locator(`nav.navbar a:has-text("${link.text}")`);
      expect(await navbarLink.getAttribute('href')).toBe(link.href);
    }
  });

  test('4. Presence of Terms of use heading', async ({ page }) => {
    const termsHeading = await page.locator('h3:has-text("Terms of use")');
    expect(await termsHeading.isVisible()).toBeTruthy();
  });

  test('5. Presence of Privacy Policy heading', async ({ page }) => {
    const privacyHeading = await page.locator('h3:has-text("Privacy Policy")');
    expect(await privacyHeading.isVisible()).toBeTruthy();
  });

  test('6. Presence of contact email', async ({ page }) => {
    const contactEmail = await page.locator('p:has-text("contact@mywebclass.org")');
    expect(await contactEmail.isVisible()).toBeTruthy();
  });

  test('7. Presence of footer', async ({ page }) => {
    const footer = await page.locator('footer');
    expect(await footer.isVisible()).toBeTruthy();
  });

  test('8. Footer copyright text is correct', async ({ page }) => {
    const copyrightText = await page.locator('p:has-text("© 2023 Mywebclass.org")');
    expect(await copyrightText.isVisible()).toBeTruthy();
  });

  test('9. Meta description is correct', async ({ page }) => {
    const metaDescription = await page.locator('meta[name="description"]');
    const content = await metaDescription.getAttribute('content');
    expect(content).toContain('Welcome to mywebclass.org! Read our terms of use and privacy policy');
  });

  test('10. Meta keywords are correct', async ({ page }) => {
    const metaKeywords = await page.locator('meta[name="keywords"]');
    const content = await metaKeywords.getAttribute('content');
    const keywords = content.split(', ');
    const expectedKeywords = [
      'mywebclass.org', 'terms of use', 'intellectual property', 'user conduct', 'disclaimer',
      'limitation of liability', 'governing law', 'privacy policy', 'personal information',
      'security measures', 'service providers'
    ];
    expect(keywords).toEqual(expectedKeywords);
  });

    test('11. Bootstrap CSS is loaded', async ({ page }) => {
    const bootstrapCSS = await page.locator('link[href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"]');
    expect(await bootstrapCSS.getAttribute('rel')).toBe('stylesheet');
  });

});
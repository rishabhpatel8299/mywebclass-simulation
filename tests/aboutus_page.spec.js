const { test, expect } = require('@playwright/test');

test.describe('About Us Page', () => {

  test.beforeEach(async ({ page }) => {
    // Navigate to the About Us page
    await page.goto('http://localhost:3000/aboutus.html');
  });

  test('1. Page title is correct', async ({ page }) => {
    const title = await page.title();
    expect(title).toBe('Mywebclass.org - Building a Community for Success in the Software Industry');
  });

  test('2. Meta keywords are correct', async ({ page }) => {
    const metaKeywords = await page.locator('meta[name="keywords"]');
    const content = await metaKeywords.getAttribute('content');
    const keywords = content.split(', ');
    const expectedKeywords = [
      'mywebclass', 'software industry', 'education', 'hands-on learning', 'community',
      'inclusivity', 'efficiency', 'dependability', 'Keith Williams', 'University Lecturer',
      'NJIT', 'k-12 education', 'technology', 'skills development'
    ];
    expect(keywords).toEqual(expectedKeywords);
  });

  test('3. Meta description is correct', async ({ page }) => {
    const metaDescription = await page.locator('meta[name="description"]');
    const content = await metaDescription.getAttribute('content');
    expect(content).toContain('At Mywebclass.org, we are committed to creating a welcoming and supportive community of students and teachers dedicated to helping people of all ages and backgrounds succeed in the modern software industry. Our values of people, learning, efficiency, and dependability guide our mission to provide practical, hands-on educational opportunities and a stable platform for collaboration.');
  });

  test('4. "About Us" navigation link is active', async ({ page }) => {
    const activeNavLink = await page.locator('nav .nav-link.active');
    expect(await activeNavLink.textContent()).toBe('About Us');
  });

  test('5. Footer contains correct copyright text', async ({ page }) => {
    const copyright = await page.locator('footer .col-md-4.text-muted');
    expect(await copyright.textContent()).toBe('© 2023 Mywebclass.org');
  });

    test('6. Bootstrap CSS is loaded', async ({ page }) => {
    const bootstrapCSS = await page.locator('link[href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"]');
    expect(await bootstrapCSS.getAttribute('rel')).toBe('stylesheet');
  });

});
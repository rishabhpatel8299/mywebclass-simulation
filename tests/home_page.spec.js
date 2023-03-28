const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  // Replace with the URL of your website
  await page.goto('http://localhost:3000');
});

test('1. Valid page title', async ({ page }) => {
  const title = await page.title();
  expect(title).toBe('MyWebClass.org');
});
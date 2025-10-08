import { test, expect } from '@playwright/test';

test('Visit WSG from header link, check WSG link in full text has text of heading in viewport', async ({ page }) => {
  test.slow();
  await page.goto('https://wsg-o-matic.com/');
  await expect(page).toHaveTitle("Get a Sustainable Guideline (WSG)");
  await page.getByRole('button', { name: 'Open Random Guideline' }).click();
  await expect(page.getByText(/Guideline:/)).toBeVisible();
  const regexMatch = await page.locator('h2 > a');
  let trimmedRegexMatch = await regexMatch.textContent();
  // Log Guideline Name
  console.log(await regexMatch.textContent());
  // Click Guideline Title H2
  await page.locator('h2 > a').click();
  // Check Title of WSGs
  await expect(page).toHaveTitle("Web Sustainability Guidelines (WSG)");
  // Temporary manual explicit wait for the WSG
  await page.waitForTimeout(3000);
  // Look for Heading with Guideline name on WSG Document
  // Trim Text Content from beginning to remove Guideline:
  await expect(page.getByRole('heading', { name: trimmedRegexMatch.slice(11) })).toBeInViewport();
});
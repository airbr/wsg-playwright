import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://wsg-o-matic.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Get a Sustainable Guideline (WSG)");
});

test('Guideline seems to load', async ({ page }) => {
  await page.goto('https://wsg-o-matic.com/');

  // Click the get started link.
  await page.getByRole('button', { name: 'Open Random Guideline' }).click();

  await expect(page.getByText('Want another? get a random')).toBeVisible();

});

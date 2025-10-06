import { test, expect } from '@playwright/test';

test('has title and heading', async ({ page }) => {
  await page.goto('https://wsg-o-matic.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Get a Sustainable Guideline (WSG)");

  await expect(page.getByRole('heading', { name: 'WSG-o-matic: a resource about' })).toBeVisible();
});

test('Guideline seems to load', async ({ page }) => {
  await page.goto('https://wsg-o-matic.com/');

  await page.getByRole('button', { name: 'Open Random Guideline' }).click();

  await expect(page.getByText('Want another? get a random')).toBeVisible();
});

test('Runs successfully when enter key pressed down on big button', async ({ page }) => {
  await page.goto('https://wsg-o-matic.com/');

  await page.getByRole('button', { name: 'Open Random Guideline' }).press('Enter', { delay: 1500 });
});
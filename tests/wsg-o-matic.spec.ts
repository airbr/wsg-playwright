import { test, expect } from '@playwright/test';

test('Has page title and H1 heading', async ({ page }) => {
  await page.goto('https://wsg-o-matic.com/');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Get a Sustainable Guideline (WSG)");
  await expect(page.getByRole('heading', { name: 'WSG-o-matic: a resource about' })).toBeVisible();
});

test('Guideline seems to load', async ({ page }) => {
  await page.goto('https://wsg-o-matic.com/');
  await page.getByRole('button', { name: 'Open Random Guideline' }).click();
  await expect(page.getByText('Want another? get a random')).toBeVisible();
  await expect(page.getByText(/Guideline:/)).toBeVisible();
});

test('No errors after multiple attempts', async ({ page }) => {
  await page.goto('https://wsg-o-matic.com/');

  let errors: Array<string> = [];
  page.on('pageerror', exception => {
    errors.push(exception.message);
  });
  if (errors.length != 0) {
    console.log(errors); 
  }
  await page.getByRole('button', { name: 'Open Random Guideline' }).press('Enter', { delay: 1500 });
  await page.getByRole('button', { name: 'Open Random Guideline' }).press('Enter', { delay: 1500 });
  await page.getByRole('button', { name: 'Open Random Guideline' }).press('Enter', { delay: 1500 });
  await page.getByRole('button', { name: 'Open Random Guideline' }).press('Enter', { delay: 1500 });
  await page.getByRole('button', { name: 'Open Random Guideline' }).press('Enter', { delay: 1500 });
  // Wait to finish
  await page.waitForTimeout(1000);
});
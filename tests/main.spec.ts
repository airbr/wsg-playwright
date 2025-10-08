import { test, expect } from '@playwright/test';

test('Main Test: Confirm title & h1, load initial guideline, re-run 4 times without error', async ({ page }) => {
  await page.goto('https://wsg-o-matic.com/');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Get a Sustainable Guideline (WSG)");
  // Confirm page loaded heading title
  await expect(page.getByRole('heading', { name: 'WSG-o-matic: a resource about' })).toBeVisible();
  // Confirm Credit is given where due
  await expect(page.getByText("This is an educational resource project demo made by Morgan Murrah including the draft Web Sustainability Guidelines, making use of the JSON API. Click \"Open Random Guideline\" to get a draft guideline in full to display. All credit to all the contributors, this work is intended to help educate.")).toBeVisible();
  // Click Button for Random Guidleine, get content visible loaded from JSON
  await page.getByRole('button', { name: 'Open Random Guideline' }).click();
  // This should mean that the guideline loaded if this is visible
  await expect(page.getByText('Want another? get a random')).toBeVisible();
  // Extra confirm the guideline link is visible
  await expect(page.getByText(/Guideline:/)).toBeVisible();
  // A guideline should have loaded by now properly. Lets try it several times.
  // Set up the error counter
  let errors: Array<string> = [];
  page.on('pageerror', exception => {
    errors.push(exception.message);
  });
  if (errors.length != 0) {
    console.log(errors); 
  }
  // Re-run the random button four times with delay
  await page.getByRole('button', { name: 'Open Random Guideline' }).press('Enter', { delay: 1500 });
  await page.getByRole('button', { name: 'Open Random Guideline' }).press('Enter', { delay: 1500 });
  await page.getByRole('button', { name: 'Open Random Guideline' }).press('Enter', { delay: 1500 });
  await page.getByRole('button', { name: 'Open Random Guideline' }).press('Enter', { delay: 1500 });
  // Small wait
  await page.waitForTimeout(300);
  // Confirm there were no errors accrued
  expect(errors.length == 0);
});
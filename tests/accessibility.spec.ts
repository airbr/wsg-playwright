import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('accessibility', () => { 
  test('Initial load has no automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('https://wsg-o-matic.com/');

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 

    expect(accessibilityScanResults.violations).toEqual([]);
  });
  test('After loading guideline has no automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('https://wsg-o-matic.com/');
    await page.getByRole('button', { name: 'Open Random Guideline' }).click();
    // Small wait
    await page.waitForTimeout(300);
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 

    expect(accessibilityScanResults.violations).toEqual([]); 
  });
});
# WSG Playwright Tests

This repository contains Playwright tests for the WSG (Web Sustainability Guidelines) demo site wsg-o-matic (https://wsg-o-matic.com/).

Contents
- `tests/wsg-o-matic.spec.ts` - Basic smoke tests that verify the landing page title, H1 visibility, that a random guideline loads, and repeated interactions don't produce page errors.
- `tests/wsg-outlinks.spec.ts` - A test that opens a random guideline, navigates to the WSG document for that guideline, and asserts the guideline heading is visible in the viewport.
- `playwright.config.ts` - Playwright configuration (browsers, timeouts, projects). (Already present in the repo.)
- `package.json` - Minimal project manifest with devDependencies on `@playwright/test`.

Prerequisites
- Node.js (v16 or later recommended)
- npm or yarn

Quick setup

1. Install dependencies

```bash
# Using npm
npm install

# If you prefer yarn
# yarn
```

2. (Optional) Install Playwright browsers

Playwright manages browser binaries separately from the npm package. To ensure browsers are installed run:

```bash
npx playwright install
```

Run tests

Run the full test suite with Playwright Test:

```bash
npx playwright test
```

Run a single test file

```bash
npx playwright test tests/wsg-o-matic.spec.ts
```

Show an interactive test run (headed) for debugging

```bash
npx playwright test --headed --project=chromium
```

Run with the Playwright test reporter GUI

```bash
npx playwright show-report
```

Tips & Notes
- The repository uses the `@playwright/test` runner. If you want to add scripts to `package.json` to simplify running tests, you can add, for example:

```json
"scripts": {
  "test": "playwright test",
  "test:headed": "playwright test --headed",
  "report": "playwright show-report"
}
```

- Tests open the live site at `https://wsg-o-matic.com/`. If you need to run against a local copy, update `tests/*.spec.ts` to point to your local URL or configure `baseURL` in `playwright.config.ts`.

- Some tests use small explicit waits (e.g. `page.waitForTimeout(3000)`) — these were added to allow the WSG document to load. If flaky, consider replacing explicit waits with proper waits for elements or network idle conditions.

Troubleshooting
- If tests fail with missing browser errors, run `npx playwright install`.
- If TypeScript type errors appear, ensure `@types/node` and Playwright types are installed (they are in devDependencies). You can also run `npx playwright codegen` to generate sample scripts.
- If tests are flaky due to timing, increase timeouts in `playwright.config.ts` or use Playwright built-in waitFor* utilities.

Contributing
- Add tests under `tests/` using the Playwright Test API.
- Keep tests focused and prepared for the random design of wsg-o-matic.

Acknowledgements
- Playwright — end-to-end testing framework by Microsoft.

## Screenshot:

<img alt="Screenshot 2025-10-07 at 00-28-45 Playwright Test Report" src="https://github.com/user-attachments/assets/2b3a0448-2134-4cc9-aaf5-4c3bcb53e9fa" />

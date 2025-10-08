# WSG Playwright Tests - A dash of randomness

This repository contains experimental Playwright tests for the WSG (Web Sustainability Guidelines) demo site wsg-o-matic (https://wsg-o-matic.com/). It is intended to be fun and interesting.

Contents
- `tests/main.spec.ts` - A single test intended to verify for a given device that the landing page title, H1 visibility, that a random guideline loads, and repeated interactions don't produce page errors.
- `tests/outlinks.spec.ts` - A single test that opens a random guideline, navigates to the WSG document for that guideline, and asserts the guideline heading is visible in the viewport.
- `tests/accessibility.spec.ts` - Basic programmatic accessibility testing, before loading a guideline and afterwards.
- `playwright.config.ts` - Playwright configuration (browsers, timeouts, projects).
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
npx playwright test main
```

Show an interactive test run (headed) for debugging

```bash
npx playwright test --headed --project=chromium
```

Run with the Playwright test reporter GUI

```bash
npx playwright show-report
```

Troubleshooting
- If tests fail with missing browser errors, run `npx playwright install`.
- If TypeScript type errors appear, ensure `@types/node` and Playwright types are installed (they are in devDependencies). You can also run `npx playwright codegen` to generate sample scripts.
- If tests are flaky due to timing, increase timeouts in `playwright.config.ts` or use Playwright built-in waitFor* utilities.

Contributing
- Add tests under `tests/` using the Playwright Test API.
- Keep tests focused and prepared for the random design of wsg-o-matic.

Acknowledgements
- Playwright — end-to-end testing framework by Microsoft.
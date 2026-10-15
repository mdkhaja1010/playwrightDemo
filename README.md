# playwrightDemo

## Jenkins

The root `Jenkinsfile` runs the `@regression` Playwright tests against QA (`ENV=qa`),
installs Chromium and its Linux dependencies, then generates an Allure HTML report
in the post-build action. The Allure results, generated report, Playwright report,
and test results are archived even when the test stage fails.

Run this pipeline on a Linux Jenkins agent with Node.js and npm installed. The
agent must be able to install Playwright's Linux browser dependencies. The QA
environment is loaded from `testdata/qa.env` by `playwright.config.ts`.
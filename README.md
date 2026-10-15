# playwrightDemo

## Jenkins

The root `Jenkinsfile` runs the `@regression` Playwright tests against QA (`ENV=qa`)
on a Windows Jenkins agent, installs Chromium, then generates an Allure HTML report
in the post-build action. The Allure results, generated report, Playwright report,
and test results are archived even when the test stage fails.

Run this pipeline on a Windows Jenkins agent with Node.js and npm installed. The
QA environment is loaded from `testdata/qa.env` by `playwright.config.ts`.
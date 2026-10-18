# Practice Test Automation Login — Standard QA Test Plan

## Application Overview

Application under test: https://practicetestautomation.com/practice-test-login/. Scope includes the login form, authentication outcome, login validation messages, successful-login page, and logout. Documented valid credentials are username `student` and password `Password123`. Assumptions: each test starts in a fresh browser context on the login page unless a step explicitly describes a prior action; network access is available; the application is a public practice site. Expected invalid credential messages observed/documented by the page are `Your username is invalid!` and `Your password is invalid!`. For empty and unusual input, expected behavior is no unauthorized authentication and clear, usable validation; record actual wording if the app differs. Test plan includes positive, negative, boundary, accessibility/interaction, and recovery coverage.

## Test Scenarios

### 1. Positive Functional Scenarios

**Seed:** `tests\seed.spec.ts`

#### 1.1. Successful login with documented credentials

**File:** `test-plans\practice-test-login-test-plan.md`

**Steps:**
  1. Assumption: begin from a fresh browser context. Navigate to https://practicetestautomation.com/practice-test-login/.
    - expect: The login page loads with Username and Password fields and a Submit button.
  2. Enter `student` in Username and `Password123` in Password.
    - expect: Username is entered in its field; password characters are masked.
  3. Submit the form.
    - expect: The browser navigates to a URL containing `/logged-in-successfully/`.
    - expect: A successful-login confirmation is displayed.
    - expect: A Log out link is available.

#### 1.2. Logout returns to the login page

**File:** `test-plans\practice-test-login-test-plan.md`

**Steps:**
  1. Assumption: begin from a fresh browser context. Log in with `student` / `Password123`.
    - expect: The successful-login page and Log out link are displayed.
  2. Click Log out.
    - expect: The login page is displayed again with its login form available.
    - expect: The authenticated success page is no longer displayed.

#### 1.3. Submit valid login with Enter key

**File:** `test-plans\practice-test-login-test-plan.md`

**Steps:**
  1. Assumption: begin from a fresh browser context. Open the login page and enter `student` and `Password123` in their respective fields.
    - expect: The credentials are in the correct fields.
  2. Focus the Password field and press Enter.
    - expect: The login form submits and the successful-login page is displayed with a Log out link.

#### 1.4. Recover from invalid login with valid credentials

**File:** `test-plans\practice-test-login-test-plan.md`

**Steps:**
  1. Assumption: begin from a fresh browser context. Submit `incorrectUser` with `Password123`.
    - expect: The login page remains open and displays `Your username is invalid!`.
  2. Replace the credentials with `student` and `Password123`, then submit again.
    - expect: The valid attempt succeeds and the success page is displayed.
    - expect: The previous validation error does not remain as the current outcome.

### 2. Negative Functional Scenarios

**Seed:** `tests\seed.spec.ts`

#### 2.1. Reject invalid username

**File:** `test-plans\practice-test-login-test-plan.md`

**Steps:**
  1. Assumption: begin from a fresh browser context. Enter `incorrectUser` as username and the valid password `Password123`.
    - expect: Both values are entered in the correct fields.
  2. Submit the form.
    - expect: Authentication is rejected and the login page remains displayed.
    - expect: The message `Your username is invalid!` is shown.
    - expect: The successful-login page and Log out link are not shown.

#### 2.2. Reject invalid password

**File:** `test-plans\practice-test-login-test-plan.md`

**Steps:**
  1. Assumption: begin from a fresh browser context. Enter the valid username `student` and an invalid password such as `incorrectPassword`.
    - expect: Both values are entered in the correct fields.
  2. Submit the form.
    - expect: Authentication is rejected and the login page remains displayed.
    - expect: The message `Your password is invalid!` is shown.
    - expect: The successful-login page and Log out link are not shown.

#### 2.3. Reject blank username and password

**File:** `test-plans\practice-test-login-test-plan.md`

**Steps:**
  1. Assumption: begin from a fresh browser context. Leave both login fields blank.
    - expect: The login page is displayed and both fields are empty.
  2. Submit the form.
    - expect: The user is not authenticated or redirected to the success page.
    - expect: A clear validation response is displayed and the page remains usable.

#### 2.4. Reject missing username

**File:** `test-plans\practice-test-login-test-plan.md`

**Steps:**
  1. Assumption: begin from a fresh browser context. Leave Username blank and enter `Password123` in Password.
    - expect: Username is empty; password has the valid documented value.
  2. Submit the form.
    - expect: Authentication is rejected and the success page is not shown.
    - expect: The invalid-username validation response is displayed.

#### 2.5. Reject missing password

**File:** `test-plans\practice-test-login-test-plan.md`

**Steps:**
  1. Assumption: begin from a fresh browser context. Enter `student` in Username and leave Password blank.
    - expect: Username contains the valid documented value; password is empty.
  2. Submit the form.
    - expect: Authentication is rejected and the success page is not shown.
    - expect: The invalid-password validation response is displayed.

#### 2.6. Reject incorrect credentials in both fields

**File:** `test-plans\practice-test-login-test-plan.md`

**Steps:**
  1. Assumption: begin from a fresh browser context. Enter a nonexistent username and an incorrect password.
    - expect: Both values are entered and neither is a documented valid credential.
  2. Submit the form.
    - expect: Authentication is rejected; the user remains on the login page and no authenticated content is exposed.
    - expect: A clear invalid-credentials message is displayed.

### 3. Edge Cases and Usability

**Seed:** `tests\seed.spec.ts`

#### 3.1. Whitespace around credentials does not grant unintended access

**File:** `test-plans\practice-test-login-test-plan.md`

**Steps:**
  1. Assumption: begin from a fresh browser context. Enter ` student ` (including leading and trailing spaces) and the otherwise valid password `Password123`.
    - expect: The form accepts the input without layout or browser errors.
  2. Submit the form.
    - expect: Whitespace-padded credentials must not grant access unless trimming behavior is explicitly intended.
    - expect: If rejected, the login page remains displayed with an invalid-credential response.

#### 3.2. Credential case sensitivity

**File:** `test-plans\practice-test-login-test-plan.md`

**Steps:**
  1. Assumption: begin from a fresh browser context. Enter `Student` and `Password123`, then submit.
    - expect: The case-altered username is rejected and does not expose authenticated content.
  2. Reset to a fresh login state. Enter `student` and `password123`, then submit.
    - expect: The case-altered password is rejected and does not expose authenticated content.

#### 3.3. Very long and special-character input is handled safely

**File:** `test-plans\practice-test-login-test-plan.md`

**Steps:**
  1. Assumption: begin from a fresh browser context. Enter at least 1,000 characters and representative punctuation/Unicode characters in both fields.
    - expect: The page remains responsive; input is safely accepted or constrained without a browser crash or broken layout.
  2. Submit the values.
    - expect: Authentication is rejected; no authenticated content is shown.
    - expect: A clear validation response appears and the form remains usable.

#### 3.4. Password visibility and field behavior

**File:** `test-plans\practice-test-login-test-plan.md`

**Steps:**
  1. Assumption: begin from a fresh browser context. Type a sample value into Password and inspect the field.
    - expect: The password is masked while being entered.
    - expect: Username and Password labels identify their respective controls clearly.

#### 3.5. No stale validation message on a fresh visit

**File:** `test-plans\practice-test-login-test-plan.md`

**Steps:**
  1. Assumption: begin from a fresh browser context with no previous form submission. Navigate to the login page.
    - expect: The page presents a clean initial form, or any initial message is clearly part of the page's intended state.
  2. Record whether an invalid-username/password message is visible before submitting.
    - expect: No stale error from a prior interaction is presented as a response to the current fresh visit. If a validation error is present initially, record it as a potential defect with a screenshot and exact text.

#### 3.6. Repeated invalid submission remains stable

**File:** `test-plans\practice-test-login-test-plan.md`

**Steps:**
  1. Assumption: begin from a fresh browser context. Enter an invalid username and the documented valid password.
    - expect: The login form is ready for submission.
  2. Submit the same invalid credentials twice, waiting for each response.
    - expect: Each attempt is rejected with the expected invalid-username message.
    - expect: The page does not duplicate error messages, freeze, or navigate to the success page.

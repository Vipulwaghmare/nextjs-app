import { test, expect } from '@playwright/test';
import successRes from '../../mock/auth/login/success.json'
import failureRes from '../../mock/auth/login/failure.json'

test('Correctly Navigates to Home Page for 200 Response', async ({ page }) => {
  await page.route(`${process.env.PLAYWRIGHT_API_URL}/api/v1/auth/login`, async route => {
    await route.fulfill({ json: successRes });
  });
  await page.goto(`${process.env.PLAYWRIGHT_BASE_URL}/login`);
  await page.getByTestId('login-email-input').click();
  await page.getByTestId('login-email-input').fill(process.env.PLAYWRIGHT_USERNAME);
  await page.getByTestId('login-email-input').press('Tab');
  await page.getByTestId('password-email-input').fill(process.env.PLAYWRIGHT_PASSWORD);
  await page.getByTestId('submit-login-button').click();
  await page.waitForURL(`${process.env.PLAYWRIGHT_BASE_URL}`)
});

test('Login Failed', async ({ page }) => {
  await page.route(`${process.env.PLAYWRIGHT_API_URL}/api/v1/auth/login`, async route => {
    await route.fulfill({ json: failureRes, status: 403 });
  });
  await page.goto(`${process.env.PLAYWRIGHT_BASE_URL}/login`);
  await page.getByTestId('login-email-input').click();
  await page.getByTestId('login-email-input').fill('randomEmail');
  await page.getByTestId('login-email-input').press('Tab');
  await page.getByTestId('password-email-input').fill(process.env.PLAYWRIGHT_PASSWORD);
  await page.getByTestId('submit-login-button').click();
});

// test('Invalid Password', async ({ page }) => {
//   await page.goto(`${process.env.PLAYWRIGHT_BASE_URL}/login`);
//   await page.getByTestId('login-email-input').click();
//   await page.getByTestId('login-email-input').fill('randomEmail');
//   await page.getByTestId('login-email-input').press('Tab');
//   await page.getByTestId('password-email-input').fill(process.env.PLAYWRIGHT_PASSWORD);
//   await page.getByTestId('submit-login-button').click();
//   await page.waitForURL(`${process.env.PLAYWRIGHT_BASE_URL}`)
// });
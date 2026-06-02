import { test, expect } from '@playwright/test';

test('dashboard starting stats text visible', async ({ page }) => {
  await page.goto('/dashboard');

  await expect(page.getByText('Starting stats')).toBeVisible();
});

test('dashboard analytics text visible', async ({ page }) => {
  await page.goto('/dashboard');

  await expect(page.getByText('Analytics')).toBeVisible();
});

test('dashboard shows stat cards', async ({ page }) => {
  await page.goto('/dashboard');

  await expect(page.getByRole('heading', { name: 'Start weight', level: 3 })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Bodyfat', level: 3 })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Waist', level: 3 })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Heartrate (rest)', level: 3 })).toBeVisible();
});

test('dashboard chart cards text is visible', async ({ page }) => {
  await page.goto('/dashboard');

  await expect(page.locator('h4').filter({ hasText: 'Weight' })).toBeVisible();
  await expect(page.locator('h4').filter({ hasText: 'Bodyfat' })).toBeVisible();
  await expect(page.locator('h4').filter({ hasText: 'Waist' })).toBeVisible();
  await expect(page.locator('h4').filter({ hasText: 'Heartrate (rest)' })).toBeVisible();
});

test('dashboard user name is visible', async ({ page }) => {
  await page.goto('/dashboard');

  await expect(page.getByText('John Doe')).toBeVisible();
});

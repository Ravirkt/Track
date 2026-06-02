import { test, expect } from '@playwright/test';


test('Open hamburgermenu and see the differend pagelinks', async ({ page }) => {
    await page.goto('/dashboard');

    const navList = page.locator('.nav-list');

    await navList.hover();

    await expect(page.getByLabel('Dashboard page')).toBeVisible();
    await expect(page.getByLabel('Post progress page')).toBeVisible();
    await expect(page.getByLabel('Schedule page')).toBeVisible();
});


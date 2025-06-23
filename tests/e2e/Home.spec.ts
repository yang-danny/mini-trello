import { test, expect } from '@playwright/test';

//Test task and target page
test.describe('Home Page E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://minitrello0.netlify.app');
  });

  
test('shows main columns and welcome text', async ({ page }) => {
    //Check page contents
    await expect(page.getByText('Welcome to Mini Trello')).toBeVisible();
    await expect(page.getByText('Todo')).toBeVisible();
    await expect(page.getByText('Doing')).toBeVisible();
    await expect(page.getByText('Done')).toBeVisible();
});

test('user can add a task to Todo', async ({ page }) => {
  //Test add task 
  const todoColumn = page.getByText('Todo').locator('..').locator('..');
  await todoColumn.getByTestId('addTask').click();
  await page.getByPlaceholder('Title').fill('Add Task test');
  await page.getByPlaceholder('Task details').fill('This is a Playwright add test task.');
  await page.getByTestId('add').click();
  await expect(page.getByText('Add Task test')).toBeVisible();
});

test('user can delete a task from Todo', async ({ page }) => {
    // Add a task first
  const todoColumn = page.getByText('Todo').locator('..').locator('..');
  await todoColumn.getByTestId('addTask').click();
  await page.getByPlaceholder('Title').fill('Delete Task test');
  await page.getByPlaceholder('Task details').fill('This is a Playwright delete task test.');
  await page.getByTestId('add').click();
    // Click the delete (×) button
  const taskCard = await page.getByText('Delete Task test').locator('..').locator('..');
  await taskCard.getByTestId('delete').click();
  await expect(page.getByText('Delete Task test')).not.toBeVisible();
  });

test('user can drag a task from Todo to Doing', async ({ page }) => {
    // Add a task first
  const todoColumn = page.getByText('Todo').locator('..').locator('..');
  await todoColumn.getByTestId('addTask').click();
  await page.getByPlaceholder('Title').fill('Drag Task test');
  await page.getByPlaceholder('Task details').fill('This is a Playwright Drag Task test.');
  await page.getByTestId('add').click();
    // Drag and drop
  const doingColumn = await page.getByText('Doing').locator('..').locator('..');
    // Simulate drag start
  await page.getByText('Drag Task test').dragTo(doingColumn);
  await expect(doingColumn.getByText('Drag Task test')).toBeVisible();
  });
});
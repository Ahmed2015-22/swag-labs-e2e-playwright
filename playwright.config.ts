import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  timeout: 60 * 1000,
  expect :{
    timeout: 10 * 1000,
  },
  
  reporter: [
    ['list'],
    ['allure-playwright', {
      detail: true,
      outputFolder: 'allure-results',
      theme: 'awesome', 
      singleFile: true,
    }],
  ],
  
  use: {
    baseURL: process.env.BASE_URL,
    trace: 'retain-on-failure', 
    headless: true,
    

    screenshot: 'only-on-failure',
    video: 'off',

    actionTimeout: 15 * 1000,
    navigationTimeout: 30 * 1000,
  },

  projects: [
    {
      name: 'edge',
      use: { 
        ...devices['Desktop Edge'], 
        channel: 'msedge' 
      },
    },
    // {
    //   name: 'chrome', 
    //   use: { 
    //     ...devices['Desktop Chrome'], 
    //     channel: 'chrome' 
    //   },
    // }
  ],
});
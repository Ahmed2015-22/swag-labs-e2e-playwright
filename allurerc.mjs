import { defineConfig } from "allure";
import os from "node:os"; 
import dotenv from "dotenv";
dotenv.config();
export default defineConfig({
  name: "Playwright Test Report",
  output: "./allure-report",
  
  hideLabels: [/^_/], 
  
  variables: {
    "SDET": "Ahmed El-Sharkawi", 
    "Target URL": process.env.BASE_URL,
    "Framework": "Playwright & TypeScript",
    "OS Platform": os.platform(),
    "os_version": os.release(),
    "Node Version": process.version,


  },

  plugins: {
    awesome: {
      options: {
        singleFile: true, 
        reportLanguage: "en", 
        open: true, 
      },
    },
  },
});
import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
// 1. رجعنا مكتبة بلاي رايت
import playwright from "eslint-plugin-playwright"; 

export default defineConfig([
  // تحديد الملفات
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  
  // 2. غيرنا بيئة التشغيل لـ Node.js
  { languageOptions: { globals: globals.node } },
  
  // تفعيل الإعدادات القياسية
  js.configs.recommended,
  ...tseslint.configs.recommended,
  playwright.configs['flat/recommended'],
  
  // 3. تظبيط قاعدة الـ Semicolon عشان تشتغل مع TypeScript بدون مشاكل
  {
    rules: {
      "semi": "off", 
      "@typescript-eslint/semi": ["error", "always"]
    }
  }
]);
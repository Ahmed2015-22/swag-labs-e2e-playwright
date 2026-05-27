# Playwright E2E Testing Framework 🎭

A robust, scalable, and maintainable End-to-End (E2E) testing framework built with **Playwright**, **TypeScript**, and the **Page Object Model (POM)** design pattern. This framework is specifically designed to test the [Swag Labs (SauceDemo)](https://www.saucedemo.com/) web application.

---

## 🚀 Features

- **TypeScript** for type safety and better IDE support.
- **Page Object Model (POM)** pattern for maintainability and code reusability.
- **Custom Fixtures** (`pageManager`) to easily inject pages into tests.
- **Allure Reports** integrated for rich and interactive test reporting.
- **Data-Driven Approach** isolating test data from test logic.
- **GitHub Actions** CI/CD pipeline ready.
- **Cross-Browser Testing** configured.

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/) (v16.x or newer - LTS recommended)
- `npm` (comes with Node.js)
- Git

---

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Ahmed2015-22/swag-labs-e2e-playwright.git
   cd PlaywrightFramework
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Install Playwright browsers:**
   ```bash
   npx playwright install --with-deps
   ```

4. **Environment Variables Setup:**
   Create a `.env` file in the root directory of the project and add the base URL:
   ```env
   BASE_URL=https://www.saucedemo.com/
   ```

---

## 📂 Project Structure

```plaintext
├── .github/workflows/   # CI/CD pipelines (GitHub Actions)
├── fixture/             # Custom Playwright fixtures (Page Manager)
├── pages/               # Page Object Model (POM) classes
├── testData/            # Test data and endpoints
├── tests/               # E2E test files (*.spec.ts)
├── utils/               # Helper utilities (e.g., Allure Metadata)
├── playwright.config.ts # Playwright global configuration
├── allurerc.mjs         # Allure report configuration
└── package.json         # Dependencies and NPM scripts
```

---

## 🏃‍♂️ How to Run Tests

The framework provides several scripts in `package.json` for running tests and generating reports.

### Run All Tests
To run all tests (By default, configured to run on Edge locally):
```bash
npx playwright test
```

### Run Tests and Generate Allure Report
This will run the tests and automatically generate the Allure results:
```bash
npm run test:allure
```

### Run Specific Test File
```bash
npx playwright test tests/LoginTest.spec.ts
```

### Run Tests in UI Mode (Interactive)
```bash
npx playwright test --ui
```

---

## 📊 Viewing Reports

### Allure Report (Recommended)
After running the tests using `npm run test:allure`, you can open the interactive Allure report:
```bash
npm run report:open
```
*You can also generate and serve the report locally using `npx allure serve allure-results`.*

### Playwright HTML Report
Playwright's default HTML report is generated on failure. You can view it using:
```bash
npx playwright show-report
```

---

## ⚙️ CI/CD (GitHub Actions)

This project is fully integrated with **GitHub Actions**. The pipeline is triggered on every `push` and `pull_request` to the `main` or `master` branches.

**The pipeline performs the following:**
1. Checks out the code.
2. Sets up the Node.js environment.
3. Installs dependencies and Playwright browsers (with caching).
4. Runs the E2E test suite.
5. Uploads both **Playwright Report** and **Allure Results** as build artifacts.

---

---

## 👨‍💻 Author
**Ahmed El-Sharkawi**  
*Junior Test Automation Engineer*

🔗 [LinkedIn Profile](https://www.linkedin.com/in/ahmed-el-sharkawi/)
🔗 [GitHub Profile](https://github.com/Ahmed2015-22)


import { Builder, Capabilities } from "selenium-webdriver";
import tests from "./tests/index";
const chromedriver = require("chromedriver");

// Sets up chrome for automation
const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

// Runs before all of our tests run
beforeAll(async () => {
  await driver.get("http://127.0.0.1:5500/index.html");
});

// Runs after all of our tests run
afterAll(async () => {
  await driver.quit();
});

// Actually UI test
test("Google Search Test", async () => {
  const VALUE = "Jungle Book";

  await tests.input(driver, VALUE);

  await tests.delete(driver, VALUE);
});

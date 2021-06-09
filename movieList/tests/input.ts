import { By, WebDriver } from "selenium-webdriver";

export async function inputTest(driver: WebDriver, value: string) {
  let movieInput = (await driver).findElement(By.css("input"));
  let addButton = await (await driver).findElement(By.css("button"));

  await movieInput.sendKeys(value);
  await addButton.click();

  await driver.sleep(3000);
}

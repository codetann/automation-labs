import { By, WebDriver } from "selenium-webdriver";

export async function deleteTest(driver: WebDriver, value: string) {
  const id = value.replace(" ", "");

  let deleteButton = await (await driver).findElement(By.id(id));

  await deleteButton.click();

  await driver.sleep(3000);
}

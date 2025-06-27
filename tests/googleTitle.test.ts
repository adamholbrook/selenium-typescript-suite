import { Builder, WebDriver } from "selenium-webdriver";
import "selenium-webdriver/chrome";

async function testGoogleTitle() {
  let driver: WebDriver | undefined;

  try {
    // Initialize the Chrome driver
    driver = await new Builder().forBrowser("chrome").build();

    // Navigate to Google
    await driver.get("https://www.google.com");

    // Get the title of the page
    const expectedTitle = "Lol";
    const actualTitle = await driver.getTitle();

    // Check if the title is correct
    if (actualTitle === expectedTitle) {
      console.log("Test passed: Title is correct.");
    } else {
      console.error(
        `Test failed: Expected '${expectedTitle}', but got '${actualTitle}'.`
      );
    }
  } catch (error) {
    console.error("An error occurred:", error);
    process.exit(1);
  } finally {
    // Quit the driver
    if (driver) {
      await driver.quit();
    }
  }
}

testGoogleTitle().then(() => console.log("Test has run successfully."));

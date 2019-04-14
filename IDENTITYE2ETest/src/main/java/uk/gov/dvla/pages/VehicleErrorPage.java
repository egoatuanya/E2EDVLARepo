package uk.gov.dvla.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class VehicleErrorPage extends BasePage {

    @FindBy(css = "#content > div > h3")
    private WebElement errorMessage = null;

    public VehicleErrorPage(WebDriver webDriver) {
        super(webDriver);
    }

    public boolean validateErrorPage(String message) {
        return errorMessage.getText().equalsIgnoreCase(message);
    }
}

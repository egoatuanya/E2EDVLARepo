package uk.gov.dvla.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import org.openqa.selenium.support.FindBy;



public class VehicleDetailsPage extends BasePage {


    @FindBy(css = "li:nth-child(2) > span:nth-child(2) > strong")
    private WebElement makeText = null;
    @FindBy(css = "li:nth-child(3) > span:nth-child(2) > strong")
    private WebElement colourText = null;


    public VehicleDetailsPage(WebDriver webDriver) {
        super(webDriver);
    }

    public boolean validateVehicleMake(String make) {
        return makeText.getText().equalsIgnoreCase(make);
    }

    public boolean validateVehicleColour(String colour) {
        return colourText.getText().equalsIgnoreCase(colour);
    }
}


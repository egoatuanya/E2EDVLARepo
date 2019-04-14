package uk.gov.dvla.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import uk.gov.dvla.waits.WebWaits;
import uk.gov.dvla.webControls.ClickControl;
import uk.gov.dvla.webControls.TextFieldsControl;

public class VehicleEnquiryPage extends BasePage {

    @FindBy(id = "pr3")
    private WebElement gridRow = null;
   @FindBy(css = "div.error-summary.validation-summary-errors > ul > a")
    private WebElement validationError = null;


    public VehicleEnquiryPage(WebDriver webDriver) {
        super(webDriver);
    }

    public VehicleEnquiryPage enterVehicleNumber(String vehRegNo) {
        for (WebElement idElement : webDriver.findElements(By.tagName("input"))) {
            if (idElement.getAttribute("id").toLowerCase().contains("vrm")) {
                TextFieldsControl.enterText(idElement, vehRegNo);
                break;
            }
        }
        return this;
    }

    public void clickContinueButton() {
        for (WebElement classElement : webDriver.findElements(By.name("Continue"))) {
            if (classElement.getAttribute("class").toLowerCase().contains("button")) {
                ClickControl.click(classElement);
                break;
            }
        }
        WebWaits.waitForElement(gridRow);
    }

    public VehicleDetailsPage goToVehicleValidationPage() {
        this.clickContinueButton();
        return PageFactory.initElements(webDriver, VehicleDetailsPage.class);
    }

    public VehicleErrorPage goToVehicleErrorPage() {
        this.clickContinueButton();
        return PageFactory.initElements(webDriver, VehicleErrorPage.class);
    }

    public boolean validateErrorMessage(String error) {
        //WebWaits.waitForElement(validationError);
        return validationError.getText().equalsIgnoreCase(error);
    }
}



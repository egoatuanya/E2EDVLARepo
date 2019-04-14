package uk.gov.dvla.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import uk.gov.dvla.waits.WebWaits;
import uk.gov.dvla.webControls.ClickControl;

public class VehicleStartPage extends BasePage {


    @FindBy(id = "get-started")
    private WebElement startNowButton = null;
    @FindBy(name = "Continue")
    private WebElement continueButton = null;


    public VehicleStartPage(WebDriver webDriver) {
        super(webDriver);
    }

    public VehicleEnquiryPage startValidation() {
        for (WebElement idElement : startNowButton.findElements(By.tagName("a"))) {
            if (idElement.getAttribute("role").toLowerCase().contains("button".toLowerCase())) {
                ClickControl.click(idElement);
                break;
            }
        }
        WebWaits.waitForElement(continueButton);
        return PageFactory.initElements(webDriver, VehicleEnquiryPage.class);
    }
}



package uk.gov.dvla.support;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import uk.gov.dvla.browsers.WebDriverFactory;
import uk.gov.dvla.pages.*;

public class WorldHelper {

    private WebDriver driver = WebDriverFactory.getThreadedDriver();
    private static BasePage basePage = null;
    private static VehicleErrorPage errorPage = null;
    private static VehicleStartPage startPage = null;
    private static VehicleEnquiryPage enquiryPage = null;
    private static VehicleDetailsPage validationPage = null;


    public BasePage getBasePage() {
        if (basePage != null) return basePage;
        return PageFactory.initElements(driver, BasePage.class);
    }

    public VehicleErrorPage getErrorPage() {
        if (errorPage != null) return errorPage;
        return PageFactory.initElements(driver, VehicleErrorPage.class);
    }

    public VehicleStartPage getStartPage() {
        if (startPage != null) return startPage;
        startPage = PageFactory.initElements(driver, VehicleStartPage.class);
        return startPage;
    }

    public VehicleEnquiryPage getVehicleEnquiryPage() {
        if (enquiryPage != null) return enquiryPage;
        return PageFactory.initElements(driver, VehicleEnquiryPage.class);
    }

    public VehicleDetailsPage getVehicleValidationPage() {
        if (validationPage != null) return validationPage;
        return PageFactory.initElements(driver, VehicleDetailsPage.class);
    }
}


package uk.gov.dvla.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import uk.gov.dvla.pages.VehicleEnquiryPage;
import uk.gov.dvla.pages.VehicleErrorPage;
import uk.gov.dvla.pages.VehicleStartPage;
import uk.gov.dvla.pages.VehicleDetailsPage;
import uk.gov.dvla.support.WorldHelper;
import uk.gov.dvla.utilities.FileReaderUtil;
import uk.gov.dvla.utilities.TestData;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.Is.is;

public class VehicleSearchSteps {

    private WorldHelper helper;
    private VehicleDetailsPage validationPage;
    private VehicleStartPage startPage;
    private VehicleEnquiryPage enquiryPage;
    private VehicleErrorPage errorPage;
    private FileReaderUtil fileReaderUtil;

    private String vehicleRegNo;
    private String vehicleMake;
    private String vehicleColour;

    public VehicleSearchSteps(WorldHelper helper, FileReaderUtil reader) {
        this.helper = helper;
        this.fileReaderUtil = reader;
    }

    @Given("^I am on the DVLAs Vehicles Information Page$")
    public void iAmOnTheDVLAsVehiclesInformationPage() throws Throwable {
        startPage = helper.getBasePage().goToStartPage();
    }

    @Given("^I proceed with checking specific details of vehicles as below:$")
    public void iProceedWithCheckingSpecificDetailsOfVehiclesAsBelow() throws Throwable {
        enquiryPage = startPage.startValidation();
    }

    @When("^I search with a \"([^\"]*)\" and click to continue$")
    public void iSearchWithAAndClickToContinue(String vehicleReg) throws Throwable {
        vehicleReg = TestData.getValue(vehicleReg);
        validationPage = enquiryPage.enterVehicleNumber(vehicleReg).goToVehicleValidationPage();
    }

    @Then("^I should be able to see the \"([^\"]*)\" and the \"([^\"]*)\" displayed$")
    public void iShouldBeAbleToSeeTheAndTheDisplayed(String make, String colour) throws Throwable {
        make = TestData.getValue(make);
        colour = TestData.getValue(colour);
        assertThat(validationPage.validateVehicleMake(make), is(true));
        assertThat(validationPage.validateVehicleColour(colour), is(true));
    }

    @When("^I enter an \"([^\"]*)\" on the searchField and click to continue$")
    public void iEnterAnOnTheSearchFieldAndClickToContinue(String invalidReg) throws Throwable {
        invalidReg = TestData.getValue(invalidReg);
        helper.getVehicleEnquiryPage().enterVehicleNumber(invalidReg).clickContinueButton();
    }

    @Then("^I should be able to see an \"([^\"]*)\" displayed for invalid registration number$")
    public void iShouldBeAbleToSeeAnDisplayedForInvalidRegistrationNumber(String errorMessage) throws Throwable {
        errorMessage= TestData.getValue(errorMessage);
        assertThat(enquiryPage.validateErrorMessage(errorMessage), is(true));
    }

    @When("^I enter a \"([^\"]*)\" on the searchField$")
    public void iEnterAOnTheSearchField(String wrongReg) throws Throwable {
        wrongReg = TestData.getValue(wrongReg);
        enquiryPage.enterVehicleNumber(wrongReg);
    }

    @And("^I click on the continue button$")
    public void iClickOnTheContinueButton() throws Throwable {
        errorPage = enquiryPage.goToVehicleErrorPage();
    }

    @Then("^I should be navigated to an error page with \"([^\"]*)\"$")
    public void iShouldBeNavigatedToAnErrorPageWith(String error) throws Throwable {
        error = TestData.getValue(error);
        assertThat(errorPage.validateErrorPage(error), is(true));
    }


    @And("^I get test data from CSV file ([^\"]*)$")
    public void iGetTestDataFromCSVFile(String fileName) throws Throwable {
        vehicleRegNo = fileReaderUtil.getVehicleRegistration(fileName);
        vehicleMake = fileReaderUtil.getVehicleMake(fileName);
        vehicleColour = fileReaderUtil.getVehicleColour(fileName);
    }

    @And("^I enter a valid vehicle registration number on the searchField and click to continue$")
    public void iEnterAValidVehicleRegistrationNumberOnTheSearchFieldAndClickToContinue() throws Throwable {
        validationPage = enquiryPage.enterVehicleNumber(vehicleRegNo).goToVehicleValidationPage();
    }

    @Then("^I should be able to see the vehicle's make and colour for each registration number entered$")
    public void iShouldBeAbleToSeeTheVehicleSMakeAndColourForEachRegistrationNumberEntered() throws Throwable {
        Assert.assertTrue(validationPage.validateVehicleColour(vehicleColour));
        Assert.assertTrue(validationPage.validateVehicleMake(vehicleMake));
    }

    @And("^I enter an invalid vehicle registration number on the searchField and click to continue$")
    public void iEnterAnInvalidVehicleRegistrationNumberOnTheSearchFieldAndClickToContinue() throws Throwable {
        helper.getVehicleEnquiryPage().enterVehicleNumber(vehicleRegNo).clickContinueButton();
    }

    @Then("^I should be able to get an \"([^\"]*)\" displayed for invalid registration number$")
    public void iShouldBeAbleToGetAnDisplayedForInvalidRegistrationNumber(String errorMessage) throws Throwable {
        errorMessage= TestData.getValue(errorMessage);
        assertThat(enquiryPage.validateErrorMessage(errorMessage), is(true));
    }

    @And("^I enter a wrong vehicle registration number on the searchField and click to continue$")
    public void iEnterAWrongVehicleRegistrationNumberOnTheSearchFieldAndClickToContinue() throws Throwable {
        errorPage = enquiryPage.enterVehicleNumber(vehicleRegNo).goToVehicleErrorPage();
    }

    @Then("^I should be able to get an error Page with \"([^\"]*)\"$")
    public void iShouldBeAbleToGetAnErrorPageWith(String error) throws Throwable {
        error = TestData.getValue(error);
        assertThat(errorPage.validateErrorPage(error), is(true));
    }
}



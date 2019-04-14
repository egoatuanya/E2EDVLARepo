import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        strict = true,
        features = {"/home/automach/GitHub/E2EDVLA/E2EDVLARepo/IDENTITYE2ETest/src/test/resources/Features/VehicleSearch.feature:19"},
        plugin = {"pretty"},
        monochrome = true,
        glue = {"uk.co.gov"})
public class Parallel03IT {
}

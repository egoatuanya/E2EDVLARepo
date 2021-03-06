package uk.gov.dvla.browsers;

import static java.lang.String.format;
import static java.util.Arrays.stream;
import static java.util.stream.Collectors.toList;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.opera.OperaDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import uk.gov.dvla.utilities.EnvConfig;


public class WebDriverFactory {

    private static final ThreadLocal<WebDriver> DRIVER_THREAD_LOCAL = new ThreadLocal<>();


    private WebDriverFactory() {

    }

    public static WebDriver getThreadedDriver() {
        return DRIVER_THREAD_LOCAL.get();
    }

    public static void setThreadedDriver(WebDriver webDriver) {
        DRIVER_THREAD_LOCAL.set(webDriver);
    }

    public static WebDriver create() {

        String browser = EnvConfig.getValue("browser");
        if (browser == null || browser.isEmpty()) {
            throw new IllegalStateException("The webdriver system property must be set");
        }
        try {
            createAndSetUpThreadedBrowser(browser);
            return getThreadedDriver();
        } catch (IllegalArgumentException e) {
            String msg = format("The webdriver system property '%s' did not match any " +
                            "existing browser or the browser was not supported on your operating system. " +
                            "Valid values are %s",
                    browser, stream(Drivers
                            .values())
                            .map(Enum::name)
                            .map(String::toLowerCase)
                            .collect(toList()));

            throw new IllegalStateException(msg, e);
        }
    }

    private static void createAndSetUpThreadedBrowser(String browser) {
        WebDriver webDriver;
        if (System.getProperty("testbed").toLowerCase().contains("local")) {
            webDriver = Drivers.valueOf(browser.toUpperCase()).newDriver();
        } else {
            webDriver = Drivers.valueOf(browser.toUpperCase()).newDriver();
        }
        setThreadedDriver(webDriver);
    }

    private enum Drivers {
        FIREFOX {
            @Override
            public WebDriver newDriver() {
                return ManageWebDrivers.getFirefoxDriver();
            }
        }, CHROME {
            @Override
            public WebDriver newDriver() {
                return ManageWebDrivers.getChromeDriver();
            }
        }, OPERA {
            @Override
            public WebDriver newDriver() {
                DesiredCapabilities capabilities = DesiredCapabilities.operaBlink();
                return new OperaDriver();
            }
        }, PHANTOMJS {
            @Override
            public WebDriver newDriver() {
                return ManageWebDrivers.getPhantonJsDriver();
            }
        }, IE {
            @Override
            public WebDriver newDriver() {
                return ManageWebDrivers.getIeDriver();
            }
        }, EDGE {
            @Override
            public WebDriver newDriver() {
                return ManageWebDrivers.getEdgeDriver();
            }
        };

        public abstract org.openqa.selenium.WebDriver newDriver();
    }
}


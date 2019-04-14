$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/VehicleSearch.feature");
formatter.feature({
  "line": 2,
  "name": "Getting Vehicle Details",
  "description": "As a user\nI want to be able to get the details of some vehicles of my choice\nSo that I can validate the makes and colours of these vehicles.",
  "id": "getting-vehicle-details",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 1005768,
  "status": "passed"
});
formatter.before({
  "duration": 5447004158,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on the DVLAs Vehicles Information Page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I proceed with checking specific details of vehicles as below:",
  "keyword": "And "
});
formatter.match({
  "location": "VehicleSearchSteps.iAmOnTheDVLAsVehiclesInformationPage()"
});
formatter.result({
  "duration": 163104963,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iProceedWithCheckingSpecificDetailsOfVehiclesAsBelow()"
});
formatter.result({
  "duration": 2368734306,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Enter a valid vehicle registration number and get the make and colour of vehicle",
  "description": "",
  "id": "getting-vehicle-details;enter-a-valid-vehicle-registration-number-and-get-the-make-and-colour-of-vehicle",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I search with a \"valid vehicleRegNumber\" and click to continue",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should be able to see the \"vehicle make\" and the \"vehicle colour\" displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "valid vehicleRegNumber",
      "offset": 17
    }
  ],
  "location": "VehicleSearchSteps.iSearchWithAAndClickToContinue(String)"
});
formatter.result({
  "duration": 1131859350,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vehicle make",
      "offset": 29
    },
    {
      "val": "vehicle colour",
      "offset": 52
    }
  ],
  "location": "VehicleSearchSteps.iShouldBeAbleToSeeTheAndTheDisplayed(String,String)"
});
formatter.result({
  "duration": 112734526,
  "status": "passed"
});
formatter.after({
  "duration": 173615,
  "status": "passed"
});
formatter.before({
  "duration": 93118,
  "status": "passed"
});
formatter.before({
  "duration": 1807660677,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on the DVLAs Vehicles Information Page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I proceed with checking specific details of vehicles as below:",
  "keyword": "And "
});
formatter.match({
  "location": "VehicleSearchSteps.iAmOnTheDVLAsVehiclesInformationPage()"
});
formatter.result({
  "duration": 675106,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iProceedWithCheckingSpecificDetailsOfVehiclesAsBelow()"
});
formatter.result({
  "duration": 1130934479,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Enter an invalid vehicle registration number and receive an error message",
  "description": "",
  "id": "getting-vehicle-details;enter-an-invalid-vehicle-registration-number-and-receive-an-error-message",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I enter an \"invalid vehicleRegNumber\" on the searchField and click to continue",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should be able to see an \"error message\" displayed for invalid registration number",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "invalid vehicleRegNumber",
      "offset": 12
    }
  ],
  "location": "VehicleSearchSteps.iEnterAnOnTheSearchFieldAndClickToContinue(String)"
});
formatter.result({
  "duration": 15868428493,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "error message",
      "offset": 28
    }
  ],
  "location": "VehicleSearchSteps.iShouldBeAbleToSeeAnDisplayedForInvalidRegistrationNumber(String)"
});
formatter.result({
  "duration": 59758617,
  "status": "passed"
});
formatter.after({
  "duration": 39962,
  "status": "passed"
});
formatter.before({
  "duration": 61866,
  "status": "passed"
});
formatter.before({
  "duration": 1738832977,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on the DVLAs Vehicles Information Page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I proceed with checking specific details of vehicles as below:",
  "keyword": "And "
});
formatter.match({
  "location": "VehicleSearchSteps.iAmOnTheDVLAsVehiclesInformationPage()"
});
formatter.result({
  "duration": 468811,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iProceedWithCheckingSpecificDetailsOfVehiclesAsBelow()"
});
formatter.result({
  "duration": 1258652048,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Enter a wrong vehicle registration number and receive an error page with an error message",
  "description": "",
  "id": "getting-vehicle-details;enter-a-wrong-vehicle-registration-number-and-receive-an-error-page-with-an-error-message",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "I enter a \"wrongVehicle regNumber\" on the searchField",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I click on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should be navigated to an error page with \"detailsNotFound error\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "wrongVehicle regNumber",
      "offset": 11
    }
  ],
  "location": "VehicleSearchSteps.iEnterAOnTheSearchField(String)"
});
formatter.result({
  "duration": 348115245,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iClickOnTheContinueButton()"
});
formatter.result({
  "duration": 15799097704,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "detailsNotFound error",
      "offset": 45
    }
  ],
  "location": "VehicleSearchSteps.iShouldBeNavigatedToAnErrorPageWith(String)"
});
formatter.result({
  "duration": 59327196,
  "status": "passed"
});
formatter.after({
  "duration": 53971,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 29,
  "name": "Search for valid vehicle registration number read from CSV files using the below \u003cfile-name\u003e examples",
  "description": "",
  "id": "getting-vehicle-details;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "I get test data from CSV file \u003cfile-name\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I enter a valid vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be able to see the vehicle\u0027s make and colour for each registration number entered",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "getting-vehicle-details;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;",
  "rows": [
    {
      "cells": [
        "file-name"
      ],
      "line": 34,
      "id": "getting-vehicle-details;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;1"
    },
    {
      "cells": [
        "file1.csv"
      ],
      "line": 35,
      "id": "getting-vehicle-details;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;2"
    },
    {
      "cells": [
        "file2.csv"
      ],
      "line": 36,
      "id": "getting-vehicle-details;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;3"
    },
    {
      "cells": [
        "file3.csv"
      ],
      "line": 37,
      "id": "getting-vehicle-details;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;4"
    },
    {
      "cells": [
        "file4.csv"
      ],
      "line": 38,
      "id": "getting-vehicle-details;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;5"
    },
    {
      "cells": [
        "file5.csv"
      ],
      "line": 39,
      "id": "getting-vehicle-details;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;6"
    },
    {
      "cells": [
        "file6.csv"
      ],
      "line": 40,
      "id": "getting-vehicle-details;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;7"
    },
    {
      "cells": [
        "file7.csv"
      ],
      "line": 41,
      "id": "getting-vehicle-details;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;8"
    },
    {
      "cells": [
        "file8.csv"
      ],
      "line": 42,
      "id": "getting-vehicle-details;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;9"
    },
    {
      "cells": [
        "file9.csv"
      ],
      "line": 43,
      "id": "getting-vehicle-details;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;10"
    },
    {
      "cells": [
        "file10.csv"
      ],
      "line": 44,
      "id": "getting-vehicle-details;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;11"
    },
    {
      "cells": [
        "file11.csv"
      ],
      "line": 45,
      "id": "getting-vehicle-details;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;12"
    },
    {
      "cells": [
        "file12.csv"
      ],
      "line": 46,
      "id": "getting-vehicle-details;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;13"
    },
    {
      "cells": [
        "file13.csv"
      ],
      "line": 47,
      "id": "getting-vehicle-details;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;14"
    },
    {
      "cells": [
        "file14.csv"
      ],
      "line": 48,
      "id": "getting-vehicle-details;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;15"
    },
    {
      "cells": [
        "file15.csv"
      ],
      "line": 49,
      "id": "getting-vehicle-details;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;16"
    },
    {
      "cells": [
        "file16.csv"
      ],
      "line": 50,
      "id": "getting-vehicle-details;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;17"
    },
    {
      "cells": [
        "file17.csv"
      ],
      "line": 51,
      "id": "getting-vehicle-details;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;18"
    },
    {
      "cells": [
        "file18.csv"
      ],
      "line": 52,
      "id": "getting-vehicle-details;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;19"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 61698,
  "status": "passed"
});
formatter.before({
  "duration": 1779442642,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on the DVLAs Vehicles Information Page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I proceed with checking specific details of vehicles as below:",
  "keyword": "And "
});
formatter.match({
  "location": "VehicleSearchSteps.iAmOnTheDVLAsVehiclesInformationPage()"
});
formatter.result({
  "duration": 773519,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iProceedWithCheckingSpecificDetailsOfVehiclesAsBelow()"
});
formatter.result({
  "duration": 2344005245,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Search for valid vehicle registration number read from CSV files using the below file1.csv examples",
  "description": "",
  "id": "getting-vehicle-details;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I get test data from CSV file file1.csv",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I enter a valid vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be able to see the vehicle\u0027s make and colour for each registration number entered",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "file1.csv",
      "offset": 30
    }
  ],
  "location": "VehicleSearchSteps.iGetTestDataFromCSVFile(String)"
});
formatter.result({
  "duration": 5578198,
  "error_message": "java.lang.ArrayIndexOutOfBoundsException: 1\n\tat uk.gov.dvla.utilities.FileReaderUtil.getVehicleMake(FileReaderUtil.java:54)\n\tat uk.gov.dvla.steps.VehicleSearchSteps.iGetTestDataFromCSVFile(VehicleSearchSteps.java:94)\n\tat ✽.When I get test data from CSV file file1.csv(Features/VehicleSearch.feature:30)\n",
  "status": "failed"
});
formatter.match({
  "location": "VehicleSearchSteps.iEnterAValidVehicleRegistrationNumberOnTheSearchFieldAndClickToContinue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "VehicleSearchSteps.iShouldBeAbleToSeeTheVehicleSMakeAndColourForEachRegistrationNumberEntered()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 60089833204,
  "status": "passed"
});
formatter.before({
  "duration": 229250,
  "status": "passed"
});
formatter.before({
  "duration": 1742399524,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on the DVLAs Vehicles Information Page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I proceed with checking specific details of vehicles as below:",
  "keyword": "And "
});
formatter.match({
  "location": "VehicleSearchSteps.iAmOnTheDVLAsVehiclesInformationPage()"
});
formatter.result({
  "duration": 734947,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iProceedWithCheckingSpecificDetailsOfVehiclesAsBelow()"
});
formatter.result({
  "duration": 1384923992,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Search for valid vehicle registration number read from CSV files using the below file2.csv examples",
  "description": "",
  "id": "getting-vehicle-details;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I get test data from CSV file file2.csv",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I enter a valid vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be able to see the vehicle\u0027s make and colour for each registration number entered",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "file2.csv",
      "offset": 30
    }
  ],
  "location": "VehicleSearchSteps.iGetTestDataFromCSVFile(String)"
});
formatter.result({
  "duration": 391112,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iEnterAValidVehicleRegistrationNumberOnTheSearchFieldAndClickToContinue()"
});
formatter.result({
  "duration": 1013393703,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iShouldBeAbleToSeeTheVehicleSMakeAndColourForEachRegistrationNumberEntered()"
});
formatter.result({
  "duration": 100335350,
  "status": "passed"
});
formatter.after({
  "duration": 41746,
  "status": "passed"
});
formatter.before({
  "duration": 69179,
  "status": "passed"
});
formatter.before({
  "duration": 1736091173,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on the DVLAs Vehicles Information Page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I proceed with checking specific details of vehicles as below:",
  "keyword": "And "
});
formatter.match({
  "location": "VehicleSearchSteps.iAmOnTheDVLAsVehiclesInformationPage()"
});
formatter.result({
  "duration": 2137754,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iProceedWithCheckingSpecificDetailsOfVehiclesAsBelow()"
});
formatter.result({
  "duration": 1234818838,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Search for valid vehicle registration number read from CSV files using the below file3.csv examples",
  "description": "",
  "id": "getting-vehicle-details;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I get test data from CSV file file3.csv",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I enter a valid vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be able to see the vehicle\u0027s make and colour for each registration number entered",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "file3.csv",
      "offset": 30
    }
  ],
  "location": "VehicleSearchSteps.iGetTestDataFromCSVFile(String)"
});
formatter.result({
  "duration": 1514100,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iEnterAValidVehicleRegistrationNumberOnTheSearchFieldAndClickToContinue()"
});
formatter.result({
  "duration": 1161991400,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iShouldBeAbleToSeeTheVehicleSMakeAndColourForEachRegistrationNumberEntered()"
});
formatter.result({
  "duration": 92748393,
  "status": "passed"
});
formatter.after({
  "duration": 36413,
  "status": "passed"
});
formatter.before({
  "duration": 359903,
  "status": "passed"
});
formatter.before({
  "duration": 1718177460,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on the DVLAs Vehicles Information Page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I proceed with checking specific details of vehicles as below:",
  "keyword": "And "
});
formatter.match({
  "location": "VehicleSearchSteps.iAmOnTheDVLAsVehiclesInformationPage()"
});
formatter.result({
  "duration": 365374,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iProceedWithCheckingSpecificDetailsOfVehiclesAsBelow()"
});
formatter.result({
  "duration": 997187866,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Search for valid vehicle registration number read from CSV files using the below file4.csv examples",
  "description": "",
  "id": "getting-vehicle-details;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I get test data from CSV file file4.csv",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I enter a valid vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be able to see the vehicle\u0027s make and colour for each registration number entered",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "file4.csv",
      "offset": 30
    }
  ],
  "location": "VehicleSearchSteps.iGetTestDataFromCSVFile(String)"
});
formatter.result({
  "duration": 367712,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iEnterAValidVehicleRegistrationNumberOnTheSearchFieldAndClickToContinue()"
});
formatter.result({
  "duration": 1117483485,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iShouldBeAbleToSeeTheVehicleSMakeAndColourForEachRegistrationNumberEntered()"
});
formatter.result({
  "duration": 91928764,
  "status": "passed"
});
formatter.after({
  "duration": 36571,
  "status": "passed"
});
formatter.before({
  "duration": 253550,
  "status": "passed"
});
formatter.before({
  "duration": 1806497257,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on the DVLAs Vehicles Information Page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I proceed with checking specific details of vehicles as below:",
  "keyword": "And "
});
formatter.match({
  "location": "VehicleSearchSteps.iAmOnTheDVLAsVehiclesInformationPage()"
});
formatter.result({
  "duration": 760870,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iProceedWithCheckingSpecificDetailsOfVehiclesAsBelow()"
});
formatter.result({
  "duration": 1022710343,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Search for valid vehicle registration number read from CSV files using the below file5.csv examples",
  "description": "",
  "id": "getting-vehicle-details;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I get test data from CSV file file5.csv",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I enter a valid vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be able to see the vehicle\u0027s make and colour for each registration number entered",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "file5.csv",
      "offset": 30
    }
  ],
  "location": "VehicleSearchSteps.iGetTestDataFromCSVFile(String)"
});
formatter.result({
  "duration": 371041,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iEnterAValidVehicleRegistrationNumberOnTheSearchFieldAndClickToContinue()"
});
formatter.result({
  "duration": 1074556132,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iShouldBeAbleToSeeTheVehicleSMakeAndColourForEachRegistrationNumberEntered()"
});
formatter.result({
  "duration": 94360553,
  "status": "passed"
});
formatter.after({
  "duration": 40690,
  "status": "passed"
});
formatter.before({
  "duration": 48301,
  "status": "passed"
});
formatter.before({
  "duration": 1734115543,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on the DVLAs Vehicles Information Page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I proceed with checking specific details of vehicles as below:",
  "keyword": "And "
});
formatter.match({
  "location": "VehicleSearchSteps.iAmOnTheDVLAsVehiclesInformationPage()"
});
formatter.result({
  "duration": 1824468,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iProceedWithCheckingSpecificDetailsOfVehiclesAsBelow()"
});
formatter.result({
  "duration": 1097504806,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Search for valid vehicle registration number read from CSV files using the below file6.csv examples",
  "description": "",
  "id": "getting-vehicle-details;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I get test data from CSV file file6.csv",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I enter a valid vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be able to see the vehicle\u0027s make and colour for each registration number entered",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "file6.csv",
      "offset": 30
    }
  ],
  "location": "VehicleSearchSteps.iGetTestDataFromCSVFile(String)"
});
formatter.result({
  "duration": 325109,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iEnterAValidVehicleRegistrationNumberOnTheSearchFieldAndClickToContinue()"
});
formatter.result({
  "duration": 990737698,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iShouldBeAbleToSeeTheVehicleSMakeAndColourForEachRegistrationNumberEntered()"
});
formatter.result({
  "duration": 90553009,
  "status": "passed"
});
formatter.after({
  "duration": 24779,
  "status": "passed"
});
formatter.before({
  "duration": 39598,
  "status": "passed"
});
formatter.before({
  "duration": 1678319554,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on the DVLAs Vehicles Information Page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I proceed with checking specific details of vehicles as below:",
  "keyword": "And "
});
formatter.match({
  "location": "VehicleSearchSteps.iAmOnTheDVLAsVehiclesInformationPage()"
});
formatter.result({
  "duration": 2077883,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iProceedWithCheckingSpecificDetailsOfVehiclesAsBelow()"
});
formatter.result({
  "duration": 972576881,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Search for valid vehicle registration number read from CSV files using the below file7.csv examples",
  "description": "",
  "id": "getting-vehicle-details;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I get test data from CSV file file7.csv",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I enter a valid vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be able to see the vehicle\u0027s make and colour for each registration number entered",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "file7.csv",
      "offset": 30
    }
  ],
  "location": "VehicleSearchSteps.iGetTestDataFromCSVFile(String)"
});
formatter.result({
  "duration": 475228,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iEnterAValidVehicleRegistrationNumberOnTheSearchFieldAndClickToContinue()"
});
formatter.result({
  "duration": 1057236495,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iShouldBeAbleToSeeTheVehicleSMakeAndColourForEachRegistrationNumberEntered()"
});
formatter.result({
  "duration": 89293208,
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat org.junit.Assert.assertTrue(Assert.java:52)\n\tat uk.gov.dvla.steps.VehicleSearchSteps.iShouldBeAbleToSeeTheVehicleSMakeAndColourForEachRegistrationNumberEntered(VehicleSearchSteps.java:106)\n\tat ✽.Then I should be able to see the vehicle\u0027s make and colour for each registration number entered(Features/VehicleSearch.feature:32)\n",
  "status": "failed"
});
formatter.after({
  "duration": 60072478298,
  "status": "passed"
});
formatter.before({
  "duration": 58519,
  "status": "passed"
});
formatter.before({
  "duration": 1803104502,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on the DVLAs Vehicles Information Page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I proceed with checking specific details of vehicles as below:",
  "keyword": "And "
});
formatter.match({
  "location": "VehicleSearchSteps.iAmOnTheDVLAsVehiclesInformationPage()"
});
formatter.result({
  "duration": 755395,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iProceedWithCheckingSpecificDetailsOfVehiclesAsBelow()"
});
formatter.result({
  "duration": 1597569854,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Search for valid vehicle registration number read from CSV files using the below file8.csv examples",
  "description": "",
  "id": "getting-vehicle-details;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I get test data from CSV file file8.csv",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I enter a valid vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be able to see the vehicle\u0027s make and colour for each registration number entered",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "file8.csv",
      "offset": 30
    }
  ],
  "location": "VehicleSearchSteps.iGetTestDataFromCSVFile(String)"
});
formatter.result({
  "duration": 628285,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iEnterAValidVehicleRegistrationNumberOnTheSearchFieldAndClickToContinue()"
});
formatter.result({
  "duration": 1031644088,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iShouldBeAbleToSeeTheVehicleSMakeAndColourForEachRegistrationNumberEntered()"
});
formatter.result({
  "duration": 89063262,
  "status": "passed"
});
formatter.after({
  "duration": 25003,
  "status": "passed"
});
formatter.before({
  "duration": 435971,
  "status": "passed"
});
formatter.before({
  "duration": 1799831213,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on the DVLAs Vehicles Information Page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I proceed with checking specific details of vehicles as below:",
  "keyword": "And "
});
formatter.match({
  "location": "VehicleSearchSteps.iAmOnTheDVLAsVehiclesInformationPage()"
});
formatter.result({
  "duration": 2129677,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iProceedWithCheckingSpecificDetailsOfVehiclesAsBelow()"
});
formatter.result({
  "duration": 1161233458,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Search for valid vehicle registration number read from CSV files using the below file9.csv examples",
  "description": "",
  "id": "getting-vehicle-details;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I get test data from CSV file file9.csv",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I enter a valid vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be able to see the vehicle\u0027s make and colour for each registration number entered",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "file9.csv",
      "offset": 30
    }
  ],
  "location": "VehicleSearchSteps.iGetTestDataFromCSVFile(String)"
});
formatter.result({
  "duration": 595861,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iEnterAValidVehicleRegistrationNumberOnTheSearchFieldAndClickToContinue()"
});
formatter.result({
  "duration": 1054536467,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iShouldBeAbleToSeeTheVehicleSMakeAndColourForEachRegistrationNumberEntered()"
});
formatter.result({
  "duration": 89387553,
  "status": "passed"
});
formatter.after({
  "duration": 25849,
  "status": "passed"
});
formatter.before({
  "duration": 63620,
  "status": "passed"
});
formatter.before({
  "duration": 1705356830,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on the DVLAs Vehicles Information Page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I proceed with checking specific details of vehicles as below:",
  "keyword": "And "
});
formatter.match({
  "location": "VehicleSearchSteps.iAmOnTheDVLAsVehiclesInformationPage()"
});
formatter.result({
  "duration": 1023382,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iProceedWithCheckingSpecificDetailsOfVehiclesAsBelow()"
});
formatter.result({
  "duration": 1051667084,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Search for valid vehicle registration number read from CSV files using the below file10.csv examples",
  "description": "",
  "id": "getting-vehicle-details;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I get test data from CSV file file10.csv",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I enter a valid vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be able to see the vehicle\u0027s make and colour for each registration number entered",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "file10.csv",
      "offset": 30
    }
  ],
  "location": "VehicleSearchSteps.iGetTestDataFromCSVFile(String)"
});
formatter.result({
  "duration": 377940,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iEnterAValidVehicleRegistrationNumberOnTheSearchFieldAndClickToContinue()"
});
formatter.result({
  "duration": 1105677242,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iShouldBeAbleToSeeTheVehicleSMakeAndColourForEachRegistrationNumberEntered()"
});
formatter.result({
  "duration": 89409545,
  "status": "passed"
});
formatter.after({
  "duration": 25948,
  "status": "passed"
});
formatter.before({
  "duration": 98837,
  "status": "passed"
});
formatter.before({
  "duration": 1730390652,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on the DVLAs Vehicles Information Page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I proceed with checking specific details of vehicles as below:",
  "keyword": "And "
});
formatter.match({
  "location": "VehicleSearchSteps.iAmOnTheDVLAsVehiclesInformationPage()"
});
formatter.result({
  "duration": 893703,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iProceedWithCheckingSpecificDetailsOfVehiclesAsBelow()"
});
formatter.result({
  "duration": 1025194451,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Search for valid vehicle registration number read from CSV files using the below file11.csv examples",
  "description": "",
  "id": "getting-vehicle-details;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;12",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I get test data from CSV file file11.csv",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I enter a valid vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be able to see the vehicle\u0027s make and colour for each registration number entered",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "file11.csv",
      "offset": 30
    }
  ],
  "location": "VehicleSearchSteps.iGetTestDataFromCSVFile(String)"
});
formatter.result({
  "duration": 733029,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iEnterAValidVehicleRegistrationNumberOnTheSearchFieldAndClickToContinue()"
});
formatter.result({
  "duration": 1117025315,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iShouldBeAbleToSeeTheVehicleSMakeAndColourForEachRegistrationNumberEntered()"
});
formatter.result({
  "duration": 88741006,
  "status": "passed"
});
formatter.after({
  "duration": 34693,
  "status": "passed"
});
formatter.before({
  "duration": 38678,
  "status": "passed"
});
formatter.before({
  "duration": 1741234431,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on the DVLAs Vehicles Information Page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I proceed with checking specific details of vehicles as below:",
  "keyword": "And "
});
formatter.match({
  "location": "VehicleSearchSteps.iAmOnTheDVLAsVehiclesInformationPage()"
});
formatter.result({
  "duration": 860570,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iProceedWithCheckingSpecificDetailsOfVehiclesAsBelow()"
});
formatter.result({
  "duration": 982292887,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Search for valid vehicle registration number read from CSV files using the below file12.csv examples",
  "description": "",
  "id": "getting-vehicle-details;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;13",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I get test data from CSV file file12.csv",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I enter a valid vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be able to see the vehicle\u0027s make and colour for each registration number entered",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "file12.csv",
      "offset": 30
    }
  ],
  "location": "VehicleSearchSteps.iGetTestDataFromCSVFile(String)"
});
formatter.result({
  "duration": 544391,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iEnterAValidVehicleRegistrationNumberOnTheSearchFieldAndClickToContinue()"
});
formatter.result({
  "duration": 938627526,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iShouldBeAbleToSeeTheVehicleSMakeAndColourForEachRegistrationNumberEntered()"
});
formatter.result({
  "duration": 86112559,
  "status": "passed"
});
formatter.after({
  "duration": 26677,
  "status": "passed"
});
formatter.before({
  "duration": 802757,
  "status": "passed"
});
formatter.before({
  "duration": 1728703469,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on the DVLAs Vehicles Information Page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I proceed with checking specific details of vehicles as below:",
  "keyword": "And "
});
formatter.match({
  "location": "VehicleSearchSteps.iAmOnTheDVLAsVehiclesInformationPage()"
});
formatter.result({
  "duration": 4851022,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iProceedWithCheckingSpecificDetailsOfVehiclesAsBelow()"
});
formatter.result({
  "duration": 1202080691,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Search for valid vehicle registration number read from CSV files using the below file13.csv examples",
  "description": "",
  "id": "getting-vehicle-details;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;14",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I get test data from CSV file file13.csv",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I enter a valid vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be able to see the vehicle\u0027s make and colour for each registration number entered",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "file13.csv",
      "offset": 30
    }
  ],
  "location": "VehicleSearchSteps.iGetTestDataFromCSVFile(String)"
});
formatter.result({
  "duration": 256704,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iEnterAValidVehicleRegistrationNumberOnTheSearchFieldAndClickToContinue()"
});
formatter.result({
  "duration": 1045432444,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iShouldBeAbleToSeeTheVehicleSMakeAndColourForEachRegistrationNumberEntered()"
});
formatter.result({
  "duration": 89105341,
  "status": "passed"
});
formatter.after({
  "duration": 459310,
  "status": "passed"
});
formatter.before({
  "duration": 49301,
  "status": "passed"
});
formatter.before({
  "duration": 1734669424,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on the DVLAs Vehicles Information Page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I proceed with checking specific details of vehicles as below:",
  "keyword": "And "
});
formatter.match({
  "location": "VehicleSearchSteps.iAmOnTheDVLAsVehiclesInformationPage()"
});
formatter.result({
  "duration": 1264415,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iProceedWithCheckingSpecificDetailsOfVehiclesAsBelow()"
});
formatter.result({
  "duration": 1199276444,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Search for valid vehicle registration number read from CSV files using the below file14.csv examples",
  "description": "",
  "id": "getting-vehicle-details;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;15",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I get test data from CSV file file14.csv",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I enter a valid vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be able to see the vehicle\u0027s make and colour for each registration number entered",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "file14.csv",
      "offset": 30
    }
  ],
  "location": "VehicleSearchSteps.iGetTestDataFromCSVFile(String)"
});
formatter.result({
  "duration": 337123,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iEnterAValidVehicleRegistrationNumberOnTheSearchFieldAndClickToContinue()"
});
formatter.result({
  "duration": 1179684212,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iShouldBeAbleToSeeTheVehicleSMakeAndColourForEachRegistrationNumberEntered()"
});
formatter.result({
  "duration": 91618831,
  "status": "passed"
});
formatter.after({
  "duration": 129175,
  "status": "passed"
});
formatter.before({
  "duration": 48909,
  "status": "passed"
});
formatter.before({
  "duration": 1686772281,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on the DVLAs Vehicles Information Page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I proceed with checking specific details of vehicles as below:",
  "keyword": "And "
});
formatter.match({
  "location": "VehicleSearchSteps.iAmOnTheDVLAsVehiclesInformationPage()"
});
formatter.result({
  "duration": 911363,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iProceedWithCheckingSpecificDetailsOfVehiclesAsBelow()"
});
formatter.result({
  "duration": 1074807505,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Search for valid vehicle registration number read from CSV files using the below file15.csv examples",
  "description": "",
  "id": "getting-vehicle-details;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;16",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I get test data from CSV file file15.csv",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I enter a valid vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be able to see the vehicle\u0027s make and colour for each registration number entered",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "file15.csv",
      "offset": 30
    }
  ],
  "location": "VehicleSearchSteps.iGetTestDataFromCSVFile(String)"
});
formatter.result({
  "duration": 1037207,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iEnterAValidVehicleRegistrationNumberOnTheSearchFieldAndClickToContinue()"
});
formatter.result({
  "duration": 1030812750,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iShouldBeAbleToSeeTheVehicleSMakeAndColourForEachRegistrationNumberEntered()"
});
formatter.result({
  "duration": 91254515,
  "status": "passed"
});
formatter.after({
  "duration": 40630,
  "status": "passed"
});
formatter.before({
  "duration": 66653,
  "status": "passed"
});
formatter.before({
  "duration": 1651870338,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on the DVLAs Vehicles Information Page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I proceed with checking specific details of vehicles as below:",
  "keyword": "And "
});
formatter.match({
  "location": "VehicleSearchSteps.iAmOnTheDVLAsVehiclesInformationPage()"
});
formatter.result({
  "duration": 989354,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iProceedWithCheckingSpecificDetailsOfVehiclesAsBelow()"
});
formatter.result({
  "duration": 1186728979,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Search for valid vehicle registration number read from CSV files using the below file16.csv examples",
  "description": "",
  "id": "getting-vehicle-details;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;17",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I get test data from CSV file file16.csv",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I enter a valid vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be able to see the vehicle\u0027s make and colour for each registration number entered",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "file16.csv",
      "offset": 30
    }
  ],
  "location": "VehicleSearchSteps.iGetTestDataFromCSVFile(String)"
});
formatter.result({
  "duration": 581754,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iEnterAValidVehicleRegistrationNumberOnTheSearchFieldAndClickToContinue()"
});
formatter.result({
  "duration": 1061137197,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iShouldBeAbleToSeeTheVehicleSMakeAndColourForEachRegistrationNumberEntered()"
});
formatter.result({
  "duration": 91353778,
  "status": "passed"
});
formatter.after({
  "duration": 20745,
  "status": "passed"
});
formatter.before({
  "duration": 24387,
  "status": "passed"
});
formatter.before({
  "duration": 1720552819,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on the DVLAs Vehicles Information Page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I proceed with checking specific details of vehicles as below:",
  "keyword": "And "
});
formatter.match({
  "location": "VehicleSearchSteps.iAmOnTheDVLAsVehiclesInformationPage()"
});
formatter.result({
  "duration": 1842045,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iProceedWithCheckingSpecificDetailsOfVehiclesAsBelow()"
});
formatter.result({
  "duration": 1088262739,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Search for valid vehicle registration number read from CSV files using the below file17.csv examples",
  "description": "",
  "id": "getting-vehicle-details;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;18",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I get test data from CSV file file17.csv",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I enter a valid vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be able to see the vehicle\u0027s make and colour for each registration number entered",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "file17.csv",
      "offset": 30
    }
  ],
  "location": "VehicleSearchSteps.iGetTestDataFromCSVFile(String)"
});
formatter.result({
  "duration": 351253,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iEnterAValidVehicleRegistrationNumberOnTheSearchFieldAndClickToContinue()"
});
formatter.result({
  "duration": 1074992421,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iShouldBeAbleToSeeTheVehicleSMakeAndColourForEachRegistrationNumberEntered()"
});
formatter.result({
  "duration": 146150018,
  "status": "passed"
});
formatter.after({
  "duration": 40420,
  "status": "passed"
});
formatter.before({
  "duration": 79646,
  "status": "passed"
});
formatter.before({
  "duration": 1878923946,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on the DVLAs Vehicles Information Page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I proceed with checking specific details of vehicles as below:",
  "keyword": "And "
});
formatter.match({
  "location": "VehicleSearchSteps.iAmOnTheDVLAsVehiclesInformationPage()"
});
formatter.result({
  "duration": 341643,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iProceedWithCheckingSpecificDetailsOfVehiclesAsBelow()"
});
formatter.result({
  "duration": 1010274263,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Search for valid vehicle registration number read from CSV files using the below file18.csv examples",
  "description": "",
  "id": "getting-vehicle-details;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;19",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I get test data from CSV file file18.csv",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I enter a valid vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be able to see the vehicle\u0027s make and colour for each registration number entered",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "file18.csv",
      "offset": 30
    }
  ],
  "location": "VehicleSearchSteps.iGetTestDataFromCSVFile(String)"
});
formatter.result({
  "duration": 640643,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iEnterAValidVehicleRegistrationNumberOnTheSearchFieldAndClickToContinue()"
});
formatter.result({
  "duration": 1096316320,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iShouldBeAbleToSeeTheVehicleSMakeAndColourForEachRegistrationNumberEntered()"
});
formatter.result({
  "duration": 109381937,
  "status": "passed"
});
formatter.after({
  "duration": 38205,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 55,
  "name": "Search for invalid vehicle registration number read from CSV file using the below \u003cfile-name\u003e example",
  "description": "",
  "id": "getting-vehicle-details;search-for-invalid-vehicle-registration-number-read-from-csv-file-using-the-below-\u003cfile-name\u003e-example",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 56,
  "name": "I get test data from CSV file \u003cfile-name\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "I enter an invalid vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I should be able to get an \"error message\" displayed for invalid registration number",
  "keyword": "Then "
});
formatter.examples({
  "line": 59,
  "name": "",
  "description": "",
  "id": "getting-vehicle-details;search-for-invalid-vehicle-registration-number-read-from-csv-file-using-the-below-\u003cfile-name\u003e-example;",
  "rows": [
    {
      "cells": [
        "file-name"
      ],
      "line": 60,
      "id": "getting-vehicle-details;search-for-invalid-vehicle-registration-number-read-from-csv-file-using-the-below-\u003cfile-name\u003e-example;;1"
    },
    {
      "cells": [
        "file19.csv"
      ],
      "line": 61,
      "id": "getting-vehicle-details;search-for-invalid-vehicle-registration-number-read-from-csv-file-using-the-below-\u003cfile-name\u003e-example;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 34539,
  "status": "passed"
});
formatter.before({
  "duration": 1978495598,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on the DVLAs Vehicles Information Page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I proceed with checking specific details of vehicles as below:",
  "keyword": "And "
});
formatter.match({
  "location": "VehicleSearchSteps.iAmOnTheDVLAsVehiclesInformationPage()"
});
formatter.result({
  "duration": 431126,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iProceedWithCheckingSpecificDetailsOfVehiclesAsBelow()"
});
formatter.result({
  "duration": 1412033511,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "Search for invalid vehicle registration number read from CSV file using the below file19.csv example",
  "description": "",
  "id": "getting-vehicle-details;search-for-invalid-vehicle-registration-number-read-from-csv-file-using-the-below-\u003cfile-name\u003e-example;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 56,
  "name": "I get test data from CSV file file19.csv",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "I enter an invalid vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I should be able to get an \"error message\" displayed for invalid registration number",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "file19.csv",
      "offset": 30
    }
  ],
  "location": "VehicleSearchSteps.iGetTestDataFromCSVFile(String)"
});
formatter.result({
  "duration": 1024229,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iEnterAnInvalidVehicleRegistrationNumberOnTheSearchFieldAndClickToContinue()"
});
formatter.result({
  "duration": 15688150862,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "error message",
      "offset": 28
    }
  ],
  "location": "VehicleSearchSteps.iShouldBeAbleToGetAnDisplayedForInvalidRegistrationNumber(String)"
});
formatter.result({
  "duration": 55859321,
  "status": "passed"
});
formatter.after({
  "duration": 26391,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 64,
  "name": "Search for wrong vehicle registration number read from CSV file using the below \u003cfile-name\u003e example",
  "description": "",
  "id": "getting-vehicle-details;search-for-wrong-vehicle-registration-number-read-from-csv-file-using-the-below-\u003cfile-name\u003e-example",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 65,
  "name": "I get test data from CSV file \u003cfile-name\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "I enter a wrong vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I should be able to get an error Page with \"detailsNotFound error\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 68,
  "name": "",
  "description": "",
  "id": "getting-vehicle-details;search-for-wrong-vehicle-registration-number-read-from-csv-file-using-the-below-\u003cfile-name\u003e-example;",
  "rows": [
    {
      "cells": [
        "file-name"
      ],
      "line": 69,
      "id": "getting-vehicle-details;search-for-wrong-vehicle-registration-number-read-from-csv-file-using-the-below-\u003cfile-name\u003e-example;;1"
    },
    {
      "cells": [
        "file20.csv"
      ],
      "line": 70,
      "id": "getting-vehicle-details;search-for-wrong-vehicle-registration-number-read-from-csv-file-using-the-below-\u003cfile-name\u003e-example;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 46353,
  "status": "passed"
});
formatter.before({
  "duration": 1794692058,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on the DVLAs Vehicles Information Page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I proceed with checking specific details of vehicles as below:",
  "keyword": "And "
});
formatter.match({
  "location": "VehicleSearchSteps.iAmOnTheDVLAsVehiclesInformationPage()"
});
formatter.result({
  "duration": 655280,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iProceedWithCheckingSpecificDetailsOfVehiclesAsBelow()"
});
formatter.result({
  "duration": 1220933039,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "Search for wrong vehicle registration number read from CSV file using the below file20.csv example",
  "description": "",
  "id": "getting-vehicle-details;search-for-wrong-vehicle-registration-number-read-from-csv-file-using-the-below-\u003cfile-name\u003e-example;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 65,
  "name": "I get test data from CSV file file20.csv",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "I enter a wrong vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I should be able to get an error Page with \"detailsNotFound error\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "file20.csv",
      "offset": 30
    }
  ],
  "location": "VehicleSearchSteps.iGetTestDataFromCSVFile(String)"
});
formatter.result({
  "duration": 405684,
  "status": "passed"
});
formatter.match({
  "location": "VehicleSearchSteps.iEnterAWrongVehicleRegistrationNumberOnTheSearchFieldAndClickToContinue()"
});
formatter.result({
  "duration": 16130601362,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "detailsNotFound error",
      "offset": 44
    }
  ],
  "location": "VehicleSearchSteps.iShouldBeAbleToGetAnErrorPageWith(String)"
});
formatter.result({
  "duration": 57843764,
  "status": "passed"
});
formatter.after({
  "duration": 33987,
  "status": "passed"
});
});
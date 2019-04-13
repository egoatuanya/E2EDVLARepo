$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/VehicleSearch.feature");
formatter.feature({
  "line": 2,
  "name": "Validating the details of a vehicle from the DVLA website",
  "description": "As a user\nI want to be able to input the registration number of a vehicle on the DVLA website\nSo that I can validate the authenticity of the vehicle",
  "id": "validating-the-details-of-a-vehicle-from-the-dvla-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Search with a valid registration number to validate the make and colour of the vehicle.",
  "description": "",
  "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-with-a-valid-registration-number-to-validate-the-make-and-colour-of-the-vehicle.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I input a \"valid vehicleRegNumber\" and click to continue",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should be able to see the \"vehicle make\" and the \"vehicle colour\" displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 11,
  "name": "Search with an invalid vehicle registration number to validate that the registration is invalid",
  "description": "",
  "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-with-an-invalid-vehicle-registration-number-to-validate-that-the-registration-is-invalid",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I input an \"invalid vehicleRegNumber\" on the searchField and click to continue",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I should be able to see an \"error message\" displayed for invalid registration number",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 15,
  "name": "Inputting  a wrong vehicle registration number should navigate me to the error message page",
  "description": "",
  "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;inputting--a-wrong-vehicle-registration-number-should-navigate-me-to-the-error-message-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I input a \"wrongVehicle regNumber\" on the searchField",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I click on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should be navigated to an error page with \"detailsNotFound error\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Search for valid vehicle registration number read from CSV files using the below \u003cfile-name\u003e examples",
  "description": "",
  "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I get test data from CSV file \u003cfile-name\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter a valid vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should be able to see the vehicle\u0027s make and colour for each registration number entered",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;",
  "rows": [
    {
      "cells": [
        "file-name"
      ],
      "line": 27,
      "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;1"
    },
    {
      "cells": [
        "file1.csv"
      ],
      "line": 28,
      "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;2"
    },
    {
      "cells": [
        "file2.csv"
      ],
      "line": 29,
      "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;3"
    },
    {
      "cells": [
        "file3.csv"
      ],
      "line": 30,
      "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;4"
    },
    {
      "cells": [
        "file4.csv"
      ],
      "line": 31,
      "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;5"
    },
    {
      "cells": [
        "file5.csv"
      ],
      "line": 32,
      "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;6"
    },
    {
      "cells": [
        "file6.csv"
      ],
      "line": 33,
      "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;7"
    },
    {
      "cells": [
        "file7.csv"
      ],
      "line": 34,
      "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;8"
    },
    {
      "cells": [
        "file8.csv"
      ],
      "line": 35,
      "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;9"
    },
    {
      "cells": [
        "file9.csv"
      ],
      "line": 36,
      "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;10"
    },
    {
      "cells": [
        "file10.csv"
      ],
      "line": 37,
      "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;11"
    },
    {
      "cells": [
        "file11.csv"
      ],
      "line": 38,
      "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;12"
    },
    {
      "cells": [
        "file12.csv"
      ],
      "line": 39,
      "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;13"
    },
    {
      "cells": [
        "file13.csv"
      ],
      "line": 40,
      "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;14"
    },
    {
      "cells": [
        "file14.csv"
      ],
      "line": 41,
      "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;15"
    },
    {
      "cells": [
        "file15.csv"
      ],
      "line": 42,
      "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;16"
    },
    {
      "cells": [
        "file16.csv"
      ],
      "line": 43,
      "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;17"
    },
    {
      "cells": [
        "file17.csv"
      ],
      "line": 44,
      "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;18"
    },
    {
      "cells": [
        "file18.csv"
      ],
      "line": 45,
      "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;19"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "Search for valid vehicle registration number read from CSV files using the below file1.csv examples",
  "description": "",
  "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;2",
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
  "line": 23,
  "name": "I get test data from CSV file file1.csv",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter a valid vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should be able to see the vehicle\u0027s make and colour for each registration number entered",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 29,
  "name": "Search for valid vehicle registration number read from CSV files using the below file2.csv examples",
  "description": "",
  "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;3",
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
  "line": 23,
  "name": "I get test data from CSV file file2.csv",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter a valid vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should be able to see the vehicle\u0027s make and colour for each registration number entered",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 30,
  "name": "Search for valid vehicle registration number read from CSV files using the below file3.csv examples",
  "description": "",
  "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;4",
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
  "line": 23,
  "name": "I get test data from CSV file file3.csv",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter a valid vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should be able to see the vehicle\u0027s make and colour for each registration number entered",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 31,
  "name": "Search for valid vehicle registration number read from CSV files using the below file4.csv examples",
  "description": "",
  "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;5",
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
  "line": 23,
  "name": "I get test data from CSV file file4.csv",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter a valid vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should be able to see the vehicle\u0027s make and colour for each registration number entered",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 32,
  "name": "Search for valid vehicle registration number read from CSV files using the below file5.csv examples",
  "description": "",
  "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;6",
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
  "line": 23,
  "name": "I get test data from CSV file file5.csv",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter a valid vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should be able to see the vehicle\u0027s make and colour for each registration number entered",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 33,
  "name": "Search for valid vehicle registration number read from CSV files using the below file6.csv examples",
  "description": "",
  "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;7",
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
  "line": 23,
  "name": "I get test data from CSV file file6.csv",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter a valid vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should be able to see the vehicle\u0027s make and colour for each registration number entered",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 34,
  "name": "Search for valid vehicle registration number read from CSV files using the below file7.csv examples",
  "description": "",
  "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;8",
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
  "line": 23,
  "name": "I get test data from CSV file file7.csv",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter a valid vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should be able to see the vehicle\u0027s make and colour for each registration number entered",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 35,
  "name": "Search for valid vehicle registration number read from CSV files using the below file8.csv examples",
  "description": "",
  "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;9",
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
  "line": 23,
  "name": "I get test data from CSV file file8.csv",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter a valid vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should be able to see the vehicle\u0027s make and colour for each registration number entered",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 36,
  "name": "Search for valid vehicle registration number read from CSV files using the below file9.csv examples",
  "description": "",
  "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;10",
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
  "line": 23,
  "name": "I get test data from CSV file file9.csv",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter a valid vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should be able to see the vehicle\u0027s make and colour for each registration number entered",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 37,
  "name": "Search for valid vehicle registration number read from CSV files using the below file10.csv examples",
  "description": "",
  "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;11",
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
  "line": 23,
  "name": "I get test data from CSV file file10.csv",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter a valid vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should be able to see the vehicle\u0027s make and colour for each registration number entered",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 38,
  "name": "Search for valid vehicle registration number read from CSV files using the below file11.csv examples",
  "description": "",
  "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;12",
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
  "line": 23,
  "name": "I get test data from CSV file file11.csv",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter a valid vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should be able to see the vehicle\u0027s make and colour for each registration number entered",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 39,
  "name": "Search for valid vehicle registration number read from CSV files using the below file12.csv examples",
  "description": "",
  "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;13",
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
  "line": 23,
  "name": "I get test data from CSV file file12.csv",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter a valid vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should be able to see the vehicle\u0027s make and colour for each registration number entered",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 40,
  "name": "Search for valid vehicle registration number read from CSV files using the below file13.csv examples",
  "description": "",
  "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;14",
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
  "line": 23,
  "name": "I get test data from CSV file file13.csv",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter a valid vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should be able to see the vehicle\u0027s make and colour for each registration number entered",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 41,
  "name": "Search for valid vehicle registration number read from CSV files using the below file14.csv examples",
  "description": "",
  "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;15",
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
  "line": 23,
  "name": "I get test data from CSV file file14.csv",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter a valid vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should be able to see the vehicle\u0027s make and colour for each registration number entered",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 42,
  "name": "Search for valid vehicle registration number read from CSV files using the below file15.csv examples",
  "description": "",
  "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;16",
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
  "line": 23,
  "name": "I get test data from CSV file file15.csv",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter a valid vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should be able to see the vehicle\u0027s make and colour for each registration number entered",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 43,
  "name": "Search for valid vehicle registration number read from CSV files using the below file16.csv examples",
  "description": "",
  "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;17",
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
  "line": 23,
  "name": "I get test data from CSV file file16.csv",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter a valid vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should be able to see the vehicle\u0027s make and colour for each registration number entered",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 44,
  "name": "Search for valid vehicle registration number read from CSV files using the below file17.csv examples",
  "description": "",
  "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;18",
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
  "line": 23,
  "name": "I get test data from CSV file file17.csv",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter a valid vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should be able to see the vehicle\u0027s make and colour for each registration number entered",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 45,
  "name": "Search for valid vehicle registration number read from CSV files using the below file18.csv examples",
  "description": "",
  "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-valid-vehicle-registration-number-read-from-csv-files-using-the-below-\u003cfile-name\u003e-examples;;19",
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
  "line": 23,
  "name": "I get test data from CSV file file18.csv",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter a valid vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should be able to see the vehicle\u0027s make and colour for each registration number entered",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 50,
  "name": "Search for invalid vehicle registration number read from CSV file using the below \u003cfile-name\u003e example",
  "description": "",
  "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-invalid-vehicle-registration-number-read-from-csv-file-using-the-below-\u003cfile-name\u003e-example",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 51,
  "name": "I get test data from CSV file \u003cfile-name\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "I enter an invalid vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I should be able to get an \"error message\" displayed for invalid registration number",
  "keyword": "Then "
});
formatter.examples({
  "line": 54,
  "name": "",
  "description": "",
  "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-invalid-vehicle-registration-number-read-from-csv-file-using-the-below-\u003cfile-name\u003e-example;",
  "rows": [
    {
      "cells": [
        "file-name"
      ],
      "line": 55,
      "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-invalid-vehicle-registration-number-read-from-csv-file-using-the-below-\u003cfile-name\u003e-example;;1"
    },
    {
      "cells": [
        "file19.csv"
      ],
      "line": 56,
      "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-invalid-vehicle-registration-number-read-from-csv-file-using-the-below-\u003cfile-name\u003e-example;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 56,
  "name": "Search for invalid vehicle registration number read from CSV file using the below file19.csv example",
  "description": "",
  "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-invalid-vehicle-registration-number-read-from-csv-file-using-the-below-\u003cfile-name\u003e-example;;2",
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
  "line": 51,
  "name": "I get test data from CSV file file19.csv",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "I enter an invalid vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I should be able to get an \"error message\" displayed for invalid registration number",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 59,
  "name": "Search for wrong vehicle registration number read from CSV file using the below \u003cfile-name\u003e example",
  "description": "",
  "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-wrong-vehicle-registration-number-read-from-csv-file-using-the-below-\u003cfile-name\u003e-example",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 60,
  "name": "I get test data from CSV file \u003cfile-name\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "I enter a wrong vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I should be able to get an error Page with \"detailsNotFound error\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 63,
  "name": "",
  "description": "",
  "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-wrong-vehicle-registration-number-read-from-csv-file-using-the-below-\u003cfile-name\u003e-example;",
  "rows": [
    {
      "cells": [
        "file-name"
      ],
      "line": 64,
      "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-wrong-vehicle-registration-number-read-from-csv-file-using-the-below-\u003cfile-name\u003e-example;;1"
    },
    {
      "cells": [
        "file20.csv"
      ],
      "line": 65,
      "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-wrong-vehicle-registration-number-read-from-csv-file-using-the-below-\u003cfile-name\u003e-example;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 65,
  "name": "Search for wrong vehicle registration number read from CSV file using the below file20.csv example",
  "description": "",
  "id": "validating-the-details-of-a-vehicle-from-the-dvla-website;search-for-wrong-vehicle-registration-number-read-from-csv-file-using-the-below-\u003cfile-name\u003e-example;;2",
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
  "line": 60,
  "name": "I get test data from CSV file file20.csv",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "I enter a wrong vehicle registration number on the searchField and click to continue",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I should be able to get an error Page with \"detailsNotFound error\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});
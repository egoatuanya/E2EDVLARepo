 @regression
Feature: Getting Vehicle Details
  As a user
  I want to be able to get the details of some vehicles of my choice
  So that I can validate the makes and colours of these vehicles.


  Background:
    Given I am on the DVLAs Vehicles Information Page
    And I proceed with checking specific details of vehicles as below:


  Scenario: Enter a valid vehicle registration number and get the make and colour of vehicle
    When I search with a "valid vehicleRegNumber" and click to continue
    Then I should be able to see the "vehicle make" and the "vehicle colour" displayed


  Scenario: Enter an invalid vehicle registration number and receive an error message
    When I enter an "invalid vehicleRegNumber" on the searchField and click to continue
    Then I should be able to see an "error message" displayed for invalid registration number


  Scenario: Enter a wrong vehicle registration number and receive an error page with an error message
    When I enter a "wrongVehicle regNumber" on the searchField
    And I click on the continue button
    Then I should be navigated to an error page with "detailsNotFound error"


  Scenario Outline: Search for valid vehicle registration number read from CSV files using the below <file-name> examples
    When I get test data from CSV file <file-name>
    And I enter a valid vehicle registration number on the searchField and click to continue
    Then I should be able to see the vehicle's make and colour for each registration number entered
    Examples:
      | file-name  |
      | file1.csv  |
      | file2.csv  |
      | file3.csv  |
      | file4.csv  |
      | file5.csv  |
      | file6.csv  |
      | file7.csv  |
      | file8.csv  |
      | file9.csv  |
      | file10.csv |
      | file11.csv |
      | file12.csv |
      | file13.csv |
      | file14.csv |
      | file15.csv |
      | file16.csv |
      | file17.csv |
      | file18.csv |


 Scenario Outline: Search for invalid vehicle registration number read from CSV file using the below <file-name> example
    When I get test data from CSV file <file-name>
    And I enter an invalid vehicle registration number on the searchField and click to continue
    Then I should be able to get an "error message" displayed for invalid registration number
    Examples:
      | file-name  |
      | file19.csv |

  
  Scenario Outline: Search for wrong vehicle registration number read from CSV file using the below <file-name> example
    When I get test data from CSV file <file-name>
    And I enter a wrong vehicle registration number on the searchField and click to continue
    Then I should be able to get an error Page with "detailsNotFound error"
    Examples:
      | file-name  |
      | file20.csv |





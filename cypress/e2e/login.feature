Feature: Login Functionality

  Scenario: User login with valid credentials
    Given User visit to Login page
    When User entered the email "Testing1009@gmail.com" and password "Pawan@1234"
    Then User should land to the My Account Page 


  Scenario: User login with invalid email and password
    Given User visit to Login page
    When User entered the email "Testing1000@gmail.com" and password "Pawan@1333"
    Then User should see an error message


  Scenario: User login with email and invalid password
    Given User visit to Login page
    When User entered the email "Testing1009@gmail.com" and password "Pawan@1333"
    Then User should see an error message

  Scenario: User login with invalid email and password
    Given User visit to Login page
    When User entered the email "Testing10079@gmail.com" and password "Pawan@1234"
    Then User should see an error message    


  Scenario: User login with empty email and password
    Given User visit to Login page
    When User entered the email " " and password " "
    Then User should see an empty field error message   
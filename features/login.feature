Feature: Swag Lab - Login

  Scenario: As a standard_user, I want to log in successfully

    Given Dina is on the login page
    When Dina login with "standard_user" credential
    Then Dina should see home page


  Scenario: As a locked_out_user, I want to log in and display locked message error in loginpage
    Given Dina is on the login page
    When Dina login with "locked_out_user" credential
    Then Dina should see error locked message

  Scenario: As a problem_user, i want to log in and display homepage and showing image dog
    Given Dina is on the login page
    When Dina login with "problem_user" credential
    Then Dina should see home page
    And Dina should see dogs image



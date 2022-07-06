Feature: WebdriverUni Login page

    Scenario: Login with the valid credentials
        Given I access the WebdriverUni Login portal page
        When I enter a username webdriver
        And i enter a password wevdriver123
        And i click on the login button
        Then i should be presented with the following messafe Validation succeeded
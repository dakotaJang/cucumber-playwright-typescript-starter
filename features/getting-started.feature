Feature: Getting started
  Scenario: take screenshot of example website
    Given "https://example.com"
    Then save "example" screenshot

  Scenario: take screenshot of platwright website
    Given "https://playwright.dev"
    Then save "playwright" screenshot

  Scenario: take screenshot of cucumber-js website
    Given "https://github.com/cucumber/cucumber-js#cucumberjs"
    Then save "cucumber-js" screenshot

Feature: Handling alert boxes

  Background:
    Given I am in "testpages.eviltester" page
    When I navigate to Alert Test Page

  Scenario: Testing alert box
    And I click on the alert button
    Then I should see the alert box
    And I should accept the alert

  Scenario: After clicking ok button on confirm box a success message should appear
    And I click on the confirm button
    And I should confirm the dialog
    And I should see a success message

  Scenario: After clicking cancel button on confirm box a false message should appear
    And I click on the confirm button
    And I should cancel the dialog
    And I should see a failure message

  Scenario Outline: Input value in a prompt box should reflect in the return section
    And I enter a "<Value>" in the prompt box
    And I should see the returned "<Value>"

    Examples:
      | Value       |
      | Hello World |

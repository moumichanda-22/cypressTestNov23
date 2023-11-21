Feature: Testing Html Table

  Scenario: Verify the html table content
    Given I am in "testpages.eviltester" page
    When I navigate to Table Test Page
    Then I should see the following table data
    |Name|Amount |
    |Alan|	12   |
    |Bob |	23   |
    |Aleister|	33.3|
    |Douglas |	42  |
    And I can go back to the previous page



Feature: Testing Dynamic Table

  Scenario: Verify the Dynamic Table content

    Given I am in "testpages.eviltester" page
    When I navigate to Dynamic Table Test Page
    And I should see the following Dynamic table data

      | name   | age |
      | Bob    | 20  |
      | George | 42  |

    Then I can modify Dynamic table data
    And I change the caption and ID name
    And Caption and ID should be updated with the new data in following way

      | Name | Color | Height | Weight |
      | Ck   | Black | 2feet  | 50kg   |
      | Mk   | White | 3feet  | 60kg   |


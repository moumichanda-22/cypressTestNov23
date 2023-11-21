Feature: Testing HTML From Elements

  Scenario: Filling out and submitting a form
    Given I am in "testpages.eviltester" page
    When I navigate to Form Example Page
    And I fill in the following form

      | Username | Password | TextArea       | Filename     | MultipleSelectValues | Dropdown         |
      | Moumi    | Chanda   | This is a test file | desktop.png | Selection Item 2     | Drop Down Item 5 |

    And I check the following check boxes:
      | Checkbox   |
      | Checkbox 2 |
    And I choose the following radio buttons:
      | radio 1 |
    Then I should see a success message.


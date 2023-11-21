Feature: Basic web elements page

 Scenario: As an user I should see the web elements
   Given I am in "testpages.eviltester" page
   When I navigate to Basic Web Page Example page
   Then The messages and paragraphs are displayed
   And I can go back to the home page


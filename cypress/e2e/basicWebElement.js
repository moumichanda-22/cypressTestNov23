import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {basicWebElements} from "./pages/BasicWebElements_page"

When(/^I navigate to Basic Web Page Example page$/, function () {
    basicWebElements.navigateToTheBasicWebPage()
});

Then(/^The messages and paragraphs are displayed$/, function () {
    basicWebElements.elements.headingMessage().should('have.text','Basic Web Page Example')
    basicWebElements.elements.explanation().should('contain.text','Very simple web pages have ')
    basicWebElements.elements.para1().should('have.text','A paragraph of text')
    basicWebElements.elements.para2().should('contain.text','Another paragraph')

})

Then(/^I can go back to the home page$/, function () {
    basicWebElements.backToHomePage()
});

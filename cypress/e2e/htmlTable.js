import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {htmlTablePage} from "./pages/htmlTable";
When(/^I navigate to Table Test Page$/, function () {
    htmlTablePage.navigateToTablePage()

});
Then(/^I should see the following table data$/, function (datatable) {
    datatable.hashes().forEach((row)=>{
        htmlTablePage.elements.table().
        should('contain',row.Name).
        and('contain',row.Amount)
    })
    cy.wait(4000)
});
Then(/^I can go back to the previous page$/, function () {
    htmlTablePage.backToTheHomePage()


});

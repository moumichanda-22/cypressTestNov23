import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

import {dynamic} from "./pages/dynamicTable_page";

When(/^I navigate to Dynamic Table Test Page$/, function () {
    dynamic.navigateToTheDynamicTable()
});
When(/^I should see the following Dynamic table data$/, function (datatable) {
    datatable.hashes().forEach((row)=>{
        dynamic.elements.table().should('contain',row.name).
        and('contain',row.age)
    })
});
Then(/^I can modify Dynamic table data$/, function () {
    dynamic.modifiedTable()
});
Then(/^I change the caption and ID name$/, function () {
    dynamic.captionChange()
});
Then(/^Caption and ID should be updated with the new data in following way$/, function (datatable) {
    dynamic.refreshTheTable()
    dynamic.elements.tableCaption().should('have.text','New Table')

    datatable.hashes().forEach((row)=>{
        dynamic.elements.table().should('contain',row.Name).
        and('contain',row.Color).and('contain',row.Height).
        and('contain',row.Weight)})

    cy.go('back').contains('Practice Applications and Pages For Automating and Testing').should('be.visible')
});

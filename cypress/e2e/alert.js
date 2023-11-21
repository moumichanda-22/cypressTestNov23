import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import {alert} from "./pages/alert_page";

When(/^I navigate to Alert_page Test Page$/, function () {
    alert.navigateToAlertTab()

});
When(/^I click on the alert button$/, function () {
    alert.clickToTheAlertButton()
});
Then(/^I should see the alert box$/, function () {
    cy.on("window:alert",(text)=>{
        expect(text).to.equal("I am an alert box!")
    })
});
Then(/^I should accept the alert$/, function () {
    cy.on("window:alert",()=>true)

});
When(/^I click on the confirm button$/, function () {
    alert.clickToTheConfirmButton()
});
Then(/^I should see the confirm box$/, function () {
    cy.on("window:confirm",(confirmText)=>{
        expect(confirmText).to.equal('I am a confirm alert')
    })
});
Then(/^I should confirm the dialog$/, function () {
    cy.on("window:confirm",()=> true)
});
Then(/^I should see a success message$/, function () {
    alert.TrueConfirmation()
});

Then(/^I should cancel the dialog$/, function () {
    alert.clickToTheConfirmButton()
    cy.on('window:confirm', () => false)
});
Then(/^I should see a failure message$/, function () {
    alert.FalseConfirmation()

});
Then(/^I should click on the prompt button and enter a string value in the box$/, function () {
    alert.enterTextInPrompt()

});
Then(/^I should see a return value$/, function () {

});

Given(/^I enter a "([^"]*)" in the prompt box$/, function (text) {
    alert.enterTextInPrompt(text)

});
Given(/^I should see the returned "([^"]*)"$/, function (text) {
    alert.PromptReturn(text)

});
When(/^I navigate to Alert Test Page$/, function () {
    cy.contains('Alerts (JavaScript)').click()
});
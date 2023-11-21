import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given(/^I am in "([^"]*)" page$/, function (url) {
    cy.visit("https://"+url+".com");
});

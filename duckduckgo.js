import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
//import { contains } from "cypress/types/jquery";

When("I visit duckduckgo.com", () => {
  cy.visit("https://www.duckduckgo.com");
  cy.wait(10000)
});

Then("I should see a search bar", () => {
  //cy.wait(10000)
  //cy.get("").contains("id=searchbox_input")
  cy.get('#searchbox_input').should('have.attr','placeholder','Search the web without being tracked')
  
});

/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
  // ===>>> positive test scenario
  // (only crossOriginIsolated, mocker is only)
  it.only("Should be able to submit a successful submission via contact us form", () => {
    // cypress code
    cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
    // cy.get("#contact-us").click({ force: true });
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    //cy.document=>> gets the active window
    cy.title().should("include", "WebDriver | Contact Us");
    // you don't have to take all url, can also just take last words
    cy.url().should("include", "contactus");
    cy.get('[name="first_name"]').type("Joe");
    cy.get('[name="last_name"]').type("blogs");
    cy.get('[name="email"]').type("joe.doe@example.gmx");
    cy.get("textarea.feedback-input").type("my first test with cypress");
    cy.get('[type="submit"]').click();
    cy.get("h1").should("have.text", "Thank You for your Message!");
  });
  // ===>>> negative test scenario
  // ! it.only is to test the chosen option, only 1 scenario will be tested
  // it.only("Should not be able to submit a successful submission via contact us form all fields are required", () => {
  it("Should not be able to submit a successful submission via contact us form all fields are required", () => {
    // cypress code
    cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get('[name="first_name"]').type("Tom");
    cy.get('[name="last_name"]').type("blogs");
    // cy.get('[name="email"]').type("joe.doe@example.gmx");
    cy.get("textarea.feedback-input").type("my first test with cypress");
    cy.get('[type="submit"]').click();
    cy.get("body").contains("Error: all fields are required");
  });
});

/// <reference types="Cypress" />
/// <reference types="Cypress-xpath" />

describe("Test Contact Us form via Automation Test Store", () => {
  it("Should be able to submit a successful submission via contact us form", () => {
    cy.visit("https://automationteststore.com/");
    // ===>>> Default Selector
    //cy.get(".info_links_footer > :nth-child(5) > a").click();
    // ===>>> XPath selector
    //a[contains(@href,"contact")] ==>>>> manually XPath selector, and add it to cy.xpath as below
    //cy.xpath("//a[contains(@href,'contact')]").click();
    // ===>>> CSS selector
    cy.get(" a[href$='contact']")
      .click()
      .then((linkTest) => {
        cy.log("Clicked on link using text: " + linkTest.text());
        // console.log("Clicked on link using text:" + linkTest.text());
      });
    cy.get("#ContactUsFrm_first_name").type("Joe");
    cy.get("#ContactUsFrm_email").type("joe@blogs123.gmail.com");
    // Minimize Test Runner
    cy.get("#ContactUsFrm_email").should("have.attr", "name", "email");
    cy.get("#ContactUsFrm_enquiry").type(
      "Do you provide additional discount on bulk orders?"
    );
    //cy.get(".col-md-6 > .btn").click();
    // ===>>> exchange above code with  CSS selector for dynamic case
    cy.get("button[title = 'Submit']").click();
    cy.get(".mb40 > :nth-child(3)").should(
      "have.text",
      "Your enquiry has been successfully sent to the store owner!"
    );
    cy.log("Test has completed");
  });
});

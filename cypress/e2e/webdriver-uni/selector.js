/// <reference types="Cypress" />
describe("Selector examples", () => {
  it("Examples of Selectors via WebdriverUni Contact Us Page", () => {
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");

    // $===>>> end in the text
    // ^===>>> starts with

    //By tag name
    cy.get("input");

    //By attribute name and value
    cy.get("input[name='first_name']");

    //By id
    cy.get("#contact_me");

    //By multiple classes
    cy.get("[class='navbar navbar-inverse navbar-fixed-top']");

    //By two different attributes
    cy.get("[name='email'], [placeholder='Email Address']");

    //a[href $="contact"]
    //button[title="Submit"]

    //By xpath
    cy.xpath("//input[@name='first_name']");

    //By text name
    cy.xpath("//*[text()='CONTACT US']");

    cy.xpath("//form[@id='contact_form']");

    cy.xpath("//input[contains(@name,'la')]");

    cy.xpath("//*[starts-with(text(), 'Co')]");

    // cy.xpath("//h2[starts-with(text(),'Con']/following-sibling::ul/*")
    // a[contains(@href, "contact")] ===>>> here contact comes last word of "contact" in "https://blabla/contact"
  });
});

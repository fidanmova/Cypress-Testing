/// <reference types="Cypress" />

describe("Iterate over element", () => {
  it("Log information all hair care products ", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log("Items: " + index + " : " + $el.text());
    });
  });
  // !! Use IF
  it("Add specific products to basket", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if ($el.text().includes("Eau Parfumee au The Vert Shampoo")) {
        cy.wrap($el).click();
        // !! Same result with this method as well
        //   if ($el.text() === "Eau Parfumee au The Vert Shampoo") {
        //    cy.wrap($el).click();
      } else {
      }
    });
  });
});

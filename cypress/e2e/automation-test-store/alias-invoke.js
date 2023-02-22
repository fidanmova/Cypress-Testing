/// <reference types="Cypress" />
// Alias command is ==>>  as and use @
describe("Alias and Invoke", () => {
  it("Validate a specific hair care product", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname")
      .eq(0)
      .invoke("text")
      .as("productThumbnail");
    // "be.gt", 5 ==>> means greater than 5
    cy.get("@productThumbnail").its("length").should("be.gt", 5);
    cy.get("@productThumbnail").should("include", "Seaweed Conditioner");
  });

  // Task
  it("Validate product thumbnail", () => {
    cy.visit("https://automationteststore.com/");

    cy.get(".thumbnail").as("ProductThumbnail");
    cy.get("@ProductThumbnail").should("have.length", 16);
    cy.get("@ProductThumbnail")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart");
  });

  it.only("Calculate total of normal and sale products", () => {
    cy.visit("https://automationteststore.com/");

    cy.get(".thumbnail").as("ProductThumbnail");
    // cy.get("@ProductThumbnail")
    //   .find(".oneprice")
    //   .each(($el, index, $list) => {
    //     cy.log($el.text());
    //   });
    cy.get(".thumbnail").find(".oneprice").invoke("text").as("itemPrice");
    cy.get(".thumbnail").find(".pricenew").invoke("text").as("saleItemPrice");

    // Non sale price items total
    var itemsTotal = 0;
    cy.get("@itemPrice").then(($linkText) => {
      var itemsPriceTotal = 0;
      var itemPrice = $linkText.split("$");
      var i;
      for (i = 0; i < itemPrice.length; i++) {
        cy.log(itemPrice[i]);
        itemsPriceTotal += Number(itemPrice[i]);
      }
      itemsTotal += itemsPriceTotal;
      cy.log("Non sale price items total: " + itemsPriceTotal);
    });

    ////  sale price items total
    cy.get("@saleItemPrice")
      .then(($linkText) => {
        var saleItemsPrice = 0;
        var saleItemPrice = $linkText.split("$");
        var i;
        for (i = 0; i < saleItemPrice.length; i++) {
          cy.log(saleItemPrice[i]);
          saleItemsPrice += Number(saleItemPrice[i]);
        }
        itemsTotal += saleItemsPrice;
        cy.log("Sale items Price total " + saleItemsPrice);
      })
      .then(() => {
        cy.log("The total price of all products: " + itemsTotal);
        expect(itemsTotal).to.equal(669);
      });
  });
});

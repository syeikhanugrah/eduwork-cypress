/// <reference types="cypress" />

describe("Fitur checkout", function () {
  it("Pastikan standard_user bisa menyelesaikan checkout", function () {
    cy.fixture("saucedemo").then(function (data) {
      cy.login(data.standard_user.username, data.standard_user.password);

      // Tambah produk ke keranjang belanja
      // Klik icon keranjang belanja
      // Klik checkout

      cy.get("#add-to-cart-sauce-labs-backpack").click();
      cy.get("#shopping_cart_container").click();
      cy.get("#checkout").click();

      cy.fillCheckoutForm(
        data.standard_user.first_name,
        data.standard_user.last_name,
        data.standard_user.zip_code
      );

      cy.get("#finish").click();
    });
  });

  it("Pastikan performance_glitch_user bisa menyelesaikan checkout", function () {
    cy.login("performance_glitch_user", "secret_sauce");

    // Tambah produk ke keranjang belanja
    // Klik icon keranjang belanja
    // Klik checkout

    cy.get("#add-to-cart-sauce-labs-bike-light").click();
    cy.get("#shopping_cart_container").click();
    cy.get("#checkout").click();

    cy.fillCheckoutForm("Budi", "Santoso", "16610");

    cy.get("#finish").click();
  });
});

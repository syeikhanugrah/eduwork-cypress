/// <reference types="cypress" />

/**
 * Komponen testcase:
 *
 * 1. Testcase ID
 * 2. Title/Description
 * 3. Step
 * 4. Actual result: hasil yang didapat
 * 5. Expected result: hasil yang diinginkan
 * 6. Status: PASS/FAIL
 *
 */

/* Test scenario: Login ke aplikasi saucelabs */

/**
 * Testcase ID: TC1
 * Title/Description: Berhasil login ke saucelabs dengan menggunakan username standard_user & password secret_sauce
 * Step:
 *   1. Mengunjungi halaman login saucelabs
 *   2. Mengisi username "standard_user" pada input username
 *   3. Mengisi password "secret_sauce" pada input password
 *   4. Click tombol "LOGIN"
 *
 * Actual result: (Isi ketika testcase sudah di eksekusi
 * Expected result: Berhasil login & ter-redirect ke halaman list product saucelabs
 *   - URL mengandung text "inventory.html"
 *
 * Testcase ID: TC2
 * Title/Description: Berhasil login ke saucelabs dengan menggunakan username problem_user & password secret_sauce
 * Step:
 *   1. Mengunjungi halaman login saucelabs
 *   2. Mengisi username "problem_user" pada input username
 *   3. Mengisi password "secret_sauce" pada input password
 *   4. Click tombol "LOGIN"
 *
 * Actual result: (Isi ketika testcase sudah di eksekusi
 * Expected result: Berhasil login & ter-redirect ke halaman list product saucelabs
 *   - URL mengandung text "inventory.html"
 */

/**
 * Selector: https://www.w3schools.com/cssref/css_selectors.asp
 * Actionable: https://docs.cypress.io/guides/core-concepts/interacting-with-elements#Actionability
 * Chainers: https://docs.cypress.io/guides/references/assertions#BDD-Assertions
 * Common assertion: https://docs.cypress.io/guides/references/assertions#Common-Assertions
 */

describe("Login ke aplikasi saucelabs", function () {
  it("TC1: Berhasil login ke saucelabs dengan menggunakan username standard_user & password secret_sauce", function () {
    cy.visit("https://www.saucedemo.com");

    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");

    cy.get("#login-button").click();

    cy.url().should("include", "/inventory.html");
  });

  it("TC2: Berhasil login ke saucelabs dengan menggunakan username problem_user & password secret_sauce", function () {
    cy.visit("https://www.saucedemo.com");

    cy.get("#user-name").type("problem_user");
    cy.get("#password").type("secret_sauce");

    cy.get("#login-button").click();

    cy.url().should("include", "/inventory.html");
  });
});

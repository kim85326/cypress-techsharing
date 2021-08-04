describe("Home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display title", () => {
    const expectedTitle = "End-to-End Testing with Cypress.io Workshop";
    cy.contains(expectedTitle);
  });

  it("should go to home page when click 'Home' link", () => {
    cy.findByText("Home")
      .click()
      .then(() => {
        cy.url().should("eq", Cypress.config().baseUrl + "/");
      });
  });

  it("should go to group page when click 'Groups' link", () => {
    cy.findByRole("link", { name: "Groups" }).click();
    cy.url().should("include", "/groups");
  });

  // cross origin error
  it.skip("should go to cypress when click cypress link", () => {
    cy.findByRole("link", { name: /visit cypress\.io/i }).click();
    cy.url().should("eq", "https://cypress.io");
  });
});

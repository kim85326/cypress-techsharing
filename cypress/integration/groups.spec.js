describe("Groups page", () => {
  beforeEach(() => {
    cy.visit("/groups");
  });

  it("can edit", () => {
    cy.contains("Shenzhen Tech Community")
      .parent()
      .findByRole("button", { name: "Edit" })
      .click()
      .then(() => {
        cy.url().should("contains", "/group/3");
        cy.get('#address').clear().type("a address");
        cy.get('#city').clear().type("b city");
        cy.get('#stateOrProvince').clear().type("d state");
        cy.get('#country').clear().type("e country");
        cy.get('#postalCode').clear().type("123456");
        cy.get('[type="submit"]').click();

        cy.contains("Shenzhen Tech Community")
          .parent()
          .contains("a address b city d state e country 123456");
      });
  });

  it("can delete", () => {
    cy.contains("Shanghai Tech Community")
      .parent()
      .findByRole("button", { name: "Delete" })
      .click()
      .then(() => {
        cy.contains("Shanghai Tech Community").should("not.exist");
      });
  });
});

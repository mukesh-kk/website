describe("Test the enterprise license form", () => {
  it.only("Fills out the form data", () => {
    cy.visit("/enterprise-license");
    cy.findByLabelText(/first name/i)
      .click()
      .type("Kumquat");
    cy.findByLabelText(/last name/i)
      .click()
      .type("User");
    cy.findByLabelText(/email/i).click().type("kumquatuser@gitpod.io");
    cy.findByLabelText(/company/i)
      .click()
      .type("gitpod.io");
    cy.findByLabelText("country").select("Pakistan");
    cy.findByLabelText(/noofengineers/i).select("1-10");
    cy.findByLabelText(/how can we help?/i)
      .click()
      .type("Gitpod is Awesome!");
    cy.findByLabelText(
      "I consent to having this website store my submitted information so that the sales team can respond to my inquiry."
    ).click({ force: true });
    cy.findByText("Receive license").click();
  });
});

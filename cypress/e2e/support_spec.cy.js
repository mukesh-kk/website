describe("Test the support contact form", () => {
  it("Fills out the form data", () => {
    cy.visit("/contact/support");
    cy.wait(100);
    cy.findByText(/billing/i).click();
    cy.findByLabelText(/name/i).click().type("Gitpod User");
    cy.findByLabelText(/mail/i).click().type("gitpoduser@gitpod.io");
    cy.findByLabelText(/How can we help you/i)
      .click()
      .type("Gitpod is Awesome!");
    cy.findByLabelText(
      "I consent to having this website store my submitted information so that a support staff can respond to my inquiry."
    ).click({ force: true });
    cy.findByText("Send message").click();
  });
});

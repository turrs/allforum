describe("Login spec", () => {
  it("should display login page correctly", () => {
    cy.visit("http://localhost:3000/");

    // memverifikasi elemen yang harus tampak pada halaman login
    cy.get('input[placeholder="Username"]').should("be.visible");
    cy.get('input[placeholder="Password"]').should("be.visible");
    cy.get("button")
      .contains(/^Login$/)
      .should("be.visible");
  });
});

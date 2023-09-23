describe("Open google and search", () => {
    it("Visit google by link", () => {
        cy.visit("https://www.google.com/");
        cy.get('[id="APjFqb"]').type("Moath Hjjawi");
        cy.get('.gNO89b').eq(0).click();
    });
});
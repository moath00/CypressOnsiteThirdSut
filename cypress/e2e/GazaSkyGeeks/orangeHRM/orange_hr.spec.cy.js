import LoginPage from "../../../pageObjects/loggingIn";


const LoginObject = new LoginPage();

describe("Visit the log in page", function () {
    it("Login correct", function () {
        cy.visit("https://opensource-demo.orangehrmlive.com");
        LoginObject.login("Admin", "admin123");
    })

    it("Login incorrect1", function () {
        cy.visit("https://opensource-demo.orangehrmlive.com");
        cy.get('[placeholder="Username"]').type('Admin');
        cy.get('button').click();
    });

    it("Login incorrect2", function () {
        cy.visit("https://opensource-demo.orangehrmlive.com");
        cy.get('[placeholder="Password"]').type('admin123');
        cy.get('button').click();
    });

    it.only("Visit Recruitment page and click add button", function () {
        cy.visit("https://opensource-demo.orangehrmlive.com");
        cy.get('[placeholder="Username"]').type('Admin');
        cy.get('[placeholder="Password"]').type('admin123');
        cy.get('button').click();
        cy.get('[href="/web/index.php/recruitment/viewRecruitmentModule"]').click();
        cy.get(".oxd-button .oxd-button--medium .oxd-button--secondary").click();
    });
})
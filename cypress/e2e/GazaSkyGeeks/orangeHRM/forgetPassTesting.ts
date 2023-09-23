import { now } from "cypress/types/lodash";
import ForgottenPassword from "../../../support/pageObjects/forgetPassword";
import LoginPage from "../../../support/pageObjects/loggingIn";


const LoginObject = new LoginPage();

const ForgottenPsWrd = new ForgottenPassword();

describe("Login page", function () {
    this.beforeEach("Visit login page", function () {
        cy.visit("/");
        // Login first
        LoginObject.login("Admin", "admin123");
    });

    it("Login correct", function () {
        LoginObject.login("Admin", "admin123");
    });

    it("Login incorrect1", function () {
        cy.get('[placeholder="Username"]').type('Admin');
        cy.get('button').click();
    });

    it("Login incorrect2", function () {
        cy.get('[placeholder="Password"]').type('admin123');
        cy.get('button').click();
    });

    it("Visit Recruitment page and click add button", function () {
        LoginObject.login("Admin", "admin123");
        cy.get('[href="/web/index.php/recruitment/viewRecruitmentModule"]').click();
        cy.get(".oxd-button .oxd-button--medium .oxd-button--secondary").click();
    });

    it("Forget password", function () {
        ForgottenPsWrd.walkFGP('[data-v-7b563373]', '[placeholder="Username"]', "moath", '[type="submit"]', "Reset Password link sent successfully");
    });

    it("API request 200", function () {
        cy.request("https://opensource-demo.orangehrmlive.com/web/dist/fonts/nunito-sans-v6-latin-ext_latin-regular.woff2").then((response) => {
            expect(response).property('status').to.equal(200);
        });
    });

    it("API request test with response details", function () {
        // // Login first
        // LoginObject.login("Admin", "admin123");
      
        // Generate a unique username based on the current timestamp
        const timestamp = new Date().getTime();
        const username = `moath${timestamp}`;

        // Make the API request
        cy.request({
            url: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users",
            method: "POST",
            body: {username: `${username}`, password: "moath123", status: true, userRoleId: 1, empNumber: 100},
            }).then((response) => {
            // Assert that the response status code is 200
            expect(response.status).to.equal(200);
            });
        });

        it.only("Visit the PIM page", function () {
            cy.visit('/pim/viewEmployeeList');
        });
      
});
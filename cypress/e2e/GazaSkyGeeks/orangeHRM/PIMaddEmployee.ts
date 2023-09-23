import addEmployee from "../../../support/pageObjects/addEmployee";
import LoginPage from "../../../support/pageObjects/loggingIn";

const addEmp: addEmployee = new addEmployee();
const loginObj: LoginPage = new LoginPage();

describe("PIM page", () => {
    it("Visit PIM page then add employee", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com");
        loginObj.login("Admin", "admin123");
        addEmp.addNewEmployee("Moath", "M.", "Hjjawi");
        cy.get(".oxd-switch-input").click({ force: true });
    });
});
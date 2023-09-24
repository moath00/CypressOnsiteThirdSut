import newLogin from '../../../support/pageObjects/newLogin';
import FixtureDataGetter from '../../../support/pageObjects/dataFromFixture';

const login = new newLogin();
const data = new FixtureDataGetter();

beforeEach(() => cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php"));

// 1
describe("Log in page - clickable button", () => {
    it("Admin can click on 'log in' button", function () {
        cy.get('[type="submit"]').click();
        cy.contains(".oxd-input-field-error-message", "Required");
    });
});

// 2
describe("Log in page - incorrect all fields", function () {
    it("Admin can't log in wrongly", function () {
        cy.fixture('loginData.json').as('data');
        cy.get('@data').then((data: any) => {
            login.login(data.wrongUsername, data.wrongPassword);
        });
        cy.contains(".oxd-alert-content-text", "Invalid credentials");
    });
});

// 3
describe("Log in page - incorrect password only", () => {
    it("Admin can't log in wrongly", () => {
        cy.fixture('loginData.json').as('data');
        cy.get('@data').then((data: any) => {
            login.login(data.correctUsername, data.wrongPassword);
        });
        cy.contains(".oxd-alert-content-text", "Invalid credentials");
    });
});

// 4
describe("Log in page - incorrect username only", () => {
    it("Admin can't log in wrongly", () => {
        cy.fixture('loginData.json').as('data');
        cy.get('@data').then((data: any) => {
            login.login(data.wrongUsername, data.correctPassword);
        });
        cy.contains(".oxd-alert-content-text", "Invalid credentials");
    });
});

// 5
describe("Log in page - correct fields", () => {
    it("Admin can log in correctly", () => {
        cy.fixture('loginData.json').as('data');
        cy.get('@data').then((data: any) => {
            login.login(data.correctUsername, data.correctPassword);
        });
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    });
});

// 6
describe("Log in page - empty username / correct password", () => {
    it("Admin can't log in wrongly - with empty", () => {
        cy.fixture('loginData.json').as('data');
        cy.get('@data').then((data: any) => {
            login.login(data.emptyUsername, data.correctPassword);
        });
        cy.contains(".oxd-input-field-error-message", "Required");
    });
});

// 7
describe("Log in page - empty username / wrong password", () => {
    it("Admin can't log in wrongly - with empty", () => {
        cy.fixture('loginData.json').as('data');
        cy.get('@data').then((data: any) => {
            login.login(data.emptyUsername, data.wrongPassword);
        });
        cy.contains(".oxd-input-field-error-message", "Required");
    });
});

// 8
describe("Log in page - wrong username / empty password", () => {
    it("Admin can't log in wrongly - with empty", () => {
        cy.fixture('loginData.json').as('data');
        cy.get('@data').then((data: any) => {
            login.login(data.wrongUsername, data.emptyPassword);
        });
        cy.contains(".oxd-input-field-error-message", "Required");
    });
});

// 9
describe("Log in page - correct username / empty password", () => {
    it("Admin can't log in wrongly - with empty", () => {
        cy.fixture('loginData.json').as('data');
        cy.get('@data').then((data: any) => {
            login.login(data.correctUsername, data.emptyPassword);
        });
        cy.contains(".oxd-input-field-error-message", "Required");
    });
});

// 10
describe("Log in page - empty fields", () => {
    it("Admin can't log in wrongly - all empty", () => {
        cy.get('[type="submit"]').click();
        cy.contains(".oxd-input-field-error-message", "Required");
    });
});
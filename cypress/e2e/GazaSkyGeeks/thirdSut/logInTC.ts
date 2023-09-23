import newLogin from '../../../support/pageObjects/newLogin';
import urlGetter from '../../../support/pageObjects/urlGetter';
import FixtureDataGetter from '../../../support/pageObjects/dataFromFixture';

const login = new newLogin();
const getURL = new urlGetter();
const data = new FixtureDataGetter();

beforeEach(() => cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php"));

// 1
describe("Log in page - clickable button", () => {
    it("Admin can click on 'log in' button", () => {
        cy.get('[type="submit"]').click();
        cy.contains(".oxd-input-field-error-message", "Required");
    });
});

// 2
describe("Log in page - incorrect all fields", () => {
    it("Admin can't log in wrongly", () => {
        // const wrongUserAndPassword:string[] = data.getter()[0];
        login.login("test", "test123");
        cy.contains(".oxd-alert-content-text", "Invalid credentials");
    });
});

// 3
describe("Log in page - incorrect password only", () => {
    it("Admin can't log in wrongly", () => {
        // const correctUserAndWrongPassword = data.getter()[1];
        login.login("Admin", "test123");
        cy.contains(".oxd-alert-content-text", "Invalid credentials");
    });
});

// 4
describe("Log in page - incorrect username only", () => {
    it("Admin can't log in wrongly", () => {
        // const wrongUserAndCorrectPassword = data.getter()[2];
        login.login("Test", "admin123");
        cy.contains(".oxd-alert-content-text", "Invalid credentials");
    });
});

// 5
describe("Log in page - correct fields", () => {
    it("Admin can log in correctly", () => {
        // const wrongUserAndCorrectPassword = data.getter()[2];
        login.login("Admin", "admin123");
        // getURL()
    });
});

// 6
describe("Log in page - empty username / correct password", () => {
    it("Admin can't log in wrongly - with empty", () => {
        // const wrongUserAndCorrectPassword = data.getter()[2];
        login.login("", "admin123");
        cy.contains(".oxd-input-field-error-message", "Required");
    });
});

// 7
describe("Log in page - empty username / wrong password", () => {
    it("Admin can't log in wrongly - with empty", () => {
        // const wrongUserAndCorrectPassword = data.getter()[2];
        login.login("", "test123");
        cy.contains(".oxd-input-field-error-message", "Required");
    });
});

// 8
describe("Log in page - wrong username / empty password", () => {
    it("Admin can't log in wrongly - with empty", () => {
        // const wrongUserAndCorrectPassword = data.getter()[2];
        login.login("test", "");
        cy.contains(".oxd-input-field-error-message", "Required");
    });
});

// 9
describe("Log in page - correct username / empty password", () => {
    it("Admin can't log in wrongly - with empty", () => {
        // const wrongUserAndCorrectPassword = data.getter()[2];
        login.login("Admin", "");
        cy.contains(".oxd-input-field-error-message", "Required");
    });
});

// 10
describe("Log in page - empty fields", () => {
    it("Admin can't log in wrongly - all empty", () => {
        // const wrongUserAndCorrectPassword = data.getter()[2];
        login.login("", "");
        cy.contains(".oxd-input-field-error-message", "Required");
    });
});
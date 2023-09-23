class newLogin {

    elements = {
        usernameField: () => cy.get('[placeholder = "Username"]'),
        passwordField: () => cy.get('[placeholder = "Password"]'),
        loginBtn: () => cy.get('[type="submit"]').click()
    }

    login(username: string, password: string) {
        this.elements.usernameField().type(username, {force: true});
        this.elements.passwordField().type(password, {force: true});
        this.elements.loginBtn();
    }

}

export default newLogin;
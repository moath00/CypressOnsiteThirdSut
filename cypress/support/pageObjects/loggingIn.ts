class LoginPage {
    username = () => cy.get('[placeholder="Username"]');
    password = () => cy.get('[placeholder="Password"]');
    loggingBtn = () => cy.get('button').click();

    login(username: string, password:string) {
        this.username().type(username);
        this.password().type(password);
        this.loggingBtn();
    }

}

export default LoginPage;
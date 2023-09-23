class ForgottenPassword {
    FGPelements = {
        forgetPasswordElement: (FGPresetLink: string) => cy.get(FGPresetLink),
        usernameField: (usernameField: string) => cy.get(usernameField),
        submissionUsername: (submitBtn: string) => cy.get(submitBtn),
        checker: (text: string) => cy.contains(text),
    }

    walkFGP(FGPresetLink: string, usernameField: string, name: string, submitBtn: string, text: string) {
        this.FGPelements.forgetPasswordElement(FGPresetLink).eq(3).click();
        this.FGPelements.usernameField(usernameField).type(name);
        this.FGPelements.submissionUsername(submitBtn).click();
        this.FGPelements.checker(text).should("exist");
    }

}

export default ForgottenPassword;
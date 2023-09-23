class FixtureDataGetter {

    elements = {
        correctData: (): Array<string> => {
            let correctUser: string;
            let correctPass: string;
            cy.fixture('loginData').as('correctData');
            cy.get('@correctData').then((data) => {
                correctUser = data["correctUsername"];
                correctPass = data["correctPassword"];
            });

            return [correctUser, correctPass];
        },
        incorrectPassword: () => {
            let correctUser: string;
            let correctPass: string;
            cy.fixture('loginData').as('correctData');
            cy.get('@correctData').then((data) => {
                correctUser = data["correctUsername"];
                correctPass = data["wrongPassword"];
            });
        },
        incorrectUsername: () => {
            let correctUser: string;
            let correctPass: string;
            cy.fixture('loginData').as('correctData');
            cy.get('@correctData').then((data) => {
                correctUser = data["wrongUsername"];
                correctPass = data["correctPassword"];
            });
        },
        incorrectData: () => {
            let correctUser: string;
            let correctPass: string;
            cy.fixture('loginData').as('correctData');
            cy.get('@correctData').then((data) => {
                correctUser = data["wrongUsername"];
                correctPass = data["wrongPassword"];
            });
        },
        onlyUsername: () => {
            let correctUser: string;
            cy.fixture('loginData').as('correctData');
            cy.get('@correctData').then((data) => {
                correctUser = data["correctUsername"];
            });
        },
        onlyPassword: () => {
            let correctUser: string;
            let correctPass: string;
            cy.fixture('loginData').as('correctData');
            cy.get('@correctData').then((data) => {
                correctUser = data["correctUsername"];
                correctPass = data["correctPassword"];
            });
        },
        empty: () => { ["", ""] }
    }

    getter() {
        return [
            this.elements.correctData(),
            this.elements.incorrectUsername(),
            this.elements.incorrectPassword(),
            this.elements.incorrectData(),
            this.elements.onlyUsername(),
            this.elements.onlyPassword(),
            this.elements.empty()
        ]
    }
}

export default FixtureDataGetter;
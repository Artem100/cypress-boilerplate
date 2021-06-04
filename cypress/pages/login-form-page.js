class LoginForm {

    open() {
        cy.visit(Cypress.config("baseUrl") + "/login")
        // cy.visit(`${Cypress.config('baseUrl')}/login}`)
    }

    loginInput() {
        return cy.get("#login_field")
    }


    passwordInput() {
        return cy.get("#password")
    }

    submitButton() {
        return cy.get("input[name='commit']")
    }

    errorBlock() {
        return cy.get("#js-flash-container").children("div")
    }

    errorCloseButton() {
        return this.errorBlock().find("button"); // xpath / //
    }

    // input[name='commit']
    // passwordInput: () => cy.get("#password")

}

export const loginForm = new LoginForm();
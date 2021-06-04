/// <reference types="cypress" />

import { loginForm } from "../../pages/login-form-page"


describe("Login page", () => {

    context("Auth", () => {

        beforeEach(() => {

            loginForm.open();
        })

        it("Invalid auth", () => {

            cy.auth("Hello", "Hi!");
            loginForm.errorBlock().should("exist")
            loginForm.errorCloseButton().click()
            loginForm.errorBlock().should("not.exist")
        })

        it.only("Valid auth", () => {
            cy.auth("JockMa12", "scIE312i");
            cy.url().should('eq', Cypress.config("baseUrl"))
            cy.log(Cypress.env("myVar"))
        })
        
    })

    context("Register", () => {

        
    })

})
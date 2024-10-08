/// <reference types="cypress" />

describe("validate webdriver uni homepage links", () => {
    it("confirms links redirects to the correct page", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#contact-us').invoke('removeAttr','target').click({force: true})
        cy.url().should('include','contactus')

        cy.go('back');
        cy.reload()
        cy.url().should('include','http://www.webdriveruniversity.com')
        //cy.reload(true) //reload without using cache

        cy.go('forward')
        cy.url().should('include','contactus')   

        cy.go('back')
        cy.get('#login-portal').invoke('removeAttr','target').click({force: true})
        cy.url().should('include','Login-Portal')
        cy.go('back')


        //Assignment
        cy.get('#to-do-list').invoke('removeAttr','target').click({force: true})
        cy.url().should('include','To-Do-List')
        cy.go('back')
    });
})
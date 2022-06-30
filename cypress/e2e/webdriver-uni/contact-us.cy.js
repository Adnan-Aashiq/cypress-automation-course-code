/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    before(function () {
        cy.fixture('example').then(function (data) {
            globalThis.data = data;
        })
    })
    it.only("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        //cy.pause()
        //to add assertions in the html document  
        cy.document().should('have.property', 'charset').and('equal', 'UTF-8')
        //include doesnot matches all the desired values if only a small part is found it doesnot throw error
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.title().should('include', 'WebDriver')
        //to add assertions in the url and it treats it like a string 
        cy.url().should('include', '/Contact-Us/contactus')
        cy.get('[name="first_name"]').type(data.first_name);
        cy.get('[name="last_name"]').type(data.last_name);
        cy.get('[name="email"]').type(data.email)
        cy.get('textarea.feedback-input').type(data.feedback)
        cy.get('[type="submit"]').click();
        //cy.pause()
        cy.get('h1').contains('Thank You for your Message!');
        cy.screenshot("submission")
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        if (Cypress.isBrowser('firefox')) {
            
        }
        else {
            cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
            cy.get('[name="first_name"]').type(data.first_name);
            cy.get('[name="last_name"]').type(data.last_name);
            cy.get('textarea.feedback-input').type(data.feedback)
            cy.get('[type="submit"]').click();
            cy.get('body').contains('Error: Invalid email address');
            cy.screenshot("submission1")
        }

    });
})
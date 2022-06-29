/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    before(function () {
        cy.fixture('example').then(function (data) {
            globalThis.data = data;
        })
    })
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        //to add assertions in the html document  
        cy.document().should('have.property', 'charset').and('equal', 'UTF-8')
        //include doesnot matches all the desired values if only a small part is found it doesnot throw error
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.title().should('include', 'WebDriver')
        //to add assertions in the url and it treats it like a string 
        cy.url().should('include', '/Contact-Us/contactus')
        cy.webdriverUni_ContactForm_Submission(data.first_name,data.last_name,data.email,
            data.feedback, 'h1','Thank You for your Message!')
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.webdriverUni_ContactForm_Submission(data.first_name,data.last_name," " ,
        data.feedback, 'body','Error: Invalid email address')
    });
})
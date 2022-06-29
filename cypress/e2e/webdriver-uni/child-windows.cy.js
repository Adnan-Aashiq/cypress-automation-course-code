/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    before(function(){
        cy.fixture('example').then(function(data){
            globalThis.data = data;
        })
    })
    
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("http://www.webdriveruniversity.com");
        //just removed the attribute which causes to open that in new tab
        cy.get('#contact-us').invoke('removeAttr','target').click({force: true})
        //to add assertions in the html document  
        cy.document().should('have.property','charset').and('equal','UTF-8')
        //include doesnot matches all the desired values if only a small part is found it doesnot throw error
        cy.title().should('include','WebDriver | Contact Us')
        cy.title().should('include','WebDriver')
        //to add assertions in the url and it treats it like a string
        cy.url().should('include','/Contact-Us/contactus')
        cy.get('[name="first_name"]').type(data.first_name);
        cy.get('[name="last_name"]').type(data.last_name);
        cy.get('[name="email"]').type(data.email)
        cy.get('textarea.feedback-input').type(data.feedback)
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text','Thank You for your Message!');
    });
    // before(function(){
    //     cy.fixture('userDetails').as("user")
    // })
    // it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    //     cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    //     cy.get("@user").then((user) => {
    //         cy.get('[name="first_name"]').type(user.first_name);
    //         cy.get('[name="last_name"]').type(user.last_name);
    //         cy.get('[name="email"]').type(user.email)
    //         cy.get('textarea.feedback-input').type(user.feedback)
    //     })
    //     cy.get('[type="submit"]').click();
    //     cy.get('body').contains('Error: Invalid email address');
    // });
})
/// <reference types="cypress" />

describe("Verify check boxes via web driver uni", () => {
    beforeEach(()=>{
        cy.visit("http://www.webdriveruniversity.com",{timeout : 60000}); 
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })
    })
    it("check and validate checkbox", () => {
        
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
        cy.get('@option-1').check().should('be.checked')

        cy.get('#checkboxes > :nth-child(5) > input').as('option-3')
        cy.get('@option-3').uncheck().should('not.be.checked')
    })
    it("to check all the check boxes", () => {
        //have to pass the value from the tags in check()
        cy.get("input[type='checkbox']").check(["option-1","option-2","option-3","option-4"]).should('be.checked')
    })

});
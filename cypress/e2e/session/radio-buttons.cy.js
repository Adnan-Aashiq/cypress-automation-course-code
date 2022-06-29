/// <reference types="cypress" />

describe("Verify radio buttons via web driver uni", () => {
    before(()=>{
        cy.visit("http://www.webdriveruniversity.com"); 
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })
    })
    it("check 1st radio button", () => {
        cy.get('#radio-buttons').find("input[type='radio']").first().check();
    })
    it("check any radio button by using index", () => {
        cy.get('#radio-buttons').find("input[type='radio']").eq(1).check();
    })
    it("Validating radio buttons check status", () => {
        cy.get("input[value='lettuce']").should('not.be.disabled')
        cy.get("input[value='lettuce']").should('not.be.checked')
        cy.get("input[value='pumpkin']").should('be.checked')
        cy.get("input[value='pumpkin']").should('not.be.disabled')


        cy.get("input[value='lettuce']").should('not.be.disabled')
        cy.get("input[value='lettuce']").check()
        cy.get("input[value='lettuce']").should('be.checked')
        cy.get("input[value='pumpkin']").should('not.be.disabled')
        cy.get("input[value='pumpkin']").should('not.be.checked')


        cy.get("input[value='cabbage']").should('be.disabled')
    })

});
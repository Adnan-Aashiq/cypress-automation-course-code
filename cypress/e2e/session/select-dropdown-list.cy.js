/// <reference types="cypress" />

describe("interact with dropdown lists via WebDriverUni", () => {
    
    it("select specific values from dropdown lists using Value tag", () => {
        cy.viewport("iphone-7")
        cy.visit("http://www.webdriveruniversity.com"); 
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })

        //in select we have to gave the values that are present in tags
        cy.get('#dropdowm-menu-1').select('c#')
        cy.get('#dropdowm-menu-2').select('testng')
        cy.get('#dropdowm-menu-3').select('jquery')
    })
    it("select specific values from dropdown lists using Text", () => {
        cy.visit("http://www.webdriveruniversity.com"); 
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })

        //in select we have to gave the values that are present in text
        cy.get('#dropdowm-menu-1').select('c#')
        cy.get('#dropdowm-menu-2').select('testng').should('have.value','testng')
        cy.get('#dropdowm-menu-3').select('JQuery').contains('JQuery')
    })
    it("Assignment", () => {
        cy.visit("http://www.webdriveruniversity.com"); 
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })

        //in select we have to gave the values that are present in tags
        cy.get('#dropdowm-menu-2').select('maven').should('have.value','maven')
        cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG')
    })

});
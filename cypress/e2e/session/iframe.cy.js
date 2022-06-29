/// <reference types="cypress" />

describe("Handling Iframes and modals", () => {
    it("Handle webdriveruni Iframe and modal", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#iframe').invoke('removeAttr', 'target').click({ force: true })
        cy.get('#frame').then($iframe=>{
            const body = $iframe.contents().find('body')
            cy.wrap(body).as('iframe')
        })
        cy.get('@iframe').find('#button-find-out-more').click()
        cy.get('@iframe').find('.modal-content').as('model')
        cy.get('@model').find('.modal-body > p').then($modeltext=>{
            const text = $modeltext.text()
            expect(text).contains('Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras...')
        })
        cy.get('@model').contains('Close').click();
    })
});
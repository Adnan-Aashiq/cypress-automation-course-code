/// <reference types="cypress" />

describe("Verify autocomplete dropdown lists via WebDriverUni", () => {
    it("select specific product via autocompete list", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({ force: true })
        cy.get('#myInput').type('A')
        cy.get('.autocomplete-items > div').each(($el, index, $list) => {
            const text = $el.text()
            const textToSelect = 'Apple'
            if (text == textToSelect) {
                $el.trigger('click')
                cy.get('#submit-button').click();
                cy.url().should('include', textToSelect)
            }
        }).then(() => {
            cy.get('#myInput').type('G')
            cy.get('.autocomplete-items > div').each(($el, index, $list) => {
                const text = $el.text()
                const textToSelect = 'Grapes'
                if (text == textToSelect) {
                    $el.trigger('click')
                    cy.get('#submit-button').click();
                    cy.url().should('include', textToSelect)
                }
            })
        })
    })
});
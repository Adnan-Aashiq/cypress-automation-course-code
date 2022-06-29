/// <reference types="cypress" />

describe("Test mouse actions", () => {
    it("scroll element into view", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })
        
    })
    it("Drag and drop a draggable item to specific location", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })

        cy.get('#draggable').trigger('mousedown',{which:1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true})
    })
    it("Double mouse click on any element ", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })

        cy.get('#double-click').trigger('dblclick')
    })
    it("Hold down the left mouse button on a given element", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })

        cy.get('#click-box').trigger('mousedown',{which:1}).then(($el)=>{
            expect($el).to.have.css('background-color','rgb(0, 255, 0)')
        })
    })
});
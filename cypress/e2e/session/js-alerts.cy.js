/// <reference types="cypress" />

describe("Handle JS Alerts", () => {
    it("confirms js alerts conatins the correct text", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#popup-alerts').invoke('removeAttr','target').click({force: true})
        cy.get('#button1').click();

        //handling alerts manually
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('I am an alert box!')
        })
    });
    it("validate js confirms alert box works correctly when click ok and also conatins the correct text", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#popup-alerts').invoke('removeAttr','target').click({force: true})
        cy.get('#button4').click();

        //handling alerts manually
        cy.on('window:confirm',(str)=>{
            return true
        })
        cy.get('#confirm-alert-text').invoke('text').should('contain','You pressed OK!')
    });
    it("validate js confirms alert box works correctly when click cancel and also conatins the correct text", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#popup-alerts').invoke('removeAttr','target').click({force: true})
        cy.get('#button4').click();

        //handling alerts manually
        cy.on('window:confirm',(str)=>{
            return false
        })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
    });
    it("validate js confirms alert box using STUB", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#popup-alerts').invoke('removeAttr','target').click({force: true})
        

        const stub = cy.stub()
        cy.on('window:confirm',stub)
        cy.get('#button4').click().then(()=>{
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(()=>{
            return true
        }).then(()=>{
            cy.get('#confirm-alert-text').invoke('text').should('contain','You pressed OK!')
        })
    });
})
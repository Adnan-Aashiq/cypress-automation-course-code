const today = new Date();

export class NewCars{

    openNewcarLanding(){
        cy.visit("https://www.pakgari.com/new-cars")
    }

    scrollToMakeSection(){
        cy.contains('New Cars by Make').scrollIntoView()
    }

    selectMakeFromMakeSection(){
        cy.get('#amk_toyota').click()
    }    

    verifyMakePage(){
        cy.get('h1.mt10').should('have.text', 'Toyota Cars in Pakistan')
        cy.get(':nth-child(3) > .container > h2').should('have.text', 'Toyota New Car Models')
        cy.get(':nth-child(5) > .container > h2').should('have.text', 'Toyota Car Videos')
        cy.get(':nth-child(5) > .container > h2').should('have.text', 'Toyota Car Videos')
        cy.get('.faqs')
    }


    openModelPageFromMakePage(){
        cy.contains('Toyota New Car Models').scrollIntoView()
        cy.contains('Toyota New Car Models').get('.generic-car-widgets-container').contains('Toyota Corolla').click()
    }

    verifyModelPageH1(){
        cy.get('h1').should('have.text', 'Toyota Corolla 2022 Price in Pakistan, Images, Reviews & Specs')
    }

    VerifyPictures(){
        cy.get('#goToNextSlide').click()
        cy.get('#goToNextSlide').click()
        cy.get('#goToPrevSlide').click()
    }

    verifyModelColorSection(){
        cy.contains('Toyota Corolla ' + today.getFullYear() + ' Colors').scrollIntoView()
    }

    verifyModelPriceInPakSection(){
        cy.contains('Toyota Corolla ' + today.getFullYear() + ' Price in Pakistan').scrollIntoView()
        cy.contains('Toyota Corolla ' + today.getFullYear() + ' Price in Pakistan').get('tbody').contains('Toyota Corolla Altis 1.8')
    }

    openVersionPageFromModel(){
        cy.get('a[href="https://www.pakgari.com/new-cars/toyota/corolla/xli-automatic/"]').click()
    }
    
    verifySpecsAndFeatures(){
        cy.get('.accordion-group > .accordion-heading > .accordion-toggle').contains('Engine/ Motor').click()
        cy.get('.accordion-group > .accordion-heading > .accordion-toggle').contains('Transmission').click()
        cy.get('#features-tab').click()
        cy.get('.accordion-group > .accordion-heading > .accordion-toggle').contains('Exterior').click()
        cy.get('.accordion-group > .accordion-heading > .accordion-toggle').contains('Instrumentation').click()

    }


}
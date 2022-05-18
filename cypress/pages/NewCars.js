const today = new Date();

export class NewCars{

    openNewcarLanding(){
        cy.visit("https://www.pakgari.com/new-cars")
    }

    scrollToMakeSection(){
        cy.contains('New Cars by Make').scrollIntoView()
    }

    selectMakeFromMakeSection(make){
        cy.get('ul[class="make-list col-sm-2 list-unstyled new-car-list"] li').contains(make).click()
    }    

    verifyMakePage(make){
        cy.get('h1.mt10').should('have.text', make + ' Cars in Pakistan')
        cy.get(':nth-child(3) > .container > h2').should('have.text', make + ' New Car Models')
        cy.get(':nth-child(4) > .container > h2').should('have.text', 'Other ' + make + ' Cars')
        cy.get(':nth-child(5) > .container > h2').should('have.text', make + ' Car Videos')
        cy.get('.faqs')
    }


    openModelPageFromMakePage(make, model){
        cy.contains(make + ' New Car Models').scrollIntoView()
        cy.get('.generic-car-widgets-container').contains(this.getMakeModel(make, model)).click()
    }

    verifyModelPageH1(make, model){
        cy.get('h1').first().should('have.text', this.getMakeModel(make, model) + ' 2022 Price in Pakistan, Images, Reviews & Specs')
    }

    VerifyPictures(){
        cy.get('#goToNextSlide').click()
        cy.get('#goToNextSlide').click()
        cy.get('#goToPrevSlide').click()
    }

    verifyModelColorSection(make, model){
        cy.contains( this.getMakeModel(make, model) + ' ' + today.getFullYear() + ' Colors').scrollIntoView()
    }

    verifyModelPriceInPakSection(make, model, version, price){
        cy.contains(this.getMakeModel(make, model) + ' ' + today.getFullYear() + ' Price in Pakistan').scrollIntoView()
        cy.contains(this.getMakeModel(make, model) + ' ' + today.getFullYear() + ' Price in Pakistan').get('tbody').contains(this.getMakeModel(make, model))
        cy.get('section[id="price-block"] tbody tr td').contains(this.getMakeModeVersion(make, model, version)).parents('tr').contains(price)
    }

    openVersionPageFromModel(make, model, version){
        cy.get('section[id="price-block"] tbody').contains(this.getMakeModeVersion(make, model, version)).click()
    }
    
    verifySpecsAndFeatures(){
        cy.get('#carspecification').contains('Engine/ Motor').should('be.visible')
        cy.get('#carspecification').contains('Transmission').should('be.visible')
        cy.get('#carspecification').contains('Fuel Economy').should('be.visible')
        cy.get('.spec-feature-tabs-heading.pointer').click()
        cy.get('#carfeatures').contains('Exterior').should('be.visible')
        cy.get('#carfeatures').contains('Comfort and Convenience').should('be.visible')

    }

    getMakeModel(make, model){
        return make + ' ' + model
    }

    getMakeModeVersion(make, model, version){
        return make + ' ' + model + ' ' + version
    }

}
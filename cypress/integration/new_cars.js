describe('New Car', function(){

    it('Make and model page', function(){
        cy.visit("https://www.pakgari.com/new-cars")
        cy.contains('New Cars by Make').scrollIntoView()
        cy.get('#amk_toyota').click()

        cy.get('h1.mt10').should('have.text', 'Toyota Cars in Pakistan')
        cy.contains('Toyota New Car Models').scrollIntoView()
        cy.contains('Toyota New Car Models').get('.generic-car-widgets-container').contains('Toyota Corolla').click()

        // Model page
        cy.get('h1').should('have.text', 'Toyota Corolla 2021')
        cy.get('#goToNextSlide').click()
        cy.get('#goToNextSlide').click()
        cy.get('#goToPrevSlide').click()
        
        cy.contains('Toyota Corolla Colors').scrollIntoView()

        cy.contains('Toyota Corolla Price in Pakistan').scrollIntoView()
        cy.contains('Toyota Corolla Price in Pakistan').get('tbody').contains('Toyota Corolla Altis 1.8').click()

    })

    it('New car version page', function(){

        cy.visit("https://www.pakgari.com/new-cars")

        cy.get('#car_selector').click()
        cy.get('#make_42 > a').click()
        cy.get('#model_118 > a').click()

        cy.get('#new-home-new-car-search-btn').click()

        cy.get('.search-heading > .pull-left').should('have.text', 'New Toyota Corolla Cars')
        cy.contains('Toyota Corolla XLi Automatic').click()

        // version page
        // cy.get('h1.mt10').should('have.text', 'Toyota Corolla XLi Automatic 2021 Price in Pakistan, Specs and Features') 
        cy.get('#goToNextSlide').click()
        cy.get('#goToNextSlide').click()
        cy.get('#goToPrevSlide').click()

        cy.get('.accordion-group > .accordion-heading > .accordion-toggle').contains('Engine/ Motor').click()
        cy.get('#features-tab').click()
        cy.get('.accordion-group > .accordion-heading > .accordion-toggle').contains('Exterior').click()

    })

})
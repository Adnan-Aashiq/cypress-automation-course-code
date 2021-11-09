/// <reference types="cypress"/>

describe('Search for car, bike and autopart', function(){

    it('Search for used car', function(){ 

        cy.visit('https://www.pakgari.com/used-cars/search/-/')
        cy.get('#onesignal-slidedown-cancel-button').click()
        
        // select Make
        cy.get('li[title="Toyota Cars for Sale in Pakistan"] > .filter-check').click()
        
        // select model
        cy.wait(1000)
        cy.get('li[title="Toyota Corolla Cars for Sale in Pakistan"] > .filter-check').click()
        
        // select version
        // cy.wait(5000)
        // cy.get('.filter-check > a').contains('GLi 1.3 VVTi').click()
        cy.get('li[title="Toyota Corolla Gli Vvti Cars for Sale in Pakistan"] > .filter-check').should('be.visible').click()

        // select city
        cy.wait(2000)
        cy.contains("City").get(".filter-check > a").contains('Lahore').click()
            
        // Price Range
        cy.wait(3000)
        cy.get('#pr_from').type('400000')
        cy.wait(2000)
        cy.get('#pr_to').type('3000000')
        cy.get('#pr-go').click()
        
        // select color
        cy.wait(2000)
        cy.contains('Color').click()
        cy.contains('Silver').click()
        

        // Year
        cy.wait(2000)
        cy.get('#yr_from').click()
        cy.get('.tt-dataset > :nth-child(9)').click()
        cy.wait(2000)
        cy.get('#yr_to').click()
        cy.get(':nth-child(2) > .tt-menu > .tt-dataset > :nth-child(21)').click()
        cy.get('#yr-go').click()

        // Mileage
        // cy.wait(3000)
        cy.get('#ml_from').should('be.visible').type('40000')
        // cy.wait(3000)
        cy.get('#ml_to').should('be.visible').type('60000')
        cy.get('#ml-go').should('be.visible').click()

        // select city
        cy.wait(2000)
        cy.contains("Registered In").get(".filter-check > a").contains('Lahore').click()

     })



    it('Search for used bikes', function(){

        cy.visit('https://www.pakgari.com/used-bikes/search/-/')
        cy.get('#onesignal-slidedown-cancel-button').click()
        
        // Price Range
        cy.wait(1000)
        cy.get('#pr_from').type('40000')
        cy.wait(1000)
        cy.get('#pr_to').type('120000')
        cy.get('#pr-go').click()


        // Year
        // cy.wait(2000)
        // cy.get('#yr_from').click()
        // cy.get('#collapse_1 > .accordion-inner > .range-filter > :nth-child(1) > .tt-menu > .tt-dataset > :nth-child(9)').click({force: true})

        // cy.get('#yr_to').click()
        // cy.wait(1000)
        // cy.get(':nth-child(2) > .tt-menu > .tt-dataset > :nth-child(21)').click({multiple: true})

        // cy.get('#yr-go').click()

        // Select make
        cy.wait(1000)
        cy.get('.filter-check').contains('Honda').click()

        // Select model
        cy.wait(4000)
        cy.get('.filter-check > a').contains('CG 125').click()

        // select location
        cy.wait(4000)
        cy.contains('City').get('.filter-check').contains('Lahore').click()

        // Registration
        cy.wait(4000)
        cy.contains('Registered In').get('.filter-check').contains('Lahore').click()

        // milage
        // cy.wait(2000)
        cy.get('#ml_from').should('be.visible').type('400')
        // cy.wait(1000)
        cy.get('#ml_to').should('be.visible').type('4000')
        cy.get('#ml-go').should('be.visible').click()     
    })


    it.only('Search for autoparts', function(){

        cy.visit('https://www.pakgari.com/accessories-spare-parts/search/-/')
        cy.get('#onesignal-slidedown-cancel-button').click()

        // select buy now ads checkbox
        cy.wait(1000)
        cy.get('#collapse_0 > .accordion-inner > .list-unstyled > li > .filter-check').click()
        // select discounted product checkbox
        cy.wait(3000)
        cy.get('#collapse_1 > .accordion-inner > .list-unstyled > li > .filter-check').click()
        // Select category
        cy.wait(3000)
        cy.get('[href="/accessories-spare-parts/search/-/buynow_1/sale_1/ctg_car-care/"]').click()
        cy.wait(3000)
        cy.get('.hitarea').click()
        cy.get('.collapsable > .list-unstyled > :nth-child(1) > a').click()

        cy.wait(2000)
        cy.get('#collapse_4 > .accordion-inner > .list-unstyled > :nth-child(1) > .filter-check').click()

        // Price Range
        cy.wait(1000)
        cy.get('#pr_from').type('1000')
        cy.wait(1000)
        cy.get('#pr_to').type('12000')
        cy.get('#pr-go').click()
        // select city
        cy.wait(2000)
        cy.get('#collapse_7 > .accordion-inner > .list-unstyled > li > .filter-check').click()

        // Final expected conditions
        cy.get('#collapse_search_key_filter > .accordion-inner > .list-unstyled > :nth-child(1)').should('have.text', "\nBuy Now Ads Only\n\n\n ")
        cy.get('#collapse_search_key_filter > .accordion-inner > .list-unstyled > :nth-child(4)').should('have.text', "\nCar Care\n\n\n ")
        cy.get('#collapse_search_key_filter > .accordion-inner > .list-unstyled > :nth-child(5)').should('have.text', "\nCar Wax\n\n\n ")
        cy.get('#collapse_search_key_filter > .accordion-inner > .list-unstyled > :nth-child(6)').should('have.text', "\n1,000 to 12,000\n\n\n ")

    })


})
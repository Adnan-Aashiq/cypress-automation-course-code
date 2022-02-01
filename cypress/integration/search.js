/// <reference types="cypress"/>

describe('Search for car, bike and autopart', function(){

    it('Search for used car', function(){ 

        cy.visit('https://www.pakgari.com/used-cars/search/-/')
        cy.get('#onesignal-slidedown-cancel-button').click()
        
        // select Make
        cy.get('li[title="Toyota Cars for Sale in Pakistan"] > .filter-check').click()
        
        
        // Wait and assert for filter to be applied and listing to be loaded
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        // select model
        cy.get('li[title="Toyota Corolla Cars for Sale in Pakistan"] > .filter-check').click()
        
        
        // Wait and assert for filter to be applied and listing to be loaded
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        // select version
        cy.get('li[title="Toyota Corolla Gli Vvti Cars for Sale in Pakistan"] > .filter-check').click()

        // select city
        // cy.wait(2000)
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.contains("City").get(".filter-check > a").contains('Lahore').click()
            
        // Price Range
        // cy.wait(3000)
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.get('#pr_from').type('400000')
        // cy.wait(2000)
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.get('#pr_to').type('3000000')
        cy.get('#pr-go').click()
        
        // select color
        // cy.wait(2000)
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.contains('Color').click()
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.contains('Silver').click()
        

        // Year
        // cy.wait(2000)
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.get('#yr_from').click()
        cy.get('.tt-dataset > :nth-child(9)').click()
        // cy.wait(2000)
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.get('#yr_to').click()
        cy.get(':nth-child(2) > .tt-menu > .tt-dataset > :nth-child(21)').click()
        cy.get('#yr-go').click()

        // Mileage
        // cy.wait(3000)
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.get('#ml_from').should('be.visible').type('40000')
        // cy.wait(3000)
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.get('#ml_to').should('be.visible').type('60000')
        cy.get('#ml-go').should('be.visible').click()

        // select city
        // cy.wait(2000)
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.contains("Registered In").get(".filter-check > a").contains('Lahore').click()

        cy.get('.clear-filters').should('have.text', "Clear All")
     })



    it('Search for used bikes', function(){

        cy.visit('https://www.pakgari.com/used-bikes/search/-/')
        cy.get('#onesignal-slidedown-cancel-button').click()
        
        // Price Range
        // cy.wait(1000)
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.get('#pr_from').type('40000')
        // cy.wait(1000)
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.get('#pr_to').type('120000')
        cy.get('#pr-go').click()

        // Select make
        // cy.wait(1000)
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.get('.filter-check').contains('Honda').click()

        // Select model
        // cy.wait(4000)
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.get('.filter-check > a').contains('CG 125').click()

        // select location
        // cy.wait(4000)
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.contains('City').get('.filter-check').contains('Lahore').click()

        // Registration
        // cy.wait(4000)
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.contains('Registered In').get('.filter-check').contains('Lahore').click()

        // milage
        // cy.wait(2000)
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.get('#ml_from').should('be.visible').type('400')
        // cy.wait(1000)
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.get('#ml_to').should('be.visible').type('4000')
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.get('#ml-go').should('be.visible').click()  
        
        cy.get('.clear-filters').should('have.text', "Clear All")

    })


    it('Search for autoparts', function(){

        cy.visit('https://www.pakgari.com/accessories-spare-parts/search/-/')
        cy.get('#onesignal-slidedown-cancel-button').click()

        // select buy now ads checkbox
        // cy.wait(3000)
        // cy.get('.search-loader-fixed > img').should('not.be.visible')
        // cy.contains('Buy Now Ads Only').click()
        // select location checkbox
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.get('.filter-check > a').contains('Lahore').click()
        // Select category
        // cy.wait(3000)
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.contains('Category').get('#tree').contains('Car Care').click()
        // cy.wait(3000)
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.get('.hitarea').click()
        cy.get('.collapsable > .list-unstyled > :nth-child(1) > a').click()

        // Price Range
        // cy.wait(1000)
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.get('#pr_from').type('1000')
        // cy.wait(1000)
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.get('#pr_to').type('12000')
        cy.get('#pr-go').click()
        
        // With pictures filter
        // cy.wait(2000)
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.get('.filter-check > a').contains('With Pictures').click()

        cy.get('.search-loader-fixed > img').should('not.be.visible')

    })


})
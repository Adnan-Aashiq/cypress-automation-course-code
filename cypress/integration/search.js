/// <reference types="cypress"/>

// npx cypress open
describe('Search for car, bike and autopart', function(){

    it('Search for used car', function(){ 

        cy.visit('https://www.pakgari.com/used-cars/search/-/')
        cy.get('#onesignal-slidedown-cancel-button').click()
        
        // Select cash
        // cy.contains('Cash').click()
        
        // select Make
        cy.get('li[title="Toyota Cars for Sale in Pakistan"] > .filter-check').click()
        
        // select model
        cy.wait(1000)
        cy.get('li[title="Toyota Corolla Cars for Sale in Pakistan"] > .filter-check').click()
        
        // select version
        cy.wait(5000)
        cy.get('#collapse_12 > .accordion-inner > .more-choice').click()
        cy.wait(3000)
        cy.get('#version_list > :nth-child(1) > .checkbox').click()
        cy.get(':nth-child(8) > .checkbox').click()
        cy.get('.btn-link').click()
        cy.get(':nth-child(28) > .checkbox > input').click()
        cy.get('form > .modal-footer > .pull-right > .btn').click()

        

        // select city
        cy.wait(2000)
        cy.get('li[title="Toyota Corolla Gli Vvti Cars for Sale in Lahore, Pakistan"] > .filter-check').click()
        
        // select registration
        cy.wait(2000)
        cy.get('#collapse_12 > .accordion-inner > .list-unstyled > :nth-child(1) > .filter-check').click()
        
        // select engine type.
        cy.wait(3000)
        cy.get(':nth-child(20) > .accordion-heading').click() 
        cy.get('#collapse_16 > .accordion-inner > .list-unstyled > :nth-child(1) > .filter-check').click()
        
        // Price Range
        cy.wait(2000)
        cy.get('#pr_from').type('400000')
        cy.wait(1000)
        cy.get('#pr_to').type('3000000')
        cy.get('#pr-go').click()
        
        // select color
        cy.wait(2000)
        cy.get(':nth-child(23) > .accordion-heading').click()
        cy.wait(2000)
        cy.get('#collapse_19 > .accordion-inner > .more-choice').click()
        cy.wait(2000)
        cy.get(':nth-child(1) > .checkbox > input').click()
        cy.get(':nth-child(6) > .checkbox > input').click()
        cy.get(':nth-child(9) > .checkbox > input').click()
        cy.get('form > .modal-footer > .pull-right > .btn').click()

        // Year
        cy.wait(2000)
        cy.get('#yr_from').click()
        cy.get('.tt-dataset > :nth-child(9)').click()

        cy.get('#yr_to').click()
        cy.get(':nth-child(2) > .tt-menu > .tt-dataset > :nth-child(21)').click()

        cy.get('#yr-go').click()

        // Final expected conditions
        cy.get('#collapse_search_key_filter > .accordion-inner > .list-unstyled > :nth-child(1)').should('have.text', "\n400,000 to 3,000,000\n\n\n ")
        cy.get('#collapse_search_key_filter > .accordion-inner > .list-unstyled > :nth-child(3)').should('have.text','\nToyota\n\n\n ')
        cy.get('#collapse_search_key_filter > .accordion-inner > .list-unstyled > :nth-child(4)').should('have.text','\nCorolla\n\n\n ')
        cy.get('.accordion-inner > .list-unstyled > :nth-child(9)').should('have.text','\nBlack\n\n\n ')
        cy.get('#collapse_search_key_filter > .accordion-inner > .list-unstyled > :nth-child(6)').should('have.text','\nLahore\n\n\n ')

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
        cy.wait(2000)
        cy.get('#yr_from').type("2008")

        cy.get('#yr_to').click()
        cy.wait(1000)
        cy.get(':nth-child(2) > .tt-menu > .tt-dataset > :nth-child(21)').click()

        cy.get('#yr-go').click()

        // Select make
        cy.wait(1000)
        cy.get('li[title="Honda 2008 - 2020 Bikes for Sale in 40000 - 120000 in Pakistan"] > .filter-check').click()

        // Select model
        cy.wait(4000)
        cy.get('#collapse_3 > .accordion-inner > .more-choice').click()
        cy.wait(1000)
        cy.get('#model_list_popular > :nth-child(1) > .checkbox').click()
        cy.get('form > .modal-footer > .pull-right > .btn').click()

        // select location
        cy.wait(1000)
        cy.get('li[title="Honda Cg 125  2 2008 - 2020 Bikes for Sale in 40000 - 120000 in Lahore, Pakistan"] > .filter-check').click()

        // Registration
        cy.wait(1000)
        cy.get('#collapse_5 > .accordion-inner > .list-unstyled > :nth-child(1) > .filter-check').click()

        // milage
        cy.wait(1000)
        cy.get('#ml_from').type('400')
        cy.wait(1000)
        cy.get('#ml_to').type('4000')
        cy.get('#ml-go').click()


         // Final expected conditions
         cy.get('#collapse_search_key_filter > .accordion-inner > .list-unstyled > :nth-child(1)').should('have.text', "\n40,000 to 120,000\n\n\n ")
         cy.get('#collapse_search_key_filter > .accordion-inner > .list-unstyled > :nth-child(2)').should('have.text', "\n2008 to 2020\n\n\n ")
         cy.get('#collapse_search_key_filter > .accordion-inner > .list-unstyled > :nth-child(3)').should('have.text', "\nHonda\n\n\n ")
         cy.get('#collapse_search_key_filter > .accordion-inner > .list-unstyled > :nth-child(4)').should('have.text', "\nCG 125\n\n\n ")
     
    })


    it('Search for autoparts', function(){

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
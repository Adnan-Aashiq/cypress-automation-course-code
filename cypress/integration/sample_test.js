describe('My First Test', function(){
    
    it('Does not do much', function(){
        expect(true).to.equal(true)
    })

    
    it('Does something', function(){
        cy.visit('https://example.cypress.io')
        // Pause command pauses the test and allow us to manually execute the steps
        cy.pause()
   
        // cypress automatically check for presence of element otherwise throw error.
        // find element that contains the string type.
        cy.contains('type').click()

        cy.url().should('include','/commands/actions')

        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')

    })


    it('Inspection page lead submit', function(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
    
        cy.visit("https://www.pakgari.com/products/pakwheels-inspection")
    
        cy.get('.pull-left > .btn').click()
    
        // Info: .find will get the child/descendent of the element. it is used with get()
        // line level timeout for global level set in cypress.json
        cy.get('#car_certification_request_model_year', {timeout: 5000}).select("2018")
        
        cy.get('#car_selector').click()
        cy.get('#make_42 > a').click()
        cy.get('#model_118 > a').click()
        cy.get('.modal-footer > .btn').click()
        cy.get('#car_certification_request_name').type("New User Test")
        cy.get('#user_email').type("testingAutomation@mailinator.com")
        cy.get('b').click()
        cy.contains("Lahore").click({force: true})
    
    })

})
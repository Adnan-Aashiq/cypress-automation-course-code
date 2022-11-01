/// <reference types="cypress"/>
export class CarInspectionLeadForm {
    location(city, cityArea, address) {
        cy.get('#city-city-area-selector').click();
        cy.get(".city-listings li").contains(city).click();
        cy.get("#city-areas-list div li").contains(cityArea).click();

        //Adress Field
        cy.get('#car_certification_request_address').type(address)
    }
    make_model_version(year, make, model, version) {
        cy.get("#car_selector").click();
        cy.get(".year-listings li").contains(year).click();
        cy.get(".make-listings li a").contains(make).click();
        cy.get(".model-listings li a").contains(model).click();
        cy.get(".version-listings li a").contains(version).click();
    }
    inspection_slot() {
        cy.get("#inspection-slots-input").click();
        cy.get('.get-inspection-days li a').should('have.length.greaterThan', 0).its('length').then((n) => {
            return Cypress._.random(0, n - 1)
        }).then((k) => {
            cy.get('.get-inspection-days li a').eq(k).click();
        })
        cy.get('#copied-slots-for-day input:not(:disabled)').should('have.length.greaterThan', 0).its('length').then((n) => {
            return Cypress._.random(0, n - 1)
        }).then((k) => {
            cy.get('#copied-slots-for-day input:not(:disabled)').eq(k).click();
        })
        cy.contains('Confirm').click({ force: true })
    }
    name_number(name, phoneNumber) {
        cy.get("#car_certification_request_name").type(name);
        cy.get("#car_certification_request_mobile").type(phoneNumber)
    }
    ClickOnSubmit() {
        cy.get("#car_certification_request_submit_btn").click();
    }
    ordersummary() {
        let randomize = Date.now() % 2
        cy.log(randomize)
        if (randomize === 1) {
            cy.get('#discount_code').type('NewCode1212')
            cy.get('#apply-discount').click()
        }
        else {
        }
        cy.get('#proceed_to_payment_btn').click()

        //Payment methods
        cy.get('#payment_method_107').click()
        cy.get('#proceed-checkout').click()

        //Jazzcash menu
        cy.get('#mobile_number').type('03123456789')
        cy.get('#cnic_number').type('345678')
        cy.get('#continue').click()
    }
    VerifyLead() {
        cy.get(".generic-green.fs20.mt15")
            .should('have.text', 'Your request for PakWheels Car Inspection has been received.');
    }





}
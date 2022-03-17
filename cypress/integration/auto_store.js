import {LoginPage} from '../pages/Login';
const login = new LoginPage();

describe('Auto Store', function(){

it('Place an estore order', function(){

    cy.visit("https://www.pakgari.com/accessories-spare-parts/")

    cy.on('uncaught:exception', (err, runnable) => {
        expect(err.message).to.include('addValidatorToField is not defined')
        // return false to prevent the error from
        // failing this test
        return false
      })

    cy.get('#onesignal-slidedown-cancel-button').click()

    cy.get("a[href='javascript:void(0)'][data-target='#sign_in_pop_up']").click()
    login.loginWithEmail('newweb@mailinator.com', '1234567')

    cy.get('#search_key').type('mat')
    cy.get('#ad-listings-search-btn').click()

    cy.get('#main_ad_1982725 > :nth-child(1) > .well > .col-md-7.grid-style > :nth-child(4) > :nth-child(1) > .quantizer-info > .btn-link-outline').click()
    cy.wait(2000)
    cy.get('#main_ad_1982723 > .well > .col-md-9.grid-style > .search-bottom > :nth-child(1) > .quantizer-info > .btn-link-outline').click()
    cy.wait(2000)
    cy.contains('View Cart').click()

    cy.get('button[class="btn pull-left"]').eq(1).click()
    cy.get(':nth-child(2) > .checkout-footer > .btn').click() 

    cy.get('#order_name').clear()
    cy.get('#order_name').type('Test Order')

    cy.get('#order_phone').type('03915134567')
    cy.get('#order_comments').type('Testing order')

    cy.get('#recent-address > :nth-child(1)').click()
    cy.get('.well > .checkout-footer > .btn').click()
      
})


})
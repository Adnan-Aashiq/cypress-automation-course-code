/// <reference types="cypress"/>
export class SIFMPage{
    clickOnGetStarted(){
        cy.get('.btn.btn-success.btn-lg.fs20.show.mb15').click();
    }
}
export class SIFMLeadForm{
    SelectModelYear(year){
        cy.get("#sell_it_for_me_lead_model_year").select(year).should('have.value', year);
    }
    SelectCarInfo(make,model){
        cy.get("#car_selector").click();
        cy.get(".form-group.nomargin .make").contains(make).click();
        cy.get(".form-group.nomargin .model").contains(model).click();
    }
    
    SelectCity(city){
        cy.get("#sell_it_for_me_lead_city_id").select(city).should('have.value', '256');
    }
    InputName(name){
        cy.get("#sell_it_for_me_lead_name").clear();
        cy.get("#sell_it_for_me_lead_name").type(name);
    }
    InputPhoneNumber(phoneNumber){
        cy.get("#sell_it_for_me_lead_mobile_number").type(phoneNumber)
    }
    ClickOnSubmit(){
        cy.get("#submit_btn").click();
    }
    VerifyLead(){
        cy.get(".generic-green.fs20.mt15").should('have.text','Your request for PakWheels Sell It For Me has been received.');
    }
}
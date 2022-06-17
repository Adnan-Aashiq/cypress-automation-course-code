export class SIFMPage{
    clickOnGetStarted(){
        cy.get('.btn.btn-success.btn-lg.fs20.show.mb15').click();
    }
}
export class SIFMLeadForm{
    Name = 'Adnan Aashiq'
    Phonenumber = '03022149193'


    SelectModelYear(){
        cy.get("#sell_it_for_me_lead_model_year").select('2018').should('have.value', '2018');
    }
    SelectCarInfo(){
        cy.get("#car_selector").click();
        cy.get("[class='fs14 get-listing make-listings'] [class='make']").contains("Suzuki").click();
        cy.get("[class='form-group nomargin'] [class*='model-listings fs14 get-listing models_for_']").contains("Cultus").click();
    }
    SelectCity(){
        cy.get("#sell_it_for_me_lead_city_id").select('Multan').should('have.value', '256');
    }
    InputName(Name){
        cy.get("#sell_it_for_me_lead_name").type(Name);
    }
    InputPhoneNumber(PhoneNumber){
        cy.get("#sell_it_for_me_lead_mobile_number").type(PhoneNumber)
    }
    ClickOnSubmit(){
        cy.get("#submit_btn").click();
    }
    VerifyLead(){
        cy.get(".generic-green.fs20.mt15").should('have.text','Your request for PakWheels Sell It For Me has been received.');
    }
}
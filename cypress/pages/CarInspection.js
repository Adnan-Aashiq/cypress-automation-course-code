export class CarInspectionHome{
    clickOnScheduleInspection(){
        cy.contains('Schedule Inspection').click();
    }
} 

export class CarInspectionLeadForm{
    Name = 'Adnan Aashiq'
    Phonenumber = '03022149193'
    Email = 'test@pakwheels.com'


    SelectModelYear(){
        cy.get("#car_certification_request_model_year").select('2018').should('have.value', '2018');
    }
    SelectCarInfo(){
        cy.get("#car_selector").click();
        cy.get("[class='fs14 get-listing make-listings'] [class='make']").contains("Suzuki").click();
        cy.get("[class='model-listings fs14 get-listing models_for_41 show'] [class='model']").contains("Cultus").click();
    }
    InputName(Name){
        cy.get("#car_certification_request_name").type(Name);
    }
    InputPhoneNumber(PhoneNumber){
        cy.get("#car_certification_request_mobile").type(PhoneNumber)
    }
    InputEmail(Email){
        cy.get("#user_email").type(Email);
    }
    SelectCity(){
        cy.get('.chzn-single').click();
        cy.get("ul[class='chzn-results'] li[class='active-result']").contains('Karachi').click();
        cy.get("ul[class='chzn-results'] li[class='active-result result-selected']").should('have.text', 'Karachi');
    }
    SelectCityArea(){
        cy.get("#car_certification_request_city_area_id_chzn").click();
        cy.get("ul[class='chzn-results'] li[class='active-result group-option']").contains('Korangi').click();
        cy.get("ul[class='chzn-results'] li[class='active-result group-option result-selected']").should('have.text', 'Korangi');
    }
    CheckBox(){
        cy.get('#checkboxmagazine').click();
    }
    ClickOnSubmit(){
        cy.get("#certify-a-car-done").click();
    }
    VerifyLead(){
        cy.get(".generic-green.fs20.mt15").should('have.text','Your request for PakWheels Car Inspection has been received.');
    }





}
export class CarInspectionHome{
    clickOnScheduleInspection(){
        cy.contains('Schedule Inspection').click();
    }
} 

export class CarInspectionLeadForm{
    SelectModelYear(year){
        cy.get("#car_certification_request_model_year")
        .select(year).should('have.value', year);
    }
    SelectCarInfo(make,model){
        //this model css is only valid for suzuki make
        cy.get("#car_selector").click();
        cy.get(".form-group.nomargin .make").contains(make).click();
        cy.get(".form-group.nomargin .model").contains(model).click();
    }
    InputName(name){
        cy.get("#car_certification_request_name").type(name);
    }
    InputPhoneNumber(phoneNumber){
        cy.get("#car_certification_request_mobile").type(phoneNumber)
    }
    // clickIfExist(email){
    //     cy.get('body').then((body) => {
    //         if (body.find("#user_email").length > 0) {
    //             cy.get("#user_email").type(email)
    //         }
    //         else
    //         {

    //         }
    //     });
    // }
    InputEmail(email){
        cy.get("#user_email").type(email);
    }
    SelectCity(city){
        cy.get('.chzn-single').click();
        cy.get("ul[class='chzn-results'] li[class='active-result']").contains(city).click();
        cy.get("ul[class='chzn-results'] li[class='active-result result-selected']")
        .should('have.text', city);
    }
    SelectCityArea(cityArea){
        cy.get("#car_certification_request_city_area_id_chzn").click();
        cy.get("ul[class='chzn-results'] li[class='active-result group-option']").contains(cityArea).click();
        cy.get("ul[class='chzn-results'] li[class='active-result group-option result-selected']")
        .should('have.text', cityArea);
    }
    CheckBox(){
        cy.get('#checkboxmagazine').click();
    }
    ClickOnSubmit(){
        cy.get("#certify-a-car-done").click();
    }
    VerifyLead(){
        cy.get(".generic-green.fs20.mt15")
        .should('have.text','Your request for PakWheels Car Inspection has been received.');
    }





}
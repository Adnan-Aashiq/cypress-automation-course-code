//Car Finance
export class NewCarLoanCalculator{
    SelectCity(city){
        cy.get('.chzn-single').click();
        cy.get("ul[class='chzn-results'] li[class='active-result']").contains(city).click();
        cy.get("ul[class='chzn-results'] li[class='active-result result-selected']")
        .should('have.text', city);
    }
    SelectMakeModelVersion(year,make,model,version){
        cy.get("#car_selector").click();
        cy.get(".form-group.nomargin .model_year").contains(year).click();
        cy.get(".form-group.nomargin .make").contains(make).click();
        cy.get(".form-group.nomargin .model").contains(model).click();
        cy.get(".form-group.nomargin .version").contains(version).click();
    }
    SelectTenure(tenure){
        cy.wait(2000)
        cy.get('#car_finance_lead_tenure').select(tenure);
    }
    SelectDownPayment(downPayment){
        cy.get('#car_finance_lead_down_payment').select(downPayment);
    }
    ClickOnShowPlans(){
        cy.contains('Show Plans').click();
    }
}
export class UsedCarLoanCalculator{
    ClickOnUsedCars(){
        cy.get('#upcoming-tab').click();
    }
    InputCarPrice(priceLocator,price){
        cy.get(priceLocator).type(price);
    }
}
export class Banks{
    ClickOnFinanceBank(FinanceBankName){
        cy.get("a[class='img-content'][title='"+ FinanceBankName +"']")
        .parents('.well.search-list.clearfix').find('#submitbutton').click();
    }
    

    ClickOnInsuranceBank(InsuranceBankname){
    cy.get("input[data-insurance_company_name='"+ InsuranceBankname +"']").click()
    /*
    //FinanceApplyNowButton_locator='.col-md-4.text-center > #new_car_finance_lead'
    //InsuranceApplyNowButton_locator='#submitbutton'

    cy.get('.list-unstyled.search-results.next-prev.car-search-results')
    .find('.well.search-list.clearfix')
    .should('have.length',11);
    cy.get('.list-unstyled.search-results.next-prev.car-search-results')
    .find(Buttonlocator)
    .eq(Bankindex).click();
     */
    }
}
export class FinanceForm{
    //Your Information
    InputName(Name){
        cy.get('.col-md-8>#car_finance_lead_name').type(Name);
    }
    InputEmail(Email){
        cy.get('.col-md-8>#user_email').type(Email)
    }
    InputPhoneNUmber(PhoneNumber){
        cy.get('.ad-mobile-number').type(PhoneNumber);
    }
    InputAge(Age){
        cy.get('.col-md-8>#car_finance_lead_age').type(Age);
    }
    InputCNIC(CNIC){
        cy.get('.col-md-8>#car_finance_lead_cnic').type(CNIC);
    }
    SelectCity(City){
        cy.get('.col-md-8>#car_finance_lead_city_id').select(City);
    }
    SelectCityArea(CityArea){
        cy.get('.col-md-8>#car_finance_lead_city_area_id').select(CityArea);
    }
    InputAddress(Address){
        cy.get('.col-md-8>#car_finance_lead_address').type(Address);
    }
    SelectBestTimeToCall(BestTimeToCall){
        cy.get('.col-md-8>#car_finance_lead_time_to_call').select(BestTimeToCall);
    }

    //Financial Information
    FilFinancialInformation(Dp1,Dp2,Dp3,Dp4,Dp5,Dp6,Dp7){
        cy.wait(2000);
        cy.get('.col-md-8>#car_finance_lead_occupation').select(Dp1);
        cy.wait(2000);
        cy.get('.col-md-8>#car_finance_lead_salary').select(Dp2);
        cy.wait(2000);
        cy.get('.col-md-8>#car_finance_lead_current_bank').select(Dp3);
        cy.wait(2000);
        cy.get('.col-md-8>#car_finance_lead_is_filler').select(Dp4);
        cy.wait(2000);
        cy.get('.col-md-8>#car_finance_lead_in_debt').select(Dp5);
        cy.wait(2000);
        cy.get('.col-md-8>#car_finance_lead_vehicle_intent').select(Dp6);
        cy.wait(2000);
        cy.get('.col-md-8>#car_finance_lead_processing_period').select(Dp7);
    }
    clickOnApplyNow(){
        cy.get('#submitbutton').click();
    }
}

//Car Insurance
export class InsuranceForm{
    addTracker(){
        cy.get(".nomargin> input[type='checkbox']").click();
    }
    inputName(name){
        cy.get('.col-md-8>#car_insurance_lead_name').type(name);
    }
    inputEmail(email){
        cy.get('.col-md-8>#car_insurance_lead_email').type(email)
    }
    inputPhoneNumber(phoneNumber){
        cy.get('.col-md-8>#car_insurance_lead_mobile_number').type(phoneNumber);
    }
    selectCity(city){
        cy.get('.col-md-8>#car_insurance_lead_city_id').select(city);
    }
}

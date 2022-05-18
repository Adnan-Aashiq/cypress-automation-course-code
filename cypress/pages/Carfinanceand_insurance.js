//Car Finance
export class NewCarLoanCalculator{
    Model_locator = '.model-listings.fs14.get-listing.models_for_14 li.model';
    City='Karachi';
    Year = '2022'
    Make = 'Honda';
    Model = 'City';
    Version = 'i-DSI'
    Tenure = '3';
    DownPayment = '30%'
    Bankindex = '6'
    SelectCity(City){
        cy.get('.chzn-single').click();
        cy.get("ul[class='chzn-results'] li[class='active-result']").contains(City).click();
        //cy.get("ul[class='chzn-results'] li[class='active-result result-selected']").should('have.text', 'Karachi');
    }
    SelectMakeModelVersion(Year,Make,Model_locator,Model,Version){
        cy.get("#car_selector").click();
        cy.get(".fs14.get-listing.year-listings li.model_year").contains(Year).click();
        cy.get(".fs14.get-listing.make-listings li.make").contains(Make).click();
        cy.get(Model_locator).contains(Model).click();
        cy.get(".fs14.get-listing.version-listings li.version").contains(Version).click();
    }
    SelectTenure(Tenure){
        cy.wait(2000)
        cy.get('#car_finance_lead_tenure').select(Tenure);
    }
    SelectDownPayment(DownPayment){
        cy.get('#car_finance_lead_down_payment').select(DownPayment);
    }
    ClickOnShowPlans(){
        cy.contains('Show Plans').click();
    }
}
export class UsedCarLoanCalculator{
    Price_locator = '#car_finance_lead_price'
    Model_locator = '.form-group.nomargin ul.model-listings.fs14.get-listing.models_for_41';
    City='Lahore';
    Year = '2019'
    Make = 'Suzuki';
    Model = 'Cultus';
    Version = 'VXL'
    Price = '2000000'
    Tenure = '5';
    DownPayment = '40%'
    Bankindex = '2'
    ClickOnUsedCars(){
        cy.get('#upcoming-tab').click();
    }
    InputCarPrice(Price_locator,Price){
        cy.get(Price_locator).type(Price);
    }
}
export class Banks{
    ClickOnFinanceBank(FinanceBankName){
        cy.get("a[class='img-content'][title='"+ FinanceBankName +"']").parents('.well.search-list.clearfix').find('#submitbutton').click();
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
    ClickOnApplyNow(){
        cy.get('#submitbutton').click();
    }
}
//Car Insurance
export class InsuranceForm{
    Price_locator = '#car_value'
    AddTracker(){
        cy.get(".nomargin> input[type='checkbox']").click();
    }
    InputName(Name){
        cy.get('.col-md-8>#car_insurance_lead_name').type(Name);
    }
    InputEmail(Email){
        cy.get('.col-md-8>#car_insurance_lead_email').type(Email)
    }
    InputPhoneNUmber(PhoneNumber){
        cy.get('.col-md-8>#car_insurance_lead_mobile_number').type(PhoneNumber);
    }
    SelectCity(City){
        cy.get('.col-md-8>#car_insurance_lead_city_id').select(City);
    }
}

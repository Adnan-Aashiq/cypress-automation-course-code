export class CarSellForm{

    phone_loc = '#used_car_ad_listing_attributes_phone';

    openPakwheels(){
        cy.visit("https://www.pakgari.com")
        cy.get('#onesignal-slidedown-cancel-button').click()

    }

    gotoCarSellForm(){
        cy.get('[title="Post an Ad"]').click()
        cy.get('#select-sell-option').click()
    }

    clickContinueFromSellOption(){
        cy.get('#select-sell-option').click()
    }


    selectCity(city){
        cy.get('#used_car_ad_listing_attributes_city_id_chzn > .chzn-single > span').click()
        cy.get('div[id="used_car_ad_listing_attributes_city_id_chzn"] ul[class="chzn-results"]').contains(city).click()
    }

    selectCityArea(city_area){
        cy.get('#used_car_ad_listing_attributes_city_area_id_chzn > .chzn-single > span').click()
        cy.get('div[id="used_car_ad_listing_attributes_city_area_id_chzn"] ul[class="chzn-results"]').contains(city_area).click()
    }

    selectYearMakeModelVersion(year, make, model, version){
        cy.get('#car_selector').click()
        cy.get('#model_year_' + year).click()
        cy.get('.fs14.get-listing.make-listings').contains(make).click()
        cy.get('li[class="model"]').contains(model).click()
        cy.get('li[class="version"]').contains(version).click()
    }

    selectRegistrationCity(reg_city){
        cy.get('#used_car_reg_city_id_chzn > .chzn-single > span').click()
        cy.get('div[id="used_car_reg_city_id_chzn"] ul[class="chzn-results"]').contains(reg_city).click()
    }

    selectExteriorColor(color){
        cy.get('#used_car_exterior_color_chzn > .chzn-single > span').click()
        cy.get('div[id="used_car_exterior_color_chzn"] ul[class="chzn-results"]').contains(color).click()
    }

    enterMileage(mileage){
        cy.get('#mileage_text').type(mileage)
    }

    enterPrice(price){
        cy.get('#price_formatted').type(price)
    }

    enterDescription(description){
        cy.get('#used_car_ad_listing_attributes_description').type('Automation test description test. ')
    }

    selectDescPreSuggestValues(){
        cy.get('#Bumper-to-Bumper').click()
        cy.get('#Like').click()
        cy.get('#Price').click()
    }

    selectEngineType(engine_type){
        cy.get('#used_car_engine_type').select(engine_type)
    }

    enterEngineCapacity(engine_cc){
        cy.get('#used_car_engine_capacity').type(engine_cc)
    }

    selectTransmission(transmission){
        cy.get('#used_car_transmission').select(transmission)
    }

    selectAssembly(assmebly){
        cy.get('#used_car_assembly').select(assmebly)
    }

    selectFeatures(features){
        features.forEach(function(feature){
            cy.get('#feature_lists').contains(feature).click()
        })
    }

    enterPhone(phone){
        cy.get(this.phone_loc).clear()
        cy.get(this.phone_loc).type(phone)
    }

    enableWhatsappContact(){
        cy.get('.slider_whatsapp').click()
    }

    submitAd(){
        cy.get('#submit_form').click() 
    }

}
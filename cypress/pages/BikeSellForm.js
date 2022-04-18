import { SellForms } from "./SellForms"

export class BikeSellForm extends SellForms{

    gotoBikeSellForm(){
        cy.get('ul[class="dropdown-menu"]').contains('Sell Your Bike').click({force: true})
    }

    selectCity(city){
        cy.get('#used_bike_ad_listing_attributes_city_id_chzn > .chzn-single > span').click()
        cy.get('div[id="used_bike_ad_listing_attributes_city_id_chzn"] ul[class="chzn-results"]').contains(city).click()
    }

    selectCityArea(city_area){
        cy.get('#used_bike_ad_listing_attributes_city_area_id_chzn > .chzn-single > span').click()
        cy.get('div[id="used_bike_ad_listing_attributes_city_area_id_chzn"] ul[class="chzn-results"]').contains(city_area).click()
    }

    selectYearMakeModel(year, make, model){
        cy.get('#bike_selector').click()
        cy.get('#model_year_' + year).click()
        cy.get('.fs14.get-listing.make-listings').contains(make).click()
        cy.get('li[class="model"]').contains(model).click()
    
    }

    selectRegistrationCity(reg_city){
        cy.get('#used_bike_reg_city_id_chzn > .chzn-single > span').click()
        cy.get('div[id="used_bike_reg_city_id_chzn"] ul[class="chzn-results"]').contains(reg_city).click()
    }

    selectEngineType(engine_type){
        cy.get('#used_bike_engine_type').select(engine_type)
    }

    enterDescription(description){
        cy.get('#used_bike_ad_listing_attributes_description').type(description)
    }

    selectFeatures(features){
        features.forEach((feature)=>{
            cy.get('.col-md-6').contains(feature).click()
        })
    }

    enterPhone(phone){
        cy.get(this.bike_phone_loc).clear()
        cy.get(this.bike_phone_loc).type(phone)
    }
}
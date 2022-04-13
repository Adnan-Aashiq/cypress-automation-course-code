export class SellForms{

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



}
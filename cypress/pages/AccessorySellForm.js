/// <reference types="cypress"/>
import { SellForms } from "./SellForms";

export class AccessorySellForm extends SellForms{

    openAccessorySellForm(){
        cy.contains('Sell Accessory').click({force: true})
    }

    enterTitle(title){
        cy.get('#ad_listing_title').type(title)
    }

    selectCity(city){
        cy.get('#ad_listing_city_id_chzn > .chzn-single > span').click()
        cy.get('div[id="ad_listing_city_id_chzn"] ul[class="chzn-results"]').contains(city).click()
    }

    selectCategory(category, sub_category){
        cy.get('#category_selector').click()
        cy.get('.fs14.get-listing.make-listings').contains(category).click()
        cy.get('.col.col-2.cat-selection.models.pull-left.active').contains(sub_category).click()
    }

    selectCondition(condition){
        cy.get('#ad_listing_condition').select(condition)
    }

    enterDescription(description){
        cy.get('#ad_listing_description').type(description)
    }

    enterPhone(phone){
        cy.get(this.accessory_phone_loc).clear()
        cy.get(this.accessory_phone_loc).type(phone)
    }
}
export class SellForms{

    phone_loc = '#used_car_ad_listing_attributes_phone';
    bike_phone_loc = '#used_bike_ad_listing_attributes_phone';
    accessory_phone_loc = '#ad_listing_phone';

    openPakwheels(){
        cy.visit("https://www.pakgari.com")
        cy.get('#onesignal-slidedown-cancel-button').click()

    }

    enterMileage(mileage){
        cy.get('#mileage_text').type(mileage)
    }

    enterPrice(price){
        cy.get('#price_formatted').type(price)
    }

    enableWhatsappContact(){
        cy.get('.slider_whatsapp').click()
    }

    submitAd(){
        cy.wait(6000)
        // cy.get('#submit_form').click()
        cy.wait(20000)
    }

    clearMileage(){
        cy.get('#mileage_text').clear()
    }

    clearPrice(){
        cy.get('#price_formatted').clear()
    }

    attachPictures(imagePaths){
        imagePaths.forEach(image => {
            cy.get("input[type='file']").attachFile(image)
        });
    }
    
}
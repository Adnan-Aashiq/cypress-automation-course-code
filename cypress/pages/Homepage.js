export class Homepage{
    homePageURL = "https://www.pakgari.com/";
    bannerClose_Locator = "#onesignal-slidedown-cancel-button";
    usedCars_Locator = 'Find Used Cars for Sale';
    usedBike_Locator = 'Find Used Bikes';
    findAutoPart_Locator = 'Find Auto Parts';



    openHomePage(){
        cy.visit(this.homePageURL);
    }
    closeBanner(){
        cy.get(this.bannerClose_Locator).click();
    }
    clickOnUsedCars(){
        cy.contains(this.usedCars_Locator).click({force: true});
    }
    clickOnUsedBikes(){
        cy.contains(this.usedBike_Locator).click({force: true});
    }
    clickOnFindAutoParts(){
        cy.contains(this.findAutoPart_Locator).click({force: true});
    }
    
}
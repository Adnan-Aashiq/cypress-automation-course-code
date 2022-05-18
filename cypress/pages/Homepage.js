export class Homepage{
    homePageURL = "https://www.pakgari.com/";
    bannerClose_Locator = "#onesignal-slidedown-cancel-button";
    usedCars_Locator = 'Find Used Cars for Sale';
    usedBike_Locator = 'Find Used Bikes';
    findAutoPart_Locator = 'Auto Store';
    carInspection_Locator = '#certify-car-index';



    openHomePage(){
        cy.visit(this.homePageURL);
    }
    closeBanner(){
        cy.get(this.bannerClose_Locator).click();
    }
    ClickOnSignIn(){
        cy.contains('Sign In').click();
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
    clickOnCarInspection(){
        cy.get(this.carInspection_Locator).click();
    }
    clickAuctionSheetVerfication(){
        cy.contains('Auction Sheet Verification').click({force: true});
    }
    clickSIFM(){
        cy.contains('PakWheels Sell It For Me').click({force: true});
    }
    clickOnCarFinance(){
        cy.contains('Car Finance').click({force: true});
    }
    clickOnCarInsurance(){
        cy.contains('Car Insurance').click({force: true});
    }
    
}
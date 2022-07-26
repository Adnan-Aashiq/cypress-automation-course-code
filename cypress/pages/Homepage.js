export class Homepage{
    homePageURL = "https://www.pakgari.com/";
    openHomePage(){
        cy.visit(this.homePageURL);
    }
    closeBanner(){
        cy.get("#onesignal-slidedown-cancel-button").click();
    }
    ClickOnSignIn(){
        cy.contains('Sign In').click();
    }
    clickOnUsedCars(){
        cy.contains('Find Used Cars for Sale').click({force: true});
    }
    clickOnUsedBikes(){
        cy.contains('Find Used Bikes').click({force: true});
    }
    clickOnFindAutoParts(){
        cy.contains('Auto Store').click({force: true});
    }
    clickOnCarInspection(){
        cy.get('#certify-car-index').scrollIntoView().click();
    }
    clickAuctionSheetVerfication(){
        cy.contains('Auction Sheet Verification').scrollIntoView().click({force: true});
    }
    clickSIFM(){
        cy.contains('PakWheels Sell It For Me').scrollIntoView().click({force: true});
    }
    clickOnCarFinance(){
        cy.contains('Car Finance').scrollIntoView().click({force: true});
    }
    clickOnCarInsurance(){
        cy.contains('Car Insurance').scrollIntoView().click({force: true});
    }

    openMyAds(){
        cy.get('.username.dropdown-toggle').click()
        cy.get("a[href='/users/my-ads']").click()
    }
    
}
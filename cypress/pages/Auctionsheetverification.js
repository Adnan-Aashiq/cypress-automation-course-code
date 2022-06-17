export class AuctionSheetVerification{
    ChassisNumber = 'HE12-062075'
    
    inputChassisNumber(ChassisNumber){
        cy.get('#chassis-number').type(ChassisNumber);
    }
    verifyAuctionSheet(){
        cy.get('.btn.btn-success.btn-lg.fs20').click();
    }
    filling_Form(){
        cy.get('#auction_sheet_request_display_name').type('Adnan Aashiq')
        cy.get('#auction_sheet_request_email').type('sprint168@mailinator.com');
        cy.get('#auction_sheet_request_mobile_phone').type('03022149193')
        
    }
    clickOnBuyNow(){
        cy.get("input[value='Buy Now']").click();
    }

}
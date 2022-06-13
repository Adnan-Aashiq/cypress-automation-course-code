export class AuctionSheetVerification{
    
    inputChassisNumber(chassisNumber){
        cy.get('#chassis-number').type(chassisNumber);
    }
    verifyAuctionSheet(){
        cy.get("input[value='Verify Auction Sheet']").click();
    }
    filling_Form(name,email,phoneNumber){
        cy.get('#auction_sheet_request_display_name')
        .type(name)
        cy.get('#auction_sheet_request_email')
        .type(email);
        cy.get('#auction_sheet_request_mobile_phone')
        .type(phoneNumber)
        
    }
    clickOnBuyNow(){
        cy.get("input[value='Buy Now']").click();
    }

}
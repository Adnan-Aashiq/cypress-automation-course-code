import { MyAdsListing } from "./MyAdsListing"
const myAdListing = new MyAdsListing();
export class MyAdDetail{

    featureCredits = 0
    clickOnFeatureAd(){
        cy.get("a[title='Make your ad prominent and sell quickly.']").click()
    }

    getFeatureCreditsFromUpsell(){
        return cy.get("div[class='upsell-available pull-right text-center'] strong")
    }

    selectFeatureProduct(featureTime){
        cy.get('.upsell-list li h3.generic-basic').contains(featureTime).click()
    }

    verifyBusinessCreditPacksUpsell(){
        // Check business credits
        cy.get('#businessCredits button').click()
        cy.get('h3.generic-basic').contains('10 Car Ad Pack')
        cy.get('#featureCredits button').click()
    }

    submitFeature(){
        cy.get('#proceedToCheckout').click()
    }

    proceedToCheckOut(){
        cy.get("button[name='button'][type='submit']").click()
        cy.get('#payment_method_107').click()
        // cy.get('#proceed-checkout').click()
    }

    submitFeatureUsingCredit(){
        cy.get('#proceed-feature').click() 
    }

    verifyFeatureTill(){
        cy.get("div[class='cell manage-ad-features'] p").then(($el)=>{
            var featureText = $el.text()
            cy.log(featureText)
          })
    }

    verifyFeatureCredits(featureCreditsCount, featureDuration){
        cy.get('.username.dropdown-toggle').click()
        cy.get("a[href='/users/my-credits']").click()

        cy.get(".credits > :nth-child(2) > .list-unstyled > :nth-child(2)").contains('Cars Featured Ads').next().then(($el)=>{
            
            var currentFeatureCredits = $el.text()
            cy.wait(500)
            cy.log(currentFeatureCredits)
            cy.wait(500)
            cy.log(featureDuration)

            // feature credits verification
            if(featureDuration == '7 Days'){
            expect(currentFeatureCredits).to.equal((featureCreditsCount - 1).toString())
            } else if(featureDuration == '14 Days'){
            expect(currentFeatureCredits).to.equal((featureCreditsCount - 2).toString())
            } else if(featureDuration == '28 Days'){
            expect(currentFeatureCredits).to.equal((featureCreditsCount - 3).toString())
            } else{
            cy.log(currentFeatureCredits)
            }

        })
    }


    removeAd(soldPrice){
        
        cy.get("a[title='Remove your ad from search']").click()
        cy.get("label[id='label-sold'] span").click()
        cy.get("li[id='sold-options'] li:nth-child(1) label:nth-child(1)").click()
        cy.get('#remove-ad').click()
        cy.get('#sold_price').type(soldPrice)
        cy.get('#sold-price-submit').click()
        cy.get('.removed').should('have.text', 'Removed')

    }

    clickOnEdit(){
        cy.get("a[title='Change your ad details']").click()
    }

    getCommaSeperatedNumber(Number){
        return Number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    clickOnReActivate(){
        cy.get("a[title='List your ad in search']").click()
    }

    reActivateAdAndVerify(adMakeModelVersion){
    
        // Get normal car credits count
        cy.get('.username.dropdown-toggle').click()
        cy.get("a[href='/users/my-credits']").click()

        cy.get('ul.mt30 li').contains('Normal Car Ad Credits').next().then(($el)=>{
            
        const normalCarCreditsCount = $el.text()
        cy.log(normalCarCreditsCount)

        cy.get(".dashboard-nav .fa.fa-bullhorn").click()
        // Goto removed ad listing
        cy.get("a[href='/users/my-ads/st_removed']").click()
            
        myAdListing.openAdDetail(adMakeModelVersion)
        // click on reactivate button
        this.clickOnReActivate()

        // check relevant upsell
            if(normalCarCreditsCount > 0){
            
            cy.get('.upsell-list li h3.generic-basic').contains('7 Days').then(($el)=>{
                const upsellChk = $el.text().trim()
                expect(upsellChk).to.equal('7 Days')
            })

            }else{  cy.get('h3.generic-primary.mt10').should('have.text', 'Your Ad is Pending') }

        
        })
    }


    verifyAdEdit(updatedPrice, updatedMileage, updatedColor){

        cy.get("strong[class='active']").should('have.text', 'Active')
        cy.get("strong[class='generic-green']").should('have.text', 'PKR ' + (Number(updatedPrice) / 100000) + ' lacs')
        cy.get('.engine-icon.millage').next('p').should('have.text', this.getCommaSeperatedNumber(updatedMileage)+' km')
        cy.get('#scroll_car_detail li').contains(updatedColor)
    }

}

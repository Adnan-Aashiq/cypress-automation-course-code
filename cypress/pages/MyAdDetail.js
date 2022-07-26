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

        cy.get('ul.mt30 li').contains('Cars Featured Ads').next().then(($el)=>{
            
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
}

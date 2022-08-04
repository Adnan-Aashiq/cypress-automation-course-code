export class MyAdsListing{


    openAdDetail(adMakeModeVersion){
        // ad to pe passed
        cy.get('a.car-name.ad-detail-path').contains(adMakeModeVersion + ' for Sale').eq(0).parent()
        .then(($el)=>{
        cy.wrap($el).invoke('removeAttr', 'target').click()
        })

    }

}
export class UsedSearchFilters{

    clickOnMake(){

        cy.get(".accordion-heading").contains("Make").as("make")
        cy.get('@make').parent().find('a').then(($value)=>{
            var inputValue = $value.attr("aria-expanded")
            cy.log(inputValue)
        })
        
        // cy.get('@make').parent().siblings(".accordion-body").find("li").then(($makes)=>{
        //     let flag = false;
        //     cy.wrap($makes).each(($el,index,$list)=>{
        //         const title = $el.attr('title')
        //         if(title.includes("thhhth") ){
        //             cy.wrap($el).click();
        //             flag = true;
        //         }
        //     }).then(() => {
        //         if(flag == false){
        //             cy.wrap($makes).parents(".accordion-inner").find(".more-choice").click()
        //             cy.wrap($makes).parents(".accordion-inner").find(".list-unstyled.inline  > li > label> input").then(($modalmakes)=>{
        //                 cy.wrap($modalmakes).each(($element,index,$list)=>{
        //                     const modaltitles = $element.attr('value')
        //                     cy.log(modaltitles)
        //                     if(modaltitles.includes("adam") ){
        //                         cy.wrap($element).click();
        //                     }
        //                 })
        //             })
        //         }
        //      })
        // })
    }
    clickOnModel(Model){
        cy.get('.search-loader-fixed > img').should('not.be.visible');
        cy.get(Model).click();
    }
    clickOnVersion(Version){
        cy.get('.search-loader-fixed > img').should('not.be.visible');
        cy.get(Version).click();
    }
    clickOnCity(City){
        cy.get('.search-loader-fixed > img').should('not.be.visible');
        cy.get(City).click();
    }
    priceRangeSearch(priceFrom,priceTo){
        cy.get('.search-loader-fixed > img').should('not.be.visible');
        cy.get('#pr_from').type(priceFrom);
        cy.get('#pr_to').type(priceTo);
        cy.get('#pr-go').click();
    }
    clickOnColor(Color){
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.contains('Color').click()
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.contains(Color).click()
    }
    
    yearSearch(yearFrom,yearTo){
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.get('#yr_from').type(yearFrom);
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.get('#yr_to').type(yearTo);
        cy.get('#yr-go').click()
    }
    mileageSearch(mileageFrom,mileageTo){
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.get('#ml_from').type(mileageFrom)
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.get('#ml_to').type(mileageTo)
        cy.get('#ml-go').click()
    }
    clickOnRegisteredIn(registerCity){
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.contains("Registered In").get(".filter-check > a").contains(registerCity).click();
    }
    clearFilters(){
        cy.get('.clear-filters').should('have.text', "Clear All")
    
    }
    


    











}
// <reference types="cypress"/>
import {Homepage} from "../pages/Homepage"
import { FindUsedBikeHomePage } from "../pages/Findusedbikehomepage";
import { FindUsedAutoPartsHomepage } from "../pages/Findusedautopartshomepage";
import {UsedFilterSearch} from "../pages/UsedFilterSearch";
import { UsedCarSearch } from "../pages/Usedcarsearch";
import { UsedBikeSearch } from "../pages/Usedbikesearch";



const usedSearchFilterObj = new UsedFilterSearch();
const homePageObj = new Homepage();
const findUsedBikeHomePageObj = new FindUsedBikeHomePage();
const findUsedAutoPartsHomePageObj = new FindUsedAutoPartsHomepage();
const usedCarSearchObj = new UsedCarSearch();
const usedBikeSearchObj = new UsedBikeSearch();


describe('Search for car, bike and autopart', function(){
    it('Search for used car', function(){ 
        homePageObj.openHomePage();
        homePageObj.closeBanner();
        homePageObj.clickOnUsedCars();
        usedSearchFilterObj.clickOnMake(usedCarSearchObj.make_Locator);
        usedSearchFilterObj.clickOnModel(usedCarSearchObj.model_Locator);
        usedSearchFilterObj.clickOnVersion(usedCarSearchObj.version_Locator);
        usedSearchFilterObj.clickOnCity(usedCarSearchObj.city_Locator);
        usedSearchFilterObj.priceRangeSearch(usedCarSearchObj.priceFrom,usedCarSearchObj.priceTo);
        usedSearchFilterObj.clickOnColor(usedCarSearchObj.color);
        usedSearchFilterObj.yearSearch(usedCarSearchObj.yearFrom,usedCarSearchObj.yearTo);
        usedSearchFilterObj.mileageSearch(usedCarSearchObj.mileageFrom,usedCarSearchObj.mileageTo);
        usedSearchFilterObj.clickOnRegisteredIn(usedCarSearchObj.registerCity_Locator);
     })



    it('Search for used bikes', function(){

        homePageObj.openHomePage();
        homePageObj.closeBanner();
        homePageObj.clickOnUsedBikes();
        findUsedBikeHomePageObj.clickOnSearch();
        usedSearchFilterObj.clickOnMake(usedBikeSearchObj.make_Locator);
        usedSearchFilterObj.clickOnModel(usedBikeSearchObj.model_Locator);
        usedSearchFilterObj.clickOnCity(usedBikeSearchObj.city_Locator);
        usedSearchFilterObj.priceRangeSearch(usedBikeSearchObj.priceFrom,usedBikeSearchObj.priceTo);
        usedSearchFilterObj.yearSearch(usedBikeSearchObj.yearFrom,usedBikeSearchObj.yearTo);
        usedSearchFilterObj.mileageSearch(usedBikeSearchObj.mileageFrom,usedBikeSearchObj.mileageTo);
        usedSearchFilterObj.clickOnRegisteredIn(usedBikeSearchObj.registerCity_Locator);

        /*cy.visit('https://www.pakgari.com/used-bikes/search/-/')
        cy.get('#onesignal-slidedown-cancel-button').click()

        
        // Price Range
       

        // select location
        // cy.wait(4000)
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.contains('City').get('.filter-check').contains('Lahore').click()

        // Registration
        // cy.wait(4000)
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.contains('Registered In').get('.filter-check').contains('Lahore').click()

        // milage
        // cy.wait(2000)
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.get('#ml_from').should('be.visible').type('400')
        // cy.wait(1000)
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.get('#ml_to').should('be.visible').type('4000')
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.get('#ml-go').should('be.visible').click()  
        
        cy.get('.clear-filters').should('have.text', "Clear All")
        */
    })


    it('Search for autoparts', function(){
        homePageObj.openHomePage();
        homePageObj.closeBanner();
        homePageObj.clickOnFindAutoParts();
        findUsedAutoPartsHomePageObj.clickOnSearch();


        /*
        cy.visit('https://www.pakgari.com/accessories-spare-parts/search/-/')
        cy.get('#onesignal-slidedown-cancel-button').click()

        // select buy now ads checkbox
        // cy.wait(3000)
        // cy.get('.search-loader-fixed > img').should('not.be.visible')
        // cy.contains('Buy Now Ads Only').click()
        // select location checkbox
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.get('.filter-check > a').contains('Lahore').click()
        // Select category
        // cy.wait(3000)
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.contains('Category').get('#tree').contains('Car Care').click()
        // cy.wait(3000)
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        // cy.get('.hitarea').click()
        cy.get('.collapsable > .list-unstyled > :nth-child(1) > a').click()

        // Price Range
        // cy.wait(1000)
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.get('#pr_from').type('1000')
        // cy.wait(1000)
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.get('#pr_to').type('12000')
        cy.get('#pr-go').click()
        
        // With pictures filter
        // cy.wait(2000)
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.get('.filter-check > a').contains('With Pictures').click()

        cy.get('.search-loader-fixed > img').should('not.be.visible')
        */

    })


})
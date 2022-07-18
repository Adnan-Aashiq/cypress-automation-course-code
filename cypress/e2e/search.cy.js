// <reference types="cypress"/>
import {Homepage} from "../pages/Homepage"
import { FindUsedBikeHomePage } from "../pages/Findusedbikehomepage";
import {UsedSearchFilters} from "../pages/usedsearchfilters";
import { UsedCarSearch } from "../pages/Usedcarsearch";
import { UsedBikeSearch } from "../pages/Usedbikesearch";
import { UsedAutoPartsSearch } from "../pages/UsedAutoPartsSearch";



const usedSearchFilterObj = new UsedSearchFilters ();
const homePageObj = new Homepage();
const findUsedBikeHomePageObj = new FindUsedBikeHomePage();
const usedCarSearchObj = new UsedCarSearch();
const usedBikeSearchObj = new UsedBikeSearch();
const usedAutoPartsSearchObj = new UsedAutoPartsSearch();


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
        usedSearchFilterObj.clearFilters();
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
        usedSearchFilterObj.clearFilters();
    })


    it('Search for autoparts', function(){
        homePageObj.openHomePage();
        homePageObj.closeBanner();
        homePageObj.clickOnFindAutoParts();
        usedAutoPartsSearchObj.clickOnSearch();
        usedSearchFilterObj.clickOnCity(usedAutoPartsSearchObj.city_Locator);
        usedSearchFilterObj.priceRangeSearch(usedAutoPartsSearchObj.priceFrom,usedAutoPartsSearchObj.priceTo);
        usedAutoPartsSearchObj.clickOnCategory(usedAutoPartsSearchObj.category_Locator);
        usedAutoPartsSearchObj.withPictures();

    })


})
/// <reference types="cypress"/>
import {Homepage} from "../pages/Homepage"
import { FindUsedBikeHomePage } from "../pages/Findusedbikehomepage";
import {UsedSearchFilters} from "../pages/usedsearchfilters";
import { UsedAutoPartsSearch } from "../pages/UsedAutoPartsSearch";
import { LoginPage } from "../pages/Login";

const usedSearchFilterObj = new UsedSearchFilters ();
const homePageObj = new Homepage();
const findUsedBikeHomePageObj = new FindUsedBikeHomePage();
const usedAutoPartsSearchObj = new UsedAutoPartsSearch();
const Loginpageobj = new LoginPage();

const searchTestData = require("../fixtures/search.json")

describe('Search for car, bike and autopart', function(){
    
    searchTestData.usedCarSearch.forEach((data)=>{

        it.only('Search for used car', function(){ 
            homePageObj.openHomePage();
            homePageObj.closeBanner();
            homePageObj.ClickOnSignIn();
            Loginpageobj.loginWithEmail('sprint173@mailinator.com', '1234567')
            homePageObj.clickOnUsedCars();
            Object.keys(data).forEach(function(key) {
                usedSearchFilterObj.applyfilter(key,data[key])
              })
            usedSearchFilterObj.showphoneNumber()
            usedSearchFilterObj.clearFilters();
            usedSearchFilterObj.Addtofavourite();
         })
    })
    searchTestData.usedBikeSearch.forEach((data)=>{
        it('Search for used bikes', function(){
            homePageObj.openHomePage();
            homePageObj.closeBanner();
            homePageObj.clickOnUsedBikes();
            findUsedBikeHomePageObj.clickOnSearch();
            usedSearchFilterObj.applyfilter('City',data.city)
            usedSearchFilterObj.applyfilter('City Area',data.cityArea)
            usedSearchFilterObj.applyfilter('Year',"",data.yearFrom,data.yearTo)
            usedSearchFilterObj.applyfilter('Price Range',"",data.priceRangeFrom,data.priceRangeTo)
            usedSearchFilterObj.applyfilter('Make',data.make)
            usedSearchFilterObj.applyfilter('Model',data.model)
            usedSearchFilterObj.applyfilter('Registered In',data.registeredIn)
            usedSearchFilterObj.applyfilter('Engine Type',data.engineType)
            //usedSearchFilterObj.applyfilter('Mileage (Km)',"",'1000','80000')
            usedSearchFilterObj.applyfilter('Engine Capacity (cc)',"",data.engineCapacityFrom,data.engineCapacityTo)
            usedSearchFilterObj.applyfilter('Body Type',data.bodyType)
            usedSearchFilterObj.applyfilter('Seller Type',data.sellerType)
            usedSearchFilterObj.clearFilters();
        })
    })
    searchTestData.usedAccessorySearch.forEach((data)=>{
        it('Search for autoparts', function(){
            homePageObj.openHomePage();
            homePageObj.closeBanner();
            homePageObj.clickOnFindAutoParts();
            usedAutoPartsSearchObj.clickOnSearch();
            //usedSearchFilterObj.applyfilter('Category','Audio / Video')
            usedSearchFilterObj.applyfilter('Sale',data.sale)
            usedSearchFilterObj.applyfilter('Shop Now',data.shopNow)
            usedSearchFilterObj.applyfilter('Price Range',"",data.priceRangeFrom,data.priceRangeTo)
            //usedSearchFilterObj.applyfilter('Make','Honda')
            usedSearchFilterObj.applyfilter('Brand',data.brand)
            usedSearchFilterObj.applyfilter('City',data.city)
            usedSearchFilterObj.applyfilter('Picture Availability',data.pictureAvailability)
        })
    })
})
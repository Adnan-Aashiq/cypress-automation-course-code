/// <reference types="cypress"/>

import { Homepage } from "../pages/Homepage"
import { FindUsedBikeHomePage } from "../pages/Findusedbikehomepage";
import { UsedSearchFilters } from "../pages/usedsearchfilters";
import { UsedAutoPartsSearch } from "../pages/UsedAutoPartsSearch";
import { LoginPage } from "../pages/Login";

const usedSearchFilterObj = new UsedSearchFilters();
const homePageObj = new Homepage();
const findUsedBikeHomePageObj = new FindUsedBikeHomePage();
const usedAutoPartsSearchObj = new UsedAutoPartsSearch();
const Loginpageobj = new LoginPage();

const searchTestData = require("../fixtures/search.json")

describe('Search for car, bike and autopart', function () {
    beforeEach(() => {
        homePageObj.openHomePage();
        homePageObj.closeBanner();
        homePageObj.ClickOnSignIn();
        Loginpageobj.loginWithEmail('sprint173@mailinator.com', '1234567')
    })
    searchTestData.usedCarSearch.forEach((data) => {
        it('Search for used car', function () {
            homePageObj.clickOnUsedCars();
            Object.keys(data).forEach(function (key) {
                usedSearchFilterObj.applyfilter(key, data[key], 'usedCarSearch')
            })
            usedSearchFilterObj.showphoneNumber()
            usedSearchFilterObj.clearFilters();
            usedSearchFilterObj.Addtofavourite();
        })
    })
    searchTestData.usedBikeSearch.forEach((data) => {
        it('Search for used bikes', function () {
            homePageObj.clickOnUsedBikes();
            findUsedBikeHomePageObj.clickOnSearch();
            Object.keys(data).forEach(function (key) {
                usedSearchFilterObj.applyfilter(key, data[key], 'usedBikeSearch')
            })
            usedSearchFilterObj.showphoneNumber()
            usedSearchFilterObj.clearFilters();
            usedSearchFilterObj.Addtofavourite();
        })
    })
    searchTestData.usedAccessorySearch.forEach((data) => {
        it('Search for autoparts', function () {
            homePageObj.clickOnFindAutoParts();
            usedAutoPartsSearchObj.clickOnSearch();
            Object.keys(data).forEach(function (key) {
                usedSearchFilterObj.applyfilter(key, data[key], 'usedAccessorySearch')
            })
            usedSearchFilterObj.Addtofavourite('usedAccessorySearch');
        })
    })
})
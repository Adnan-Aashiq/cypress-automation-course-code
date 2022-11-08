/// <reference types="cypress"/>

import { LoginPage } from '../pages/Login';
import { CarSellForm } from '../pages/CarSellForm';
import { BikeSellForm } from '../pages/BikeSellForm';
import { AccessorySellForm } from '../pages/AccessorySellForm';
import { Homepage } from '../pages/Homepage';
import { MyAdsListing } from '../pages/MyAdsListing';
import { MyAdDetail } from '../pages/MyAdDetail'
const login = new LoginPage();
const carSellForm = new CarSellForm();
const bikeSellForm = new BikeSellForm();
const accessorySellForm = new AccessorySellForm();
const homePage = new Homepage();
const myAdsLiting = new MyAdsListing();
const myAdDetail = new MyAdDetail();

const adDetails = require('../fixtures/adDetails.json');

describe('Ad Posting', function () {
  adDetails.carAdDetails.forEach((carAdDetail) => {
    it.skip('', () => {
      cy.visit('https://www.pakgari.com/clear-number?numbers=03601234567')
      cy.get('body').should('have.text', 'OK')
    })
    it.skip('Post a Car ad', function () {
      carSellForm.openPakwheels()
      carSellForm.gotoCarSellForm()
      login.loginWithPhone('03601234567', '123456')
      carSellForm.clickContinueFromSellOption()
      carSellForm.selectCity(carAdDetail.city)
      carSellForm.selectCityArea(carAdDetail.city_area)
      carSellForm.selectYearMakeModelVersion(carAdDetail.model_year, carAdDetail.make, carAdDetail.model, carAdDetail.version)
      carSellForm.selectRegistrationCity(carAdDetail.reg_city)
      carSellForm.selectExteriorColor(carAdDetail.exterior_color)

      // Skip duplicate pop-up
      //   cy.get('.model-footer > .btn').click()

      carSellForm.enterMileage(carAdDetail.mileage)
      carSellForm.enterPrice(carAdDetail.price)
      carSellForm.enterDescription(carAdDetail.description)
      carSellForm.selectDescPreSuggestValues()
      carSellForm.attachPictures(carAdDetail.image_paths)
      carSellForm.selectEngineType(carAdDetail.engine_type)
      carSellForm.enterEngineCapacity(carAdDetail.engine_capacity)
      carSellForm.selectTransmission(carAdDetail.transmission)
      carSellForm.selectAssembly(carAdDetail.assembly)
      carSellForm.selectFeatures(carAdDetail.features)
      // enter price again because of price calculator
      carSellForm.enterPrice(carAdDetail.price)
      carSellForm.sellername()
      carSellForm.enterPhone(carAdDetail.phone)
      carSellForm.enableWhatsappContact()
      carSellForm.submitAd()
      cy.get('h1').then(($el) => {
        var text = $el.text()
        expect('Your Ad has been Posted Successfully!').to.be.eq(text.trim())
      })
    })
  })

  adDetails.car_ad_edit.forEach((editDetails) => {
    it.skip('Edit ad from my ad detail', function () {

      carSellForm.openPakwheels()
      login.clickOnSignIn()
      login.loginWithPhone('03601234567', '123456')
      homePage.openMyAds()
      myAdsLiting.openAdDetail(editDetails.ad_detail)
      myAdDetail.clickOnEdit()

      carSellForm.clearMileage()
      carSellForm.enterMileage(editDetails.mileage)
      carSellForm.clearPrice()
      carSellForm.enterPrice(editDetails.price)
      carSellForm.enterDescription(editDetails.description)
      carSellForm.selectExteriorColor(editDetails.color)
      carSellForm.submitAd()
      cy.get('.table-alert > div:nth-child(2)').then(($el) => {
        var text = $el.text()
        expect('Your Ad has been successfully updated.').to.be.eq(text.trim())
      })
      myAdDetail.verifyAdEdit(editDetails.price, editDetails.mileage, editDetails.color)
    })
  })


  it.skip('Feature Ad from ad detail through payment', function () {
    //pending due to jazzcash
    var featureDuration = '28 Days'
    var adDetail = 'Toyota Corolla GLi Automatic 1.3 VVTi'

    carSellForm.openPakwheels()
    login.clickOnSignIn()
    login.loginWithPhone('03601234567', '123456')
    homePage.openMyAds()
    myAdsLiting.openAdDetail(adDetail)
    myAdDetail.clickOnFeatureAd()
    myAdDetail.verifyBusinessCreditPacksUpsell()

    // Product to be selected
    myAdDetail.selectFeatureProduct(featureDuration)

    myAdDetail.submitFeature()

    // myAdDetail.proceedToCheckOut()

    //https://sandbox.jazzcash.com.pk/CustomerPortal/TransactionManagement/TransactionSelection
    // Jazz cash navigation
    // cy.origin('https://sandbox.jazzcash.com.pk/CustomerPortal/TransactionManagement/TransactionSelection', () => {
    //   //Jazz cash flow
    //   cy.get('#mobileAccount1').type('03123456789')
    //   cy.get('#MasterBtnPay').click()
    //   cy.wait(10000)

    // })

    // cy.get("div[class='cell manage-ad-features'] p").then(($el)=>{
    //   featureText = $el.text()
    //   console.log(featureText)
    // })

  })


  adDetails.feature_ads_with_credits.forEach((featureAdDetails) => {
    it.only('Feature Ad from ad detail through credits', function () {

      carSellForm.openPakwheels()
      login.clickOnSignIn()
      login.loginWithPhone('03601234567', '123456')
      homePage.openMyAds()
      myAdsLiting.openAdDetail(featureAdDetails.ad_detail)
      myAdDetail.clickOnFeatureAd()

      // get feature credits
      myAdDetail.getFeatureCreditsFromUpsell().then(($el) => {
        var featureCreditsCount = $el.text()
        cy.log(featureCreditsCount)

        // Product to be selected
        myAdDetail.selectFeatureProduct(featureAdDetails.feature_duration)
        // submit feature
        myAdDetail.submitFeatureUsingCredit()

        myAdDetail.verifyFeatureTill()

        myAdDetail.verifyFeatureCredits(featureCreditsCount, featureAdDetails.feature_duration)

      })
    })

  })


  it.skip('Remove active ad from my ad detail', function () {
    carSellForm.openPakwheels()
    login.clickOnSignIn()
    login.loginWithEmail('sprint168@mailinator.com', '1234567')
    homePage.openMyAds()
    myAdsLiting.openAdDetail(adDetails.remove_ad_title)
    myAdDetail.removeAd(adDetails.remove_sold_price)

  })


  it.skip('re-activate ad from my ad detail', function () {
    carSellForm.openPakwheels()
    login.clickOnSignIn()
    // login.loginWithPhone('03128984447','123456')
    login.loginWithEmail('sprint168@mailinator.com', '1234567')
    myAdDetail.reActivateAdAndVerify(adDetails.reactivate_ad)

  })


  adDetails.bikeAdDetails.forEach((bikeAdDetail) => {
    it('Post a Bike ad', function () {
      bikeSellForm.openPakwheels()
      bikeSellForm.gotoBikeSellForm()
      // Login
      login.loginWithEmail('sprint173@mailinator.com', '1234567')
      // It should already navigate to bike sell form after login website consistency issue
      bikeSellForm.gotoBikeSellForm()
      bikeSellForm.selectCity(bikeAdDetail.city)
      bikeSellForm.selectCityArea(bikeAdDetail.city_area)
      bikeSellForm.selectYearMakeModel(bikeAdDetail.model_year, bikeAdDetail.make, bikeAdDetail.model)
      bikeSellForm.selectRegistrationCity(bikeAdDetail.reg_city)
      bikeSellForm.enterMileage(bikeAdDetail.mileage)
      bikeSellForm.selectEngineType(bikeAdDetail.engine_type)
      bikeSellForm.enterDescription(bikeAdDetail.description)
      bikeSellForm.enterPrice(bikeAdDetail.price)
      bikeSellForm.selectFeatures(bikeAdDetail.features)
      bikeSellForm.attachPictures(bikeAdDetail.image_paths)
      bikeSellForm.enterPhone(bikeAdDetail.phone)
      bikeSellForm.enableWhatsappContact()
      bikeSellForm.submitAd()
    })
  })


  adDetails.accessoryAdDetails.forEach((accessoryAdDetail) => {
    it('Post an autopart ad', function () {
      accessorySellForm.openPakwheels()
      accessorySellForm.openAccessorySellForm()
      // Login
      login.loginWithEmail('sprint173@mailinator.com', '1234567')
      // It should already navigate to autopart sell form after login website consistency issue
      accessorySellForm.openAccessorySellForm()
      accessorySellForm.enterTitle(accessoryAdDetail.title)
      accessorySellForm.selectCity(accessoryAdDetail.city)
      accessorySellForm.selectCategory(accessoryAdDetail.category, accessoryAdDetail.sub_category)
      accessorySellForm.selectCondition(accessoryAdDetail.condition)
      accessorySellForm.enterDescription(accessoryAdDetail.description)
      accessorySellForm.enterPrice(accessoryAdDetail.price)
      accessorySellForm.attachPictures(accessoryAdDetail.image_paths)
      accessorySellForm.enterPhone(accessoryAdDetail.phone)
      accessorySellForm.submitAd()
    })

  })


})
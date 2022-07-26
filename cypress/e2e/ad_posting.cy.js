{/* <reference types="cypress"/> */}
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

  it.only('Feature Ad from ad detail through payment', function(){
    
    var featureDuration = '28 Days'
    var adDetail = 'Suzuki Cultus VXL'
    
    carSellForm.openPakwheels()
    login.clickOnSignIn()
    login.loginWithEmail('webtest170@mailinator.com', '1234567')
    homePage.openMyAds()
    myAdsLiting.openAdDetail(adDetail)
    myAdDetail.clickOnFeatureAd()
    myAdDetail.verifyBusinessCreditPacksUpsell()

    // Product to be selected
    myAdDetail.selectFeatureProduct(featureDuration)

    myAdDetail.submitFeature()

    myAdDetail.proceedToCheckOut()

    //https://sandbox.jazzcash.com.pk/CustomerPortal/TransactionManagement/TransactionSelection
    // Jazz cash navigation
    // cy.origin('https://sandbox.jazzcash.com.pk/CustomerPortal/TransactionManagement/TransactionSelection', () => {
    //   //Jazz cash flow
    //   cy.get('#mobileAccount1').type('03123456789')
    //   cy.get('#MasterBtnPay').click()
    //   cy.wait(10000)

    // })

    cy.get("div[class='cell manage-ad-features'] p").then(($el)=>{
      featureText = $el.text()
      console.log(featureText)
    })
    
  })

  it('Feature Ad from ad detail through credits', function(){

    var featureDuration = '28 Days'
    var adDetail = 'Toyota Corolla XLi VVTi'
    
    carSellForm.openPakwheels()
    login.clickOnSignIn()
    login.loginWithEmail('webtest170@mailinator.com', '1234567')
    homePage.openMyAds()
    myAdsLiting.openAdDetail(adDetail)
    myAdDetail.clickOnFeatureAd()
   
    // get feature credits
    myAdDetail.getFeatureCreditsFromUpsell().then(($el)=>{
      var featureCreditsCount = $el.text()
      cy.log(featureCreditsCount)

      // Product to be selected
      myAdDetail.selectFeatureProduct(featureDuration)
      // submit feature
      myAdDetail.submitFeatureUsingCredit()

      myAdDetail.verifyFeatureTill()
      
      myAdDetail.verifyFeatureCredits(featureCreditsCount, featureDuration)

      })

    
  })



  it('Remove active ad from my ad detail',function(){
    carSellForm.openPakwheels()
    login.clickOnSignIn()
    // login.loginWithPhone('03128984447','123456')
    login.loginWithEmail('webtest170@mailinator.com', '1234567')
    cy.get('.username.dropdown-toggle').click()
    cy.get("a[href='/users/my-ads']").click()
    // ad to pe passed
    cy.get('a.car-name.ad-detail-path').contains('Suzuki Cultus VXL' + ' for Sale').parent()
    .then(($el)=>{
      cy.wrap($el).invoke('removeAttr', 'target').click()
    })

    cy.get("a[title='Remove your ad from search']").click()
    cy.get("label[id='label-sold'] span").click()
    cy.get("li[id='sold-options'] li:nth-child(1) label:nth-child(1)").click()
    cy.get('#remove-ad').click()
    cy.get('#sold_price').type('1600000')
    cy.get('#sold-price-submit').click()
    cy.get('.removed').should('have.text', 'Removed')

  })

  it('Edit ad from my ad detail', function(){
    carSellForm.openPakwheels()
    login.clickOnSignIn()
    // login.loginWithPhone('03128984447','123456')
    login.loginWithEmail('webtest170@mailinator.com', '1234567')
    cy.get('.username.dropdown-toggle').click()
    cy.get("a[href='/users/my-ads']").click()
    // ad to pe passed
    cy.get('a.car-name.ad-detail-path').contains('Toyota Corolla XLi VVTi' + ' for Sale').parent()
    .then(($el)=>{
      cy.wrap($el).invoke('removeAttr', 'target').click()
    })

    cy.get("a[title='Change your ad details']").click()

    carSellForm.clearMileage()
    carSellForm.enterMileage("500000")
    carSellForm.clearPrice()
    carSellForm.enterPrice("2700000")
    carSellForm.enterDescription('get the ad edit')
    carSellForm.selectExteriorColor('White')
    carSellForm.submitAd()

    cy.get("strong[class='active']").should('have.text', 'Active')
    cy.get("strong[class='generic-green']").should('have.text', 'PKR 27 lacs')
    cy.get('.engine-icon.millage').next('p').should('have.text', '500,000 km')
    cy.get('#scroll_car_detail li').contains('White')


  })


  it('re-activate ad from my ad detail', function(){

    carSellForm.openPakwheels()
    login.clickOnSignIn()
    // login.loginWithPhone('03128984447','123456')
    login.loginWithEmail('webtest170@mailinator.com', '1234567')
    
    // credit get code
    // Get normal car credits count
    cy.get('.username.dropdown-toggle').click()
    cy.get("a[href='/users/my-credits']").click()

    cy.get('ul.mt30 li').contains('Normal Car Ad Credits').next().then(($el)=>{
        
      const normalCarCreditsCount = $el.text()
      cy.log(normalCarCreditsCount)

      cy.get(".dashboard-nav .fa.fa-bullhorn").click()
      // Goto removed ad listing
      cy.get("a[href='/users/my-ads/st_removed']").click()
        
      // open ad to pe passed
      cy.get('a.car-name.ad-detail-path').contains('Suzuki Cultus VXL' + ' for Sale').parent().then(($el)=>{
        cy.wrap($el).invoke('removeAttr', 'target').click()          
      })

      // click on reactivate button
      cy.get("a[title='List your ad in search']").click()

      // check relevant upsell
        if(normalCarCreditsCount > 0){
          
          cy.get('.upsell-list li h3.generic-basic').contains('7 Days').then(($el)=>{
            const upsellChk = $el.text().trim()
            expect(upsellChk).to.equal('7 Days')
          })

        }else{  cy.get('h3.generic-primary.mt10').should('have.text', 'Your Ad is Pending') }

    
    })  

  })



  adDetails.carAdDetails.forEach((carAdDetail) => {
    it('Post a Car ad', function () {
      carSellForm.openPakwheels()
      carSellForm.gotoCarSellForm()
      login.loginWithEmail('sprint168@mailinator.com', '1234567')
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
      carSellForm.selectEngineType(carAdDetail.engine_type)
      carSellForm.enterEngineCapacity(carAdDetail.engine_capacity)
      carSellForm.selectTransmission(carAdDetail.transmission)
      carSellForm.selectAssembly(carAdDetail.assembly)
      carSellForm.selectFeatures(carAdDetail.features)
      // enter price again because of price calculator
      carSellForm.enterPrice(carAdDetail.price)
      carSellForm.enterPhone(carAdDetail.phone)
      carSellForm.enableWhatsappContact()
      carSellForm.submitAd()
    })
  })



  adDetails.bikeAdDetails.forEach((bikeAdDetail) => {
    it('Post a Bike ad', function () {
      bikeSellForm.openPakwheels()
      bikeSellForm.gotoBikeSellForm()
      // Login
      login.loginWithEmail('sprint168@mailinator.com', '1234567')
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
      login.loginWithEmail('sprint168@mailinator.com', '1234567')
      // It should already navigate to autopart sell form after login website consistency issue
      accessorySellForm.openAccessorySellForm()
      accessorySellForm.enterTitle(accessoryAdDetail.title)
      accessorySellForm.selectCity(accessoryAdDetail.city)
      accessorySellForm.selectCategory(accessoryAdDetail.category, accessoryAdDetail.sub_category)
      accessorySellForm.selectCondition(accessoryAdDetail.condition)
      accessorySellForm.enterDescription(accessoryAdDetail.description)
      accessorySellForm.enterPrice(accessoryAdDetail.price)
      accessorySellForm.enterPhone(accessoryAdDetail.phone)
      accessorySellForm.submitAd()
    })

  })
})  
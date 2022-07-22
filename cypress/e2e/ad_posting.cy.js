{/* <reference types="cypress"/> */}
import { LoginPage } from '../pages/Login';
import { CarSellForm } from '../pages/CarSellForm';
import { BikeSellForm } from '../pages/BikeSellForm';
import { AccessorySellForm } from '../pages/AccessorySellForm';
const login = new LoginPage();
const carSellForm = new CarSellForm();
const bikeSellForm = new BikeSellForm();
const accessorySellForm = new AccessorySellForm();

const adDetails = require('../fixtures/adDetails.json'); 

describe('Ad Posting', function () {

  it.only('Feature Ad from ad detail', function(){
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
    
    cy.get("a[title='Make your ad prominent and sell quickly.']").click()
    // Check business credits
    cy.get('#businessCredits button').click()
    cy.get('h3.generic-basic').contains('10 Car Ad Pack')
    cy.get('#featureCredits button').click()
    // Product to be selected
    cy.get('.upsell-list li h3.generic-basic').contains('28 Days').click()
    
    cy.get('#proceedToCheckout').click()
    cy.get("button[name='button'][type='submit']").click()
    cy.get('#payment_method_107').click()
    cy.get('#proceed-checkout').click()

    //https://sandbox.jazzcash.com.pk/CustomerPortal/TransactionManagement/TransactionSelection
    // Jazz cash navigation
    cy.origin('https://sandbox.jazzcash.com.pk/CustomerPortal/TransactionManagement/TransactionSelection', () => {
      //Jazz cash flow
      cy.get('#mobileAccount1').type('03123456789')
      cy.get('#MasterBtnPay').click()
      cy.wait(10000)

    })

    cy.get("div[class='cell manage-ad-features'] p").then(($el)=>{
      featureText = $el.text()
      console.log(featureText)
    })
    


  })

  it('Remove ad from my ad detail',function(){
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
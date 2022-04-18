// <reference types="cypress"/>
import {LoginPage} from '../pages/Login';
import { CarSellForm } from '../pages/CarSellForm';
import { BikeSellForm } from '../pages/BikeSellForm';
const login = new LoginPage();
const carSellForm = new CarSellForm();
const bikeSellForm = new BikeSellForm();
const carAdDetails= require('../fixtures/carAdDetails.json');
const bikeAdDetails= require('../fixtures/bikeAdDetails.json');

describe('Ad Posting', function(){

// carAdDetails.forEach((carAdDetail)=>{
//   it('Post a Car ad', function(){

//     carSellForm.openPakwheels()
    
//     carSellForm.gotoCarSellForm()
  
//     login.loginWithEmail('newweb@mailinator.com', '1234567')
  
//     carSellForm.clickContinueFromSellOption()
  
//     carSellForm.selectCity(carAdDetail.city)
  
//     carSellForm.selectCityArea(carAdDetail.city_area)
  
//     carSellForm.selectYearMakeModelVersion(carAdDetail.model_year, carAdDetail.make, carAdDetail.model, carAdDetail.version)
  
//     carSellForm.selectRegistrationCity(carAdDetail.reg_city)
  
//     carSellForm.selectExteriorColor(carAdDetail.exterior_color)
  
//     // Skip duplicate pop-up
//     //   cy.get('.model-footer > .btn').click()
  
//     carSellForm.enterMileage(carAdDetail.mileage)
  
//     carSellForm.enterPrice(carAdDetail.price)
  
//     carSellForm.enterDescription(carAdDetail.description)
//     carSellForm.selectDescPreSuggestValues()
  
//     carSellForm.selectEngineType(carAdDetail.engine_type)
  
//     carSellForm.enterEngineCapacity(carAdDetail.engine_capacity)
  
//     carSellForm.selectTransmission(carAdDetail.transmission)
  
//     carSellForm.selectAssembly(carAdDetail.assembly)
  
//     carSellForm.selectFeatures(carAdDetail.features)
  
//     // enter price again because of price calculator
//     carSellForm.enterPrice(carAdDetail.price)
  
//     carSellForm.enterPhone(carAdDetail.phone)
      
//     carSellForm.enableWhatsappContact()
  
//     // carSellForm.submitAd()
  
//   })

// })  


bikeAdDetails.forEach((bikeAdDetail)=>{
  it('Post a Bike ad', function(){

    bikeSellForm.openPakwheels()
  
    bikeSellForm.gotoBikeSellForm()
    
    // Login
  
    login.loginWithEmail('newweb@mailinator.com', '1234567')
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

    // bikeSellForm.submitAd() 
  
  })
  
  
})

it.skip('Post an autopart ad', function(){

  cy.get('.logo-blue > img').click({force: true})
  cy.wait(3000)
  cy.get('#onesignal-slidedown-cancel-button').click()
  cy.contains('Sell Accessory').click({force: true})

  // Login
  login.loginWithEmail('newweb@mailinator.com', '1234567')

  cy.contains('Sell Accessory').click({force: true})
  // Enter title
  cy.get('#ad_listing_title').type('Car Wax')

  // Select City
  cy.get('#ad_listing_city_id_chzn > .chzn-single > span').click()
  cy.get('#ad_listing_city_id_chzn_o_7').click()

  // Skip the duplicate pop-up
  cy.get('.model-footer > .btn').click() 

  // Select Category
  cy.get('#category_selector').click()
  cy.get('#category_276 > a').click()
  cy.get('#model_325 > a').click()

  // Select condition
  cy.get('#ad_listing_condition').select('Used')
  
  // Enter description
  cy.get('#ad_listing_description').type('This is the test description for autopart ad posting from cypress automation')

  // Enter Price
  cy.get('#price_formatted').type('3200')

  // Pictures

  // User contact info

  // Not needed when logged in
  // cy.get('#ad_listing_display_name').type('Test user')
  cy.get('#ad_listing_phone').clear()
  cy.get('#ad_listing_phone').type('03915134567')

  // Submit and continue
  cy.get('#submit_form').click()
  cy.wait(2000)

  // Assertions
  // cy.get('h1').should('have.text', 'Car Wax')
  // cy.get('.price-box > .generic-green').should('have.text', 'PKR 3,200')

})

})
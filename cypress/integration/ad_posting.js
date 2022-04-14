// <reference types="cypress"/>
import {LoginPage} from '../pages/Login';
import { SellForms } from '../pages/SellForms';
const login = new LoginPage();
const sellForm = new SellForms();
const carAdDetails= require('../fixtures/carAdDetails.json'); 

describe('Ad Posting', function(){

it.only('Post a Car ad', function(){

  sellForm.openPakwheels()

  sellForm.gotoCarSellForm()

  login.loginWithEmail('newweb@mailinator.com', '1234567')

  sellForm.clickContinueFromSellOption()

  sellForm.selectCity(carAdDetails.city)

  sellForm.selectCityArea(carAdDetails.city_area)

  sellForm.selectYearMakeModelVersion(carAdDetails.model_year, carAdDetails.make, carAdDetails.model, carAdDetails.version)

  sellForm.selectRegistrationCity(carAdDetails.reg_city)

  sellForm.selectExteriorColor(carAdDetails.exterior_color)

// // Skip duplicate pop-up
//   cy.get('.model-footer > .btn').click()

  sellForm.enterMileage(carAdDetails.mileage)

  sellForm.enterPrice(carAdDetails.price)

  sellForm.enterDescription(carAdDetails.description)
  sellForm.selectDescPreSuggestValues()

  sellForm.selectEngineType(carAdDetails.engine_type)

  sellForm.enterEngineCapacity(carAdDetails.engine_capacity)

  sellForm.selectTransmission(carAdDetails.transmission)

  sellForm.selectAssembly(carAdDetails.assembly)

  sellForm.selectFeatures(carAdDetails.features)

  // enter price again because of price calculator
  sellForm.enterPrice(carAdDetails.price)

  sellForm.enterPhone(carAdDetails.phone)
  
  sellForm.enableWhatsappContact()

  // sellForm.submitAd()

})

it('Post a Bike ad', function(){

  cy.get('.logo-blue > img').click({force: true})
  cy.wait(3000)
  cy.get('#onesignal-slidedown-cancel-button').click()
  cy.contains('Sell Your Bike').click({force: true})
  
  // Login
  login.loginWithEmail('newweb@mailinator.com', '1234567')
  
  cy.contains('Sell Your Bike').click({force: true})
  // Ad form

  // Select City
  cy.get('#used_bike_ad_listing_attributes_city_id_chzn > .chzn-single > span').click()
  cy.get('#used_bike_ad_listing_attributes_city_id_chzn_o_7').click()
  // select City area
  cy.get('#used_bike_ad_listing_attributes_city_area_id_chzn > .chzn-single > span').click()
  cy.get('#used_bike_ad_listing_attributes_city_area_id_chzn_o_2').click()

  // select make model
  cy.get('#bike_selector').click()
  cy.get('#model_year_2019 > a').click()
  cy.get('#make_16 > a').click()
  cy.get('#model_470 > a').click()

  // registration city
  cy.get('#used_bike_reg_city_id_chzn > .chzn-single > span').click()
  cy.get('#used_bike_reg_city_id_chzn_o_7').click()

  // Enter Mileage
  cy.get('#mileage_text').type('67000')

  // Select engine type
  cy.get('#used_bike_engine_type').select('4 Stroke')

  // Enter description
  cy.get('#used_bike_ad_listing_attributes_description').type('This is the test text for automation of bike ad post')

  // Enter Price
  cy.get('#price_formatted').type('109000')

  // Select features
  cy.get('.list-unstyled > :nth-child(1) > label').click()
  cy.get('.list-unstyled > :nth-child(3) > label').click()

  // User name and phone number

  // Not needed when logged in
  // cy.get('#used_bike_ad_listing_attributes_display_name').type('Test User') 
  cy.get('#used_bike_ad_listing_attributes_phone').clear()
  cy.get('#used_bike_ad_listing_attributes_phone').type('03915134567')

  // Submit and continue
  cy.get('#submit_form').click()
  cy.wait(2000)

  // Skip upsell for pending state ad
  // cy.get('.btn-link-outline-gray').click()
  
  // Assertions
  // cy.get('h1').should('have.text', 'Honda CG 125 2019')
  // cy.get('.price-box > .generic-green').should('have.text', 'PKR 1.09 lacs')


})

it('Post an autopart ad', function(){

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
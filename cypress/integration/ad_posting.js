/// <reference types="cypress"/>

// npx cypress open
describe('Ad Posting', function(){

it('Post a Car ad', function(){

  cy.visit("https://www.pakgari.com")
  cy.get('#onesignal-slidedown-cancel-button').click()

  cy.get('[title="Post an Ad"]').click()
  cy.get('#select-sell-option').click()
  cy.get('.with-email').click()
  cy.get('#username').type('newweb@mailinator.com')
  cy.get('#password').type('1234567')
  cy.get(':nth-child(6) > .btn').click()

// Select City
  cy.get('#used_car_ad_listing_attributes_city_id_chzn > .chzn-single > span').click()
  cy.get('#used_car_ad_listing_attributes_city_id_chzn_o_7').click()
// select City area
  cy.get('#used_car_ad_listing_attributes_city_area_id_chzn > .chzn-single > span').click()
  cy.get('#used_car_ad_listing_attributes_city_area_id_chzn_o_2').click()
// Select year make model
  cy.get('#car_selector').click()
  cy.get('#model_year_2019 > a').click()
  cy.get('#make_42 > a').click()
  cy.get('#model_294 > a').click()
  cy.get('[version_id="771"][generation_id="139"] > a').click()
// Select Registration City
  cy.get('#used_car_reg_city_id_chzn > .chzn-single > span').click()
  cy.get('#used_car_reg_city_id_chzn_o_7').click()
// Select Exterior Color
  cy.get('#used_car_exterior_color_chzn > .chzn-single > span').click()
  cy.get('#used_car_exterior_color_chzn_o_4').click()
// Skip duplicate pop-up
  cy.get('.model-footer > .btn').click()
// Enter Mileage
  cy.get('#mileage_text').type('67000')

// Enter Price
  cy.get('#price_formatted').type('1900000')
// Ad description
  cy.get('#used_car_ad_listing_attributes_description').type('Automation test description test. ')
  cy.get('#Bumper-to-Bumper').click()
  cy.get('#Like').click()
  cy.get('#Price').click()
// Ad pictures
  // cy.get('a.pickfiles').click()
  // cy.get('a.pickfiles').attachFile('car_ad_pictures/car1.jpg');

// Select Engine Type
  cy.get('#used_car_engine_type').select('Petrol')
// Enter engine capacity
  cy.get('#used_car_engine_capacity').type('1000')
// Select Transmission
  cy.get('#used_car_transmission').select('Automatic')
// Select Assembly
  cy.get('#used_car_assembly').select('Imported')
// Select Feature
  cy.get('#used_car_rear_speakers').click()
// Enter Price again for price calculator
  cy.get('#price_formatted').type('1900000')
  // Enter phone number
  cy.get('#used_car_ad_listing_attributes_phone').clear()
  cy.get('#used_car_ad_listing_attributes_phone').type('03915134567')
  // Enter Secondary phone number
  // cy.get('#used_car_ad_listing_attributes_phone_1').type('03913456789')
  // Submit and continue
  cy.get('#submit_form').click()

  // Skip upsell for pending state ad
  // cy.get('.btn-link-outline-gray').click()
  
  // Assertions
  cy.get('h1').should('have.text', 'Toyota Vitz F 1.3 2019')
  cy.get('.price-box > .generic-green').should('have.text', 'PKR 19 lacs')

})

it('Post a Bike ad', function(){

  cy.get('.logo-blue > img').click({force: true})
  cy.wait(3000)
  cy.get('#onesignal-slidedown-cancel-button').click()
  cy.contains('Sell Bike').click({force: true})
  
  // Login
  cy.get('.with-email').click()
  cy.get('#username').type('newweb@mailinator.com')
  cy.get('#password').type('1234567')
  cy.get(':nth-child(6) > .btn').click()
  
  
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

  // Add photos

  // User name and phone number

  // Not needed when logged in
  // cy.get('#used_bike_ad_listing_attributes_display_name').type('Test User') 
  cy.get('#used_bike_ad_listing_attributes_phone').clear()
  cy.get('#used_bike_ad_listing_attributes_phone').type('03915134567')

  // Submit and continue
  cy.get('#submit_form').click()
  cy.wait(2000)

  // Skip upsell for pending state ad
  cy.get('.btn-link-outline-gray').click()
  
  // Assertions
  cy.get('h1').should('have.text', 'Honda CG 125 2019')
  cy.get('.price-box > .generic-green').should('have.text', 'PKR 1.09 lacs')


})

it('Post an autopart ad', function(){

  cy.get('.logo-blue > img').click({force: true})
  cy.wait(3000)
  cy.get('#onesignal-slidedown-cancel-button').click()
  cy.contains('Sell Accessory').click({force: true})

  // Login
  cy.get('.with-email').click()
  cy.get('#username').type('newweb@mailinator.com')
  cy.get('#password').type('1234567')
  cy.get(':nth-child(6) > .btn').click()

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
  cy.get('h1').should('have.text', 'Car Wax')
  cy.get('.price-box > .generic-green').should('have.text', 'PKR 3,200')

})

})
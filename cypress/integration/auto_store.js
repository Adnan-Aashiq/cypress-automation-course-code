// <reference types="cypress"/>
import {Homepage} from "../pages/Homepage"
import { FindUsedAutoPartsHomepage } from "../pages/Findusedautopartshomepage";

const homePageObj = new Homepage();
const findUsedAutoPartsHomePageObj = new FindUsedAutoPartsHomepage();


describe('Auto Store', function(){

it('Place an estore order', function(){
  homePageObj.openHomePage();
  homePageObj.closeBanner();
  homePageObj.clickOnFindAutoParts();
  findUsedAutoPartsHomePageObj.TypeInSearch(findUsedAutoPartsHomePageObj.searchField_Locator,findUsedAutoPartsHomePageObj.searchKeyword);
  findUsedAutoPartsHomePageObj.ClickOnSearch(findUsedAutoPartsHomePageObj.seachButton_Locator);
  findUsedAutoPartsHomePageObj.ClickOnAddToCart(findUsedAutoPartsHomePageObj.item_Locator1,findUsedAutoPartsHomePageObj.item_Locator2);
  findUsedAutoPartsHomePageObj.ClickOnCart();
  findUsedAutoPartsHomePageObj.ClickOnShippingButton();
  

  /*
    cy.contains('View Cart').click()

    cy.get('button[class="btn pull-left"]').eq(1).click()
    cy.get(':nth-child(2) > .checkout-footer > .btn').click() 

    cy.get('#order_name').clear()
    cy.get('#order_name').type('Test Order')

    cy.get('#order_phone').type('03915134567')
    cy.get('#order_comments').type('Testing order')

    cy.get('#recent-address > :nth-child(1)').click()
    cy.get('.well > .checkout-footer > .btn').click()
    */  
})


})
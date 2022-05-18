// <reference types="cypress"/>
import {Homepage} from "../pages/Homepage"
import { FindUsedAutoPartsHomepage } from "../pages/Findusedautopartshomepage";
import {LoginPage} from '../pages/Login';

const homePageObj = new Homepage();
const findUsedAutoPartsHomePageObj = new FindUsedAutoPartsHomepage();
const login = new LoginPage();


describe('Auto Store', function(){

it('Place an estore order', function(){
  homePageObj.openHomePage();
  homePageObj.closeBanner();
  cy.contains('Sign In').click();
  login.loginWithEmail('sprint167@mailinator.com','Test123');
  homePageObj.clickOnFindAutoParts();
  findUsedAutoPartsHomePageObj.TypeInSearch(findUsedAutoPartsHomePageObj.searchField_Locator,findUsedAutoPartsHomePageObj.searchKeyword);
  findUsedAutoPartsHomePageObj.ClickOnSearch(findUsedAutoPartsHomePageObj.seachButton_Locator);
  findUsedAutoPartsHomePageObj.ClickOnAddToCart(findUsedAutoPartsHomePageObj.item_Locator1,findUsedAutoPartsHomePageObj.item_Locator2);
  findUsedAutoPartsHomePageObj.ClickOnCart();
  findUsedAutoPartsHomePageObj.ClickOnShippingButton();
  findUsedAutoPartsHomePageObj.FillingShippingInfo();
})


})
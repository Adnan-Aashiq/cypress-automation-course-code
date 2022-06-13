// <reference types="cypress"/>
import {Homepage} from "../pages/Homepage"
import { FindUsedAutoPartsHomepage } from "../pages/Findusedautopartshomepage";
import {LoginPage} from '../pages/Login';

const homePageObj = new Homepage();
const findUsedAutoPartsHomePageObj = new FindUsedAutoPartsHomepage();
const login = new LoginPage();


const autoStoreTestData = require("../fixtures/parts.json")

describe('Auto Store', function(){
  autoStoreTestData.forEach((data)=>{
    it('Place an estore order', function(){
      homePageObj.openHomePage();
      homePageObj.closeBanner();
      homePageObj.ClickOnSignIn();
      login.loginWithEmail('sprint167@mailinator.com','Test123');
      homePageObj.clickOnFindAutoParts();
      findUsedAutoPartsHomePageObj.TypeInSearch(data.keyword);
      findUsedAutoPartsHomePageObj.ClickOnSearch();
      findUsedAutoPartsHomePageObj.ClickOnAddToCart(data.parts);
      findUsedAutoPartsHomePageObj.ClickOnCart();
      findUsedAutoPartsHomePageObj.verifyShippingPrice()
      findUsedAutoPartsHomePageObj.verifyTotalPrice();
      findUsedAutoPartsHomePageObj.verifyGrandTotal();
      //findUsedAutoPartsHomePageObj.ClickOnShippingButton();
      //findUsedAutoPartsHomePageObj.FillingShippingInfo();
    })
  })

})
/// <reference types="cypress"/>
import { Homepage } from "../pages/Homepage"
import { FindUsedAutoPartsHomepage } from "../pages/Findusedautopartshomepage";
import { LoginPage } from '../pages/Login';

const homePageObj = new Homepage();
const findUsedAutoPartsHomePageObj = new FindUsedAutoPartsHomepage();
const login = new LoginPage();


const autoStoreTestData = require("../fixtures/parts.json")

describe('Auto Store', function () {
  beforeEach(() => {
    homePageObj.openHomePage();
    homePageObj.closeBanner();
    homePageObj.ClickOnSignIn();
  })
  autoStoreTestData.forEach((data) => {
    it('Place an estore order', function () {
      login.loginWithEmail('sprint168@mailinator.com', '1234567');
      homePageObj.clickOnFindAutoParts();
      findUsedAutoPartsHomePageObj.TypeInSearch(data.keyword);
      findUsedAutoPartsHomePageObj.ClickOnSearch();
      findUsedAutoPartsHomePageObj.ClickOnAddToCart(data.parts);
      findUsedAutoPartsHomePageObj.ClickOnCart();
      //findUsedAutoPartsHomePageObj.changingQuantity()

      findUsedAutoPartsHomePageObj.verifyShippingPrice()
      findUsedAutoPartsHomePageObj.verifyTotalPrice();
      findUsedAutoPartsHomePageObj.verifyGrandTotal();
      
      findUsedAutoPartsHomePageObj.promoPercenatge(data.percentage);
      findUsedAutoPartsHomePageObj.removeItem(data.partsToRemove);

      findUsedAutoPartsHomePageObj.verifyShippingPrice()
      findUsedAutoPartsHomePageObj.verifyTotalPrice();
      findUsedAutoPartsHomePageObj.verifyGrandTotal();

      findUsedAutoPartsHomePageObj.ClickOnShippingButton();
      findUsedAutoPartsHomePageObj.FillingShippingInfo();
    })
  })

})
export class FindUsedAutoPartsHomepage{
    searchKeyword = 'mat';
    seachButton_Locator  = '#ad-listings-search-btn'
    searchField_Locator = '.accessory_search.full-field';
    item_Locator1 = "li[id='main_ad_2321951'] button[class*='add-cart-item']";
    item_Locator2 = "li[id='main_ad_2168817'] button[class*='add-cart-item']";
    cart_Locator = '#cart-url > .fa';


    TypeInSearch(Field,searchKeyword){
        cy.get(Field).type(searchKeyword);
    }
    ClickOnSearch(Button){
        cy.get(Button).click();
    }
    ClickOnAddToCart(Item1,Item2){
        cy.get(Item1).click();
        cy.get(Item2).click();
    }
    ClickOnCart(){
        cy.get('#cart-url > .fa').click({force:true});
    }
    ClickOnShippingButton(){
        cy.get("td[class='checkout-footer'] button[class='btn btn-primary pull-right']").click()
    }

}
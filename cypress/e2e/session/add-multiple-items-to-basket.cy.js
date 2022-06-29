/// <reference types="cypress" />

describe("Add mutiple items to basket", () => {
    before(function(){
        
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.fixture("products").then(function(data){
            globalThis.data = data;
        })
    })
    beforeEach(() => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
    })
    it("Add specific items to basket", () => {
        globalThis.data.productName.forEach(function(element){
            cy.addProductToBasket(element).then(()=>{
                //debugger
            })
        })
        //cy.get(".dropdown-toggle > .fa").click().debug()
        cy.get(".dropdown-toggle > .fa").click()
    });
})
/// <reference types="cypress" />

describe("Alias and invoke", () => {
    it("Validate a specific hair care product", () => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
        cy.get('.fixed .prdocutname').eq(1).invoke('text').as('thumnailText');
        cy.get('@thumnailText').its('length').should('be.gt', 8)
        cy.get('@thumnailText').should('include', 'Pantene Pro-V Conditioner, Classic Care')
    });
    it("Assignment", () => {
        cy.visit("https://automationteststore.com/")
        cy.get('.thumbnail').as('allthumnail');
        cy.get('@allthumnail').should('have.length', 16);
        cy.get('@allthumnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
    });
    it.only("calculate total of normal and sale product", () => {
        //instrcutor code
        // cy.visit("https://automationteststore.com/");
        // cy.get('.thumbnail').as('productThumbnail')
        // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
        //     cy.log($el.text());
        // });

        //instrcutor code using cypress commands
        cy.visit("https://automationteststore.com/");
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice');
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice');
        var itemsTotal = 0;
        cy.get('@itemPrice').then($linkText => {
            var totalItemPrice=0;
            var itemPrice = $linkText.split('$');
            var i;
            for(i = 0; i < itemPrice.length; i++) {
                cy.log(itemPrice[i])
                totalItemPrice += Number(itemPrice[i])
            }
            cy.log("Non Sale item total prices : " +totalItemPrice)
            itemsTotal+=totalItemPrice
        })
        cy.get('@saleItemPrice').then($linkText => {
            var totalSaleItemPrice=0;
            var saleItemPrice = $linkText.split('$');
            var i;
            for(i = 0; i < saleItemPrice.length; i++) {
                cy.log(saleItemPrice[i])
                totalSaleItemPrice += Number(saleItemPrice[i])
            }
            cy.log("Sale item total prices : " +totalSaleItemPrice)
            itemsTotal+=totalSaleItemPrice
        })
        .then(()=>{
            cy.log(itemsTotal);
            expect(itemsTotal).to.equal(648.5)
        })
        
        //my code
        // cy.visit("https://automationteststore.com/")
        // cy.get('.thumbnail').find('.oneprice').as('prices');
        // cy.get('@prices').each(($el, index, $list) => {
        //     cy.log($el.text());
        // })
    });


})
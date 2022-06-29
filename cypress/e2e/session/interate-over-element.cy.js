/// <reference types="cypress" />

describe("iterate over elements", () => {
    beforeEach(()=>{
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
    })
    it("Log information of all hair care product", () => {
        
        cy.get(".fixed .prdocutname").each(($el, index, $list) => {
            cy.log("Index : " + " : " + $el.text())
        })
    });
    it("Add specific product to basket", () => {
        cy.selectProduct('Eau Parfumee au The Vert Shampoo');
    })
    it("Add another specific product to basket", () => {
        cy.selectProduct('Pantene Pro-V Conditioner, Classic Care');
    })
})
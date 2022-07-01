/// <reference types="cypress" />

describe("Test Contact Us form via Automation Test Store", () => {
    it.only("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[title='Skinsheen Bronzer Stick']").click();
    });
    it("Should be able to submit a successful submission via contact us form using item text", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click()
        .then(function(innerHeaderText){
            console.log("Selected item is " + innerHeaderText.text());
        })
    });
    it("Should be able to submit a successful submission via contact us form using item index", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get('.fixed_wrapper').find('.prdocutname').eq(2).click();
    });
})
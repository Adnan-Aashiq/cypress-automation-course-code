/// <reference types="cypress" />

describe("verifying varaibles, cypress commands and jquery commands", () => {
    it("navigated to specific product pages", () => {
        cy.visit("https://automationteststore.com/")
        //the following code will pass
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains('Makeup')
        // makeupLink.click();
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains('Skincare')
        // skincareLink.click();
        //the following code will fail
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains('Makeup')
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains('Skincare')
        // makeupLink.click();
        // skincareLink.click();

        //recommended approach
        cy.get("a[href*='product/category&path=']").contains('Makeup').click();
        cy.get("a[href*='product/category&path=']").contains('Skincare').click();
    });
    it("best way to use varaibles", () => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains('Makeup').click();
        //following code fails
        // const header = cy.get(".maintext")
        // cy.log(header.text())

        //recommended approach
        cy.get(".maintext").then(($headerText) =>{
            const headerText = $headerText.text();
            cy.log("Found header text "+ headerText);
            expect(headerText).is.eq("Makeup")
        })
    })
    it.only("validate the properties of conatct us page", () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact")
        //uses cypress commands and chainingg
        cy.contains("#ContactUsFrm","Contact Us Form").find("#field_11").should('contain','First name');

        //jquery approach
        cy.contains("#ContactUsFrm","Contact Us Form").then(($contactUsDiv) => {
            const fieldText = $contactUsDiv.find('#field_11').text();
            expect(fieldText).to.contain('First name')

            //embedded commands (closure)
            cy.get('#field_11').then(fnText =>{
                cy.log(fnText.text())
            })
        })

        //embedded commands (closure)

        })
})
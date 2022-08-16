/// <reference types="cypress" />

describe("Test file upload via webdriveruni", () => {
    it.only("Upload a file....", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#file-upload').invoke('removeAttr', 'target').click({ force: true })
        cy.fixture("laptop.png","base64").then(fileContent=>{
            cy.get("#myFile").attachFile(
                {
                    fileContent,
                    fileName : "laptop.png",
                    mimeType : "image/png"
                },
                {
                    uploadType : "input"
                }
            )
        })
        cy.get("#submit-button").click();

    })
    it("Upload not a file....", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#file-upload').invoke('removeAttr', 'target').click({ force: true })
        cy.get("#submit-button").click();

    })
});
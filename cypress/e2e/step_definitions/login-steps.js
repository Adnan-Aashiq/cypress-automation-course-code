import {Before, Given, When, And ,Then } from "cypress-cucumber-preprocessor/steps";

Given('I access the WebdriverUni Login portal page',()=>{
    cy.visit("https://webdriveruniversity.com/Login-Portal/index.html")
})

When('I enter a username webdriver {word}',(username)=>{
    cy.get("#text").type(username)
})
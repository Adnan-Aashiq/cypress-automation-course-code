/// <reference types="cypress"/>
export class LoginPage{
    clickOnSignIn(){
        cy.contains('Sign In').click();
    }
    // Login from pop-up
    loginWithEmail(email, pass){
        cy.get('a[data-login-method="SignInWithEmail"]').click()
        cy.get('#username').type(email);
        cy.get('#password').type(pass);
        cy.get('#frm_login > .btn').click()
    }



}
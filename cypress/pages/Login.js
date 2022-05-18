export class LoginPage{

    // Login from pop-up
    loginWithEmail(email, pass){
        cy.contains('Sign In').click();
        cy.get('a[data-login-method="SignInWithEmail"]').click()
        cy.get('#username').type(email);
        cy.get('#password').type(pass);
        cy.get('#frm_login > .btn').click()
        return this;
    }


}
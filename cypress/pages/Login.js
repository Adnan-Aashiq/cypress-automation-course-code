export class LoginPage{
    otpCodeArr;

    clickOnSignIn(){
        cy.contains('Sign In').click();
    }
    // Login from pop-up
    loginWithEmail(email, pass){
        cy.get('a[data-login-method="SignInWithEmail"]').click()
        cy.get('#username').type(email)
        cy.get('#password').type(pass)
        cy.get('#frm_login > .btn').click()
    }

    loginWithPhone(phone, otpCode){
        cy.get('#mobile-number').type(phone)
        cy.get('#mobile-number-submit-btn').click()
        this.enterOtpCodeLoginPopup(otpCode)
        cy.get('#opt-verify-popup > div > div > div > a.btn.btn-primary.mt40.fwb').click()

    }

    enterOtpCodeLoginPopup(otp){
        this.otpCodeArr = Array.from(otp.toString()).map(Number)

        cy.get('.input-cont').each(($el, index)=>{
            cy.wrap($el).find('input').type(this.otpCodeArr[index])
        })
    }

}
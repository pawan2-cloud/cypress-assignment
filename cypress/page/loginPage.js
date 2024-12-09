import { BaseAction } from "./baseAction";
const pom = {
    inputEmail: "#email",
    inputPassword: "#pass",
    signInBtn: "#send2",
    emailEmptyFieldError:"#email-error",
    passwordEmptyFieldError:"#pass-error"
}


export class LoginPage extends BaseAction {

    /**
     * Login using email and password
     * @param {String} email 
     * @param {String} password 
     */
    login(email, password) {
        this.typeElement(pom.inputEmail, email);
        this.typeElement(pom.inputPassword, password);
        this.clickElement(pom.signInBtn);
    }

    /**
     * Click on Create an Account button
     */
    clickOnCreateAnAccountBtn() {
        this.clickByText("button", "Create an Account");
    }


    /**
     * Verfiy error message
     * @param {String} errorText 
     */
    verifyErrorMessage(errorText){
        this.verifyText(errorText);
    }


    /**
     * 
     * @param {boolean} isEmailEmpty 
     * @param {String} errorText 
     */
    verifyEmptyFieldError(errorText,isEmailEmpty=true){
        Cypress.config('defaultCommandTimeout',10000);
        if(isEmailEmpty)this.verifyTextElementEqualsTo(pom.emailEmptyFieldError,errorText);
        else this.verifyTextElementEqualsTo(pom.emailEmptyFieldError,errorText)
    }

}
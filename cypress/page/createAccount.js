import { PageNavigation } from "./pageNavigation";
const pom = {
    inputFirstName: "#firstname",
    inputLastName: "#lastname",
    inputEmail: "#email_address",
    inputPassword: "#password",
    inputConfirmPassword: "#password-confirmation",
};

export class CreateAccount extends PageNavigation {
    /**
     * Fill user info using userInfo
     * @param {String} userInfo.firstName
     * @param {String} userInfo.lastName
     * @param {String} userInfo.email
     * @param {String} userInfo.password
     * @param {String} userInfo.confirmPassword
     */
    fillAndSubmitUserInfo({
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
    } = userInfo) {
        this.typeElement(pom.inputFirstName, firstName);
        this.typeElement(pom.inputLastName, lastName);
        this.typeElement(pom.inputEmail, email);
        this.typeElement(pom.inputPassword, password);
        this.typeElement(pom.inputConfirmPassword, confirmPassword);
        this.clickByText("button", "Create an Account");
    }
}

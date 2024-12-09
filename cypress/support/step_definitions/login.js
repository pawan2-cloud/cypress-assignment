import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { PageNavigation } from "../../page/pageNavigation";
import { LoginPage } from "../../page/loginPage";
import { MyAccountPage } from "../../page/myAccountPage";
const errorMessage = "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.";
const emptyFieldError="This is a required field.";

beforeEach(function () {
  this.pageNavigation = new PageNavigation();
  this.loginPage = new LoginPage();
  this.myAccountPage = new MyAccountPage();
  cy.fixture("user").then((data) => {
    this.data = data;
  });
});

Given("User visit to Login page", function () {
  this.pageNavigation.navigateToLoginPage();
});


When("User entered the email {string} and password {string}", function (email, password) {
  this.loginPage.login(
    email,
    password
  );
});



Then("User should land to the My Account Page", function () {
  this.myAccountPage.verifyMyAccountHeading();
  this.myAccountPage.verifyEmail(this.data.userValidCreds.email);
});


Then("User should see an error message", function () {
  this.loginPage.verifyErrorMessage(errorMessage);
})

Then("User should see an empty field error message", function () {
  this.loginPage.verifyEmptyFieldError(emptyFieldError);
  this.loginPage.verifyEmptyFieldError(emptyFieldError,false);

})


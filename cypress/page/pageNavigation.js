import { BaseAction } from "./baseAction";
export class PageNavigation extends BaseAction {
    /**
     * Navigate to home page
     */
    navigateToHomepage() {
        this.goTo("/");
    }

    /**
     * Navigate to login page
     */
    navigateToLoginPage() {
        this.goTo("/customer/account/login");
    }

    /**
     * Navigate to create account page
     */
    navigateToCreateAccountPage() {
        this.goTo("/customer/account/create/");
    }
}

import { BaseAction } from "./baseAction";

export class MyAccountPage extends BaseAction{
    verifyMyAccountHeading(){
        this.verifyTextElementEqualsTo("h1 span", "My Account");
    }

    verifyEmail(email){
        this.verifyText(email);
    }
}
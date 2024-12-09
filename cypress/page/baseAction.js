export class BaseAction {
    /**
     * Navigate to page
     * @param {String} endPoint 
     */
    goTo(endPoint = "/") {
        cy.visit(endPoint);
    }
 
    /**
     * Fill the element
     * @param {String} selector 
     * @param {String} input 
     * @param {Object} opts 
     */
    typeElement(selector, input, opts = {}) {
        cy.get(selector).clear();
        cy.get(selector).type(input, opts);
    }

    /**
     * Click on the element
     * @param {String} selector 
     * @param {Object} opts 
     */
    clickElement(selector, opts = {}) {
        cy.get(selector).click(opts);
    }

    /**
     * Click on element using text
     * @param {String} element 
     * @param {String} text 
     * @param {Object} opts 
     */
    clickByText(element, text, opts = {}) {
        cy.contains(element, text).click(opts);
    }

    /**
     * Verify text element using equal assertion
     * @param {String} selector 
     * @param {String} text 
     */
    verifyTextElementEqualsTo(selector,text){
        cy.get(selector).then($el=>{
            expect($el.text()).to.equal(text);
        })
    }

    /**
     * Verify text should be visible 
     * @param {String} text 
     */
    verifyText(text){
        cy.contains(text).should('be.visible');
    }
}
class BasicWebElements_page {
    elements ={
        basicElementTab:() => cy.get('#basicpagetest'),
        headingMessage:()=>cy.get('h1'),
        explanation :()=>cy.get('.explanation > p'),
        para1:()=>cy.get('#para1'),
        para2:()=>cy.get('#para2'),
        index:()=>cy.get('.page-navigation > a'),
        homepage:()=>cy.get('h1')

    }
    navigateToTheBasicWebPage(){
        this.elements.basicElementTab().contains('Basic Web Page Example').should('be.visible').click()
        // cy.contains('Basic Web Page Example').click()
        this.elements.explanation().should('be.visible')
    }
    backToHomePage(){
        cy.go('back')
        this.elements.homepage().should('have.text','Practice Applications and Pages For Automating and Testing')
    }
}
export const basicWebElements = new BasicWebElements_page();

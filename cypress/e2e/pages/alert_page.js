class Alert_page {
    elements={
        alertTab :()=>cy.get("#alerttest"),
        title:()=>cy.get('h1'),
        alertButton:()=>cy.get("#alertexamples"),
        peraBody1:()=>cy.get('.page-body > :nth-child(4)'),
        confirmButton:()=>cy.get('#confirmexample'),
        peraBody2:()=>cy.get(':nth-child(8)'),
        confirmTrue:()=>cy.get('#confirmreturn'),
        confirmationMessage1:()=>cy.get('#confirmexplanation'),
        confirmFalse:()=>cy.get('#confirmreturn'),
        confirmationMessage2:()=>cy.get('#confirmexplanation'),
        promptButton:()=>cy.get("#promptexample"),
        promptReturnString:()=>cy.get('#promptreturn')

    }
    navigateToAlertTab(){
        this.elements.alertTab().contains('Alerts (JavaScript)').
        should('be.visible').click()
        this.elements.title().should('contain',"Alert_page Box Examples")
    }
    clickToTheAlertButton(){
        this.elements.peraBody1().should('be.visible')
        this.elements.alertButton().click()
    }
    clickToTheConfirmButton(){
        this.elements.confirmButton().click()
        cy.on("window:confirm",(confirmText)=>{
            expect(confirmText).to.equal('I am a confirm alert')
        })

    }
    TrueConfirmation(){
        this.elements.confirmTrue().should('have.text',"true")
        this.elements.confirmationMessage1().should('have.text',"You clicked OK, confirm returned true.")
    }
    FalseConfirmation(){
        this.elements.confirmFalse().should("have.text","false")
        this.elements.confirmationMessage2().should("include.text","You clicked Cancel,")
    }
    enterTextInPrompt(text){
        cy.window().then(win=>{
            cy.stub(win, "prompt").returns(text);
        })
        this.elements.promptButton().click()
    }

    PromptReturn(text){
        this.elements.promptReturnString().should("have.text",text)
    }
}
export const alert = new Alert_page()

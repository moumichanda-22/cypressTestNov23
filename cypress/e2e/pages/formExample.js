class Form_example{
    elements = {
        formTab:()=>cy.get('#htmlformtest'),
        formHeading:()=>cy.get('h1'),
        userName:()=>cy.get('input[type="text"]'),
        passWord:()=>cy.get('input[type="password"]'),
        textArea:()=>cy.get('textarea'),
        uploadFile:()=>cy.get('[type="file"]'),
        multipleValues:()=>cy.get('select[multiple="multiple"]'),
        dropDown:()=>cy.get('select[name="dropdown"]'),
        checkBox:()=>cy.get('input[type="checkbox"]'),
        radioButton:()=>cy.get('input[type="radio"]'),
        submit:()=>cy.get('[type="submit"]')


    }
    navigateToFormPage(){
        this.elements.formTab().click()
    }
    inputElements(Username,Password,TextArea,Filename,MultipleSelectValues,Dropdown){
        this.elements.userName().first().type(Username)
        this.elements.passWord().type(Password)
        this.elements.textArea().clear().type(TextArea)
        cy.fixture('desktop.png').as('myFixture')
        this.elements.uploadFile().selectFile('@myFixture')
        this.elements.dropDown().select(4).should('contain.text','Drop Down Item 5')
        this.elements.multipleValues().select(1).should('contain.text', 'Selection Item 2')
    }
    SelectCheckBox(Checkbox){
        this.elements.checkBox().uncheck()
        this.elements.checkBox().eq(1).check()
    }
    SelectRadioButton(){
        this.elements.radioButton().eq(0).check()
    }
    submitTheForm(){
        this.elements.submit().click()
        cy.get('h1').should('have.text','Processed Form Details')
    }

}
export const form = new Form_example()

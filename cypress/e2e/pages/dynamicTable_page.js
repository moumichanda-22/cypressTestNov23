class DynamicTable_page {
    elements={
        dynamicTable :()=>cy.get("#dynamictablestest"),
        table :()=>cy.get("table"),
        summary :()=>cy.get('summary'),
        inputValue :()=>cy.get('#jsondata'),
        tableCaption:()=>cy.get('caption'),
        caption:()=>cy.get('#caption'),
        tableId:()=>cy.get('#tableid'),
        refreshButton:()=>cy.get('#refreshtable')

    }
    navigateToTheDynamicTable(){
        this.elements.dynamicTable().contains('Dynamic Table Test Page').
        should('be.visible').click();
        cy.contains('Dynamic HTML TABLE Tag').should('be.visible')
        this.elements.tableCaption().should('have.text','Dynamic Table')
    }
    modifiedTable() {
        this.elements.summary().contains("Table Data").click()
        this.elements.inputValue().clear()
        this.elements.inputValue().type('[{{}"Name" : "Ck", "Color" : "Black","Height":"2feet","Weight":"50kg"}, ' +
            '{{}"Name": "Mk", "Color" : "White","Height":"3feet","Weight":"60kg"}]')
    }
    captionChange(){
        this.elements.caption().clear().type('New Table')
        this.elements.tableId().clear().type('New Table')
    }
    refreshTheTable(){
        this.elements.refreshButton().contains('Refresh Table').should('be.visible').click()
    }

}
export const dynamic = new DynamicTable_page();

class HtmlTable{
    elements ={
        TableTestPage :()=>cy.get("#tablestest"),
        homePage :()=>cy.get('h1'),
        table:()=>cy.get('table')


    }
    navigateToTablePage(){
        this.elements.TableTestPage().contains('Table Test Page').should('be.visible').click()
        cy.contains('HTML TABLE Tag').should('be.visible')
    }
    tableInformation(Name,Amount){
        this.elements.table()
    }
    backToTheHomePage(){
        cy.go('back')
        this.elements.homePage().should('contain.text',"Practice Applications and Pages For Automating and Testing")

    }


}
export const htmlTablePage = new HtmlTable();

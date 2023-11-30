class IBGESite {
   static enterURL(url) {
     cy.visit(url);
   }
 
   static clickOnSpecificElement() {
     cy.get('a.popclock-home').click();
     cy.wait(2000);
   }
   static verifyExpectedResult() {
     cy.contains('IBGE').should('exist');
   }
 }
 
export default IBGESite;
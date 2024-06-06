class JpIBGE {
   static enterURL(url) {
     cy.visit(url);
   }
 
   static ClickJP() {
      cy.get('#nomeAreaTerritorialHome').scrollIntoView().select('João Pessoa ( PB ) - 2507507', { force: true });
   }
 
   static verifyPage() {
     cy.contains('João Pessoa').should('exist');
   }
 }
 
 export default JpIBGE;
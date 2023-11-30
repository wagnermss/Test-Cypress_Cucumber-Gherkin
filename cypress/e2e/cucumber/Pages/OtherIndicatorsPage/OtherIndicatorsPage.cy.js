class Otherindicators {
   static enterURL(url) {
     cy.visit(url);
   };
 
   static digitOnSpecificElement() {
      cy.get('a.btn-outros-indicadores[href="/indicadores.html"]').click();
      cy.wait(2000);
   };

   static verifyExpectedResult() {
      cy.contains('Painel de Indicadores').should('exist');
   };
}
 
export default Otherindicators;
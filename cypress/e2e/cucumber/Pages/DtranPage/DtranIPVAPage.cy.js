class DetranIPVA {
   static acceptCookies() {
     cy.get('button[name="collective.disclaimer.ok"]').click();
   }
 
   static enterURL(url) {
     cy.visit(url);
     this.acceptCookies();
   }
 
   static clickButton() {
     cy.get('a.external-link[href="https://www.sefaz.pb.gov.br/servirtual/ipva/emitir-dar"]:first').click();
   }
 
   static verifyPage() {
     cy.contains('Acesso Rápido').should('exist');
   }
 }
 
 export default DetranIPVA;
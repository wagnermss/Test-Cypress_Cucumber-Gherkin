class SiteIBGE {
   static enterURL(url) {
     cy.visit(url);
   }
 
   static clickButton() {
      cy.get('a.link-vertodos.banners').click();
   }
 
   static verifyPage() {
     cy.contains('Nossos Sites').should('exist');
   }
 }
 
 export default SiteIBGE;
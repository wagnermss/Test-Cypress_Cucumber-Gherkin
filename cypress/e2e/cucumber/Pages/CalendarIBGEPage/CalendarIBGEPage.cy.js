class CalendarIBGE {
   static enterURL(url) {
     cy.visit(url);
   }
 
   static ClickCalendar() {
     cy.get('a.botao-home[href="/calendario-de-divulgacoes-novoportal.html"]').first().click();
   }
 
   static verifyPage() {
     cy.contains('Próximas Divulgações').should('exist');
   }
 }
 
 export default CalendarIBGE;
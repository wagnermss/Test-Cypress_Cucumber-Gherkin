/// <reference types="cypress" />
import CalendarIBGE from "../../Pages/CalendarIBGEPage/CalendarIBGEPage.cy";
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

Given("site IBGE", () => {
   CalendarIBGE.enterURL("https://www.ibge.gov.br/");
});

When("clicar no botao calendario completo", () => {
   CalendarIBGE.ClickCalendar();
});

Then("verei o calendario do ano de 2023", () => {
   CalendarIBGE.verifyPage();
});
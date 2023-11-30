/// <reference types="cypress" />
import IBGESite from "../../Pages/DateAcessPage/DateAcessPage.cy";
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

Given("Navegar ate o site", () => {
  IBGESite.enterURL("https://www.ibge.gov.br/");
});

When("Clicar no catalogo de populaçao", () => {
  IBGESite.clickOnSpecificElement();
});

Then("Verei o resultado de dados relacionado a populaçao brasileira", () => {
  IBGESite.verifyExpectedResult();
});
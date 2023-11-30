/// <reference types="cypress" />
import IBGESite from "../../Pages/SitesIBGEPage/SitesIBGEPage.cy";
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

Given("IBGE site", () => {
  IBGESite.enterURL("https://www.ibge.gov.br/");
});

When("clicar no link para ver outros sites", () => {
  IBGESite.clickButton();
});

Then("verei lista de sites", () => {
  IBGESite.verifyPage();
});
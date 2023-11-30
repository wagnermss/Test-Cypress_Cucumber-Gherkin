/// <reference types="cypress" />
import JpIBGE from "../../Pages/JpIBGE/JpIBGEPage.cy";
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

Given("IBGE", () => {
   JpIBGE.enterURL("https://www.ibge.gov.br/");
});

When("clicar no <select> e selecionar Joao Pessoa", () => {
   JpIBGE.ClickJP();
});

Then("verei os dados da cidade de Joao Pessoa", () => {
   JpIBGE.verifyPage();
});
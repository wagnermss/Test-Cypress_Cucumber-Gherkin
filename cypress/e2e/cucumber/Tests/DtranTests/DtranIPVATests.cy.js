/// <reference types="cypress" />
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import DetranIPVA from "../../Pages/DtranPage/DtranIPVAPage.cy";

Given("Dtran site", () => {
   DetranIPVA.enterURL("https://detran.pb.gov.br/");
});

When("clicar no link para ver IPVA", () => {
   DetranIPVA.clickButton();
});

Then("verei pagina relacionada ao IPVA", () => {
   DetranIPVA.verifyPage();
});
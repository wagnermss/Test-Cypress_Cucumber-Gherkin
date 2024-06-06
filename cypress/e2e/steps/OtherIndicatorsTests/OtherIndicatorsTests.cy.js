import { Given } from "cypress-cucumber-preprocessor/steps";
import Otherindicators from "../../Pages/OtherIndicatorsPage/OtherIndicatorsPage.cy";

Given("site IBGE", () => {
   Otherindicators.enterURL("https://www.ibge.gov.br/");
});

When("clicar para visualizar outros indicadores", () => {
   Otherindicators.digitOnSpecificElement();
});

Then("visualizarei uma lista com os indicadores e seus dados", () => {
   Otherindicators.verifyExpectedResult();
});
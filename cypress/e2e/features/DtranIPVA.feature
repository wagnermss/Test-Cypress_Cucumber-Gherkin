Feature: Entrar no site do DTRAN

  Background: Entrar no site do Dtran
    Given Dtran site

  Scenario: Conseguir acessar o ambiente do IPVA e abrir em outra aba para emiçao do DAR
    When clicar no link para ver IPVA
    Then verei pagina relacionada ao IPVA
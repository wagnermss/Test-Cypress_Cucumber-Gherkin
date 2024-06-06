Feature: Entrar no site do IBGE e encontrar a lista com os indicadores

  Background: Navegar até o site https://www.ibge.gov.br/
    Given site IBGE
  Scenario: Pesquisar por tecnologia no gov.br
    When clicar para visualizar outros indicadores
    Then visualizarei uma lista com os indicadores e seus dados
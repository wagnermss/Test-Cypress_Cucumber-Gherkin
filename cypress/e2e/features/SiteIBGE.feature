Feature: Entrar no site do IBGE e clicar para ver outros sites do IGBE

  Background: Entrar no site do IBGE
    Given IBGE site

  Scenario: Conseguir acessar a lista de sites do IBGE
    When clicar no link para ver outros sites
    Then verei lista de sites
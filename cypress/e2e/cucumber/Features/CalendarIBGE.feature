Feature: Entrar no site do IBGE e acessar o calendario do site do IBGE

  Background: Entrar no site do IBGE
    Given site IBGE

  Scenario: Conseguir clicar no botão para acesso ao calendario do IBGE
    When clicar no botao calendario completo
    Then verei o calendario do ano de 2023
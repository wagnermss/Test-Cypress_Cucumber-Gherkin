Feature: Acessar dados relacionados a João Pessoa

  Background: Entrar no site do IBGE
    Given IBGE

  Scenario: Conseguir clicar no botão para acesso ao dados da cidade de João Pessoa no IBGE
    When clicar no <select> e selecionar Joao Pessoa
    Then verei os dados da cidade de Joao Pessoa
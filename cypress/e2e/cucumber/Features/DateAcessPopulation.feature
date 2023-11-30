Feature: Entrar em um site e clicar em um local específico

  Background: Navegar até o site
    Given Navegar ate o site 

  Scenario: Clicar para ver os dados da população brasileira em outra aba
    When Clicar no catalogo de populaçao
    Then Verei o resultado de dados relacionado a populaçao brasileira
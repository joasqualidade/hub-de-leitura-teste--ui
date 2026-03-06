/// <reference types="cypress" />

Cypress.Commands.add('cadastrarUsuario', () => {
  const { faker } = require('@faker-js/faker')
  
  const dados = {
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    senha: 'Teste@123456'
  }
  
  cy.visit('http://localhost:3000/cadastro')
  cy.get('input[name="nome"]').type(dados.nome)
  cy.get('input[name="email"]').type(dados.email)
  cy.get('input[name="senha"]').first().type(dados.senha)
  cy.get('input[name="confirmarSenha"]').last().type(dados.senha)
  
  // BOTÃO "ENTRAR" no cadastro
  cy.contains('button', 'Entrar').click()
  
  cy.url().should('include', '/login')
  cy.wrap(dados)
})

Cypress.Commands.add('login', (email, senha) => {
  cy.visit('http://localhost:3000/login')
  cy.get('input[name="email"]').type(email)
  cy.get('input[name="senha"]').type(senha)
  
  // BOTÃO "ENTRAR" no login
  cy.contains('button', 'Entrar').click()
  
  cy.url().should('not.include', '/login')
})
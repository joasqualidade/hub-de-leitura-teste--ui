/// <reference types="cypress" />

class LoginPage {
  
  get inputEmail() { return cy.get('input[placeholder="seu@email.com"]') }
  get inputSenha() { return cy.get('input[type="password"]') }
  get botaoEntrar() { return cy.contains('button', 'Entrar') }
  
  acessar() {
    cy.visit('http://localhost:3000/login.html')
    cy.url().should('include', '/login')
  }
  
  preencherCredenciais(email, senha) {
    this.inputEmail.should('be.visible').clear().type(email)
    this.inputSenha.should('be.visible').clear().type(senha)
  }
  
  enviarFormulario() {
    this.botaoEntrar.should('be.visible').click()
  }
  
  validarLoginSucesso() {
    // Valida que saiu da página de login
    cy.url().should('not.include', '/login')
    // Valida que apareceu a área logada
    cy.contains('Minha Conta').should('be.visible')
  }
  
}

export default new LoginPage()
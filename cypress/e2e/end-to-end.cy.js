/// <reference types="cypress" />

import CadastroPage from '../support/pages-01/CadastroPage'

describe('Teste End-to-End: Cadastro e Login', () => {
  
  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit('http://localhost:3000/register.html')
  })

  it('Deve realizar cadastro e login com sucesso', () => {
    
    // FLUXO DE CADASTRO (que já inclui login automático!)
    const dadosUsuario = CadastroPage.preencherFormulario()
    CadastroPage.enviarFormulario()
    
    // VALIDAÇÃO: Cadastro realizado e login automático feito com sucesso
    cy.url().should('include', '/dashboard')
    cy.contains('Minha Conta').should('be.visible')
    
  })

})
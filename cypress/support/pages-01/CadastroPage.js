/// <reference types="cypress" />

import { faker } from '@faker-js/faker'

class CadastroPage {
  
  get inputNome() { return cy.get('input[placeholder="Seu nome completo"]') }
  get inputEmail() { return cy.get('input[placeholder="seu@email.com"]') }
  get inputTelefone() { return cy.get('input[placeholder="(11) 99999-9999"]') }
  get inputSenha() { return cy.get('input[placeholder="Crie uma senha segura"]') }
  get inputConfirmarSenha() { return cy.get('input[placeholder="Confirme sua senha"]') }
  get checkboxTermos() { return cy.get('input[type="checkbox"]') }
  get botaoCriarConta() { return cy.contains('button', 'Criar Conta') }
  
  preencherFormulario() {
    const dados = {
      nome: faker.person.fullName(),
      email: faker.internet.email(),
      telefone: '(11) 99999-9999',
      senha: 'Teste@123456'
    }
    
    this.inputNome.type(dados.nome)
    this.inputEmail.type(dados.email)
    this.inputTelefone.type(dados.telefone)
    this.inputSenha.type(dados.senha)
    this.inputConfirmarSenha.type(dados.senha)
    this.checkboxTermos.check()
    
    return dados
  }
  
  enviarFormulario() {
    this.botaoCriarConta.should('be.visible').click()
  }
  
}

export default new CadastroPage()
describe('funcionalidade: contato', () => { 

  beforeEach(() => {
    cy.visit('index.html')
  });


  it('Deve preencher formulário de contato com sucesso', () => {
    cy.get('[name="name"]').type('Jôas Nagao')
    cy.get('[name="email"]').type('jose.nagao@outlook.com')
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').type('mensagem de teste')
    cy.get('#btn-submit').click()
    //resultado esperado: exibir mensagem de sucesso
    cy.contains('Contato enviado com sucesso!').should('exist')
  });

  it('Deve validar mensagem de erro ao enviar sem preencher o nome', () => {
    cy.get('[name="name"]').clear()
    cy.get('[name="email"]').type('jose.nagao@outlook.com')
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').type('mensagem de teste')
    cy.get('#btn-submit').click() 
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo Nome.')

  });

  it('Deve validar mensagem de erro ao enviar sem preencher o email', () => {
    cy.get('[name="name"]').type('Jôas Nagao')
    cy.get('[name="email"]').clear()
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').type('mensagem de teste')
    cy.get('#btn-submit').click() 
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo E-mail.')

  });

  it('Deve validar mensagem de erro ao enviar sem preencher o assunto', () => {
    cy.get('[name="name"]').type('Jôas Nagao')
    cy.get('[name="email"]').type('jose.nagao@outlook.com')
    //cy.get('[name="subject"]').select('sugestões')
    cy.get('[name="message"]').type('mensagem de teste')
    cy.get('#btn-submit').click() 
    cy.get('#alert-container').should('contain', 'Por favor, selecione o Assunto.')

  });

  it('Deve validar mensagem de erro ao enviar sem preencher a mensagem', () => {
    cy.get('[name="name"]').type('Jôas Nagao')
    cy.get('[name="email"]').type('jose.nagao@outlook.com')
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').clear()
    cy.get('#btn-submit').click() 
    cy.get('#alert-container').should('contain', 'Por favor, escreva sua Mensagem.')

  });
});
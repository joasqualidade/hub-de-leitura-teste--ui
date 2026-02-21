/// <reference types="cypress" />
    import user from "../fixtures/usuario.json"


describe('', () => {

    beforeEach(() => {
        cy.visit('login.html')
    });
    
    it('Deve realizar login com sucesso', () => {
        cy.get('#email').type('joasnagao123@gmail.com')
        cy.get('#password').type('Nagaozinho3671')
        cy.get('#login-btn').click()
        cy.url().should('include', 'dashboard')
    });


    it('Deve fazer login com sucesso - Usando comando costumizado', () => {
        cy.login('joasnagao123@gmail.com', 'Nagaozinho3671')

    });


    it('Deve fazer login com sucesso com conta Adimin - Usando comando customizado', () => {
        cy.login('admin@biblioteca.com', 'admin123')

    });


    it('Deve fazer login com sucesso', () => {
        cy.login(user.email, user.senha)    

    });

});
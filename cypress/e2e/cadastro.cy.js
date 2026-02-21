/// <reference types="cypress" />
import { fa, faker } from '@faker-js/faker';

describe('Funcionalidade: cadastro no Hub de leitura', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/register.html')
    });

    it('Deve realizar cadastro com sucesso, usando JS', () => {
        let email = `testes${Date.now()}@outlook.com`
        cy.get('#name').type('Jôas Nagao')
        cy.get('#email').type(email)
        cy.get('#phone').type('11999999999')
        cy.get('#password').type('123456')
        cy.get('#confirm-password').type('123456')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        //resultado esperado: exibir mensagem de sucesso
        

    })

    it('Deve realizar cadastro com sucesso, usando faker', () => {
        let email = faker.internet.email() 
        let name = faker.person.fullName() 
        cy.get('#name').type(name)
        cy.get('#email').type(email)
        cy.get('#phone').type('11999999999')
        cy.get('#password').type('123456')
        cy.get('#confirm-password').type('123456')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        //resultado esperado: exibir mensagem de sucesso
        cy.get('#user-name').should('contain', name)
        

    })

    it('Deve preencher cadastro com sucesso, usando comando customizado', () => {
        let email = faker.internet.email()
        let name = faker.person.fullName() 
        let contato = faker.phone.number('119########')
        let senha = faker.internet.password()
        cy.preencherCadastro(name, email, contato, senha, senha)

    });

    it('Deve exibir mensagem de erro ao tentar cadastrar com email já existente', () => {
        let email = 'jose.nagao@outlook.com'
        cy.get('#name').type('Jôas Nagao')
        cy.get('#email').type(email)
        cy.get('#phone').type('11999999999')
        cy.get('#password').type('123456')
        cy.get('#confirm-password').type('123456')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.get('#alert-container').should('be.visible', 'Erro ao criar conta. Tente novamente.')
        //resultado esperado: exibir mensagem de erro')
    });
});

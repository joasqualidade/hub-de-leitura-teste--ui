/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

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

    
});
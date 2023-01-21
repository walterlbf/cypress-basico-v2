// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('src/index.html')
  })
  
    it('verifica o título da aplicação', () => {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatórios e envia o formulário', () => {
        cy.get('input[name="firstName"]').type('Walter')
        cy.get('input[name="lastName"]').type('Luiz')
        cy.get('input[type="email"]').type('walter@teste.com')
        cy.get('textarea[name="open-text-area"]').type('Teste de envio de mensagem')
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
    })
})
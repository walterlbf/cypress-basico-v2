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
        cy.get('textarea[name="open-text-area"]').type('What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.') 
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
    })
    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
        cy.get('input[name="firstName"]').type('Walter')
        cy.get('input[name="lastName"]').type('Luiz')
        cy.get('input[type="email"]').type('walterteste.com')
        cy.get('textarea[name="open-text-area"]').type('What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.', {delay: 0}) 
        //sobrescrever o **delay** para escrever o texto mais rapido.
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })
    it('Verifica se o campo permance vazio caso seja digitado um valor não numérico.', () => {
      cy.get('#phone').type('abcdefghi').should('have.value', '')
    })

    it('Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
      cy.get('input[name="firstName"]').type('Walter')
        cy.get('input[name="lastName"]').type('Luiz')
        cy.get('input[type="email"]').type('walter@teste.com')
        cy.get('#phone-checkbox').click()
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })
})
describe("Already subscribed for newsletter", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('user is already subscribed to the newsletter', () => {
        cy.getByData('email-input').type('john@example.com')
        cy.getByData('submit-button').click()
        cy.getByData('server-error-message').should('exist').contains('john@example.com')
    })


})
describe("Newsletter Subscribe Form", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('allows users to subscribe to the email list', () => {
        cy.getByData('email-input').type("don@aol.com")
        cy.getByData('submit-button').click()
        cy.getByData('success-message').should('exist').contains('don@aol.com')
    })

    it('does NOT allow a invalid email address', () => {
        cy.getByData('email-input').type("don")
        cy.getByData('submit-button').click()
        cy.getByData('success-message').should('not.exist')
    })
})
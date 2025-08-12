describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  context("hero section", () => {
    it('the h1 contains the correct text', () => {

    cy.get('[data-test="hero-heading').should("exist").contains("Testing Next.js Applications with Cypress")
    })

  it.only('the features on the homepage are correct' , () => {
    cy.get('dt').eq(0).contains('4 Courses')
    cy.get('dt').eq(1).contains('25+ Lessons')
    
    })
  })

  context("Courses section", () => {
    it.only("Course: Testing Your First Next.js Section", () => {
      cy.getByData("course-0").find("a").eq(3).click()
      cy.location("pathname").should('eq', '/testing-your-first-application')
  })

  it.only("Course: Testing Foundations", () => {
      cy.getByData("course-1").find("a").eq(3).click()
      cy.location("pathname").should('eq', '/testing-foundations')
  })

  it.only("Course: Cypress Fundamentals", () => {
      cy.getByData("course-2").find("a").eq(3).click()
      cy.location("pathname").should('eq', '/cypress-fundamentals')
  })

})



})
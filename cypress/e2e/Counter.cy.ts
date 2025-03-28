describe('Counter', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should display counter with zero count value', () => {
    cy.get('[data-testid="count-value"]').should('exist').and('have.text', '0')
  })

  it('should display incremented value when increment button is clicked', () => {
    cy.get('[data-testid="increment-button"]').click()
    cy.get('[data-testid="count-value"]').should('have.text', '1')
  })

  it('should disable decrement button when count value is zero', () => {
    cy.get('[data-testid="decrement-button"]').should('be.disabled')
  })

  it('should decrement count value when decrement button is clicked and count value is greater than zero', () => {
    cy.get('[data-testid="increment-button"]').click()
    cy.get('[data-testid="increment-button"]').click()
    cy.get('[data-testid="decrement-button"]').click()
    cy.get('[data-testid="count-value"]').should('have.text', '1')
  })
})

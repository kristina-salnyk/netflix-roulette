describe('MovieDetails', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.wrap('@movieTitle').as('movieTitle')
  })

  it('should navigate to movie details on tile click and show URL with movieId', () => {
    cy.get('[data-testid="movie-tile"]').first().within(() => {
      cy.get('[data-testid="movie-title"]')
        .invoke('text')
        .as('movieTitle')
        .then(() => {
          cy.get('[data-testid="movie-title"]').click()
          cy.url().should('match', /\/\d+$/)
        })
    })
    cy.get('[data-testid="movie-details"]').should('exist')
    cy.get('@movieTitle').then((expectedTitle) => {
      cy.get('[data-testid="movie-details"] [data-testid="movie-title"]')
        .should('contain.text', expectedTitle)
    })
  })

  it('should navigate to movie details and persist view after page reload', () => {
    cy.get('[data-testid="movie-tile"]').first().within(() => {
      cy.get('[data-testid="movie-title"]')
        .invoke('text')
        .as('movieTitle')
        .then(() => {
          cy.get('[data-testid="movie-title"]').click()
          cy.url().should('match', /\/\d+$/)
        })
    })
    cy.get('[data-testid="movie-details"]').should('exist')
    cy.reload()
    cy.get('[data-testid="movie-details"]').should('exist')
    cy.get('@movieTitle').then((expectedTitle) => {
      cy.get('[data-testid="movie-details"] [data-testid="movie-title"]')
        .should('contain.text', expectedTitle)
    })
    cy.url().should('match', /\/\d+$/)
  })

  it('should preserve search params after navigating to movie details', () => {
    const searchQuery = 'Inception'
    cy.visit(`http://localhost:3000/?query=${searchQuery}`)
    cy.url().should('include', `query=${searchQuery}`)

    cy.get('[data-testid="movie-tile"]').first().within(() => {
      cy.get('[data-testid="movie-title"]')
        .invoke('text')
        .as('movieTitle')
        .then(() => {
          cy.get('[data-testid="movie-title"]').click()
          cy.url().should('match', /\/movies\/\d+/)
          cy.url().should('include', `query=${searchQuery}`)
        })
    })

    cy.get('[data-testid="movie-details"]').should('exist')
    cy.get('@movieTitle').then((expectedTitle) => {
      cy.get('[data-testid="movie-details"] [data-testid="movie-title"]')
        .should('contain.text', expectedTitle)
    })
  })
})

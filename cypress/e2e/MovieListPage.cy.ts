describe('MovieListPage ', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should add query param to URL and fetch movies', () => {
    cy.get('[data-testid="search-input"]').type('Inception')
    cy.get('[data-testid="search-button"]').click()
    cy.url().should('include', 'query=Inception')
    cy.get('[data-testid="movie-tile"]').each(($tile) => {
      cy.wrap($tile).within(() => {
        cy.get('[data-testid="movie-title"]').contains(/Inception/i).should('exist')
      })
    })
  })

  it('should add sortBy param to URL and perform sorting', () => {
    cy.get('[data-testid="sort-select"]').within(() => {
      cy.get('[data-testid="select-button"]').click()
      cy.contains(/Rating/i).click()
    })
    cy.url().should('include', 'sortBy=vote_average')
  })

  it('should add genre param to URL and filter movies', () => {
    cy.get('[data-testid="genre-select"]').within(() => {
      cy.contains(/Action/i).click()
    })
    cy.url().should('include', 'genre=action')
    cy.get('[data-testid="movie-tile"]').each(($tile) => {
      cy.wrap($tile).within(() => {
        cy.get('[data-testid="movie-genres"]').contains(/Action/i).should('exist')
      })
    })
  })

  it('should restore state from URL on page reload', () => {
    cy.visit('http://localhost:3000/?query=Inception&sortBy=vote_average&genre=action')
    cy.reload()
    cy.get('[data-testid="search-input"]').should('have.value', 'Inception')
    cy.get('[data-testid="sort-select"]').should('contain.text', 'Rating')
    cy.get('[data-testid="genre-select"]').within(() => {
      cy.contains(/Action/i).should('have.class', 'selected')
    })
    cy.get('[data-testid="movie-tile"]').each(($tile) => {
      cy.wrap($tile).within(() => {
        cy.get('[data-testid="movie-title"]').contains(/Inception/i).should('exist')
        cy.get('[data-testid="movie-genres"]').contains(/Action/i).should('exist')
      })
    })
  })
})

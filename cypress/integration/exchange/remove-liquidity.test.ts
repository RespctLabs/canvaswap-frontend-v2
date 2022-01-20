describe('Remove Liquidity', () => {
  it('redirects from address-address to address/address', () => {
    cy.visit('/remove/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82-0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56')
    cy.url().should(
      'contain',
      '/remove/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    )
  })

  it('bnb-cake remove', () => {
    cy.visit('/remove/MATIC/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'MATIC')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'RESPCT')
  })

  it('cake-bnb remove', () => {
    cy.visit('/remove/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/MATIC')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'RESPCT')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'MATIC')
  })

  it('loads the two correct tokens', () => {
    cy.visit('/remove/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'RESPCT')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'BUSD')
  })

  it('does not crash if MATIC is duplicated', () => {
    cy.visit('/remove/MATIC/MATIC')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'MATIC')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'MATIC')
  })

  it('does not crash if token is duplicated', () => {
    cy.visit('/remove/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'RESPCT')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'RESPCT')
  })

  it('token not in storage is loaded', () => {
    cy.visit('/remove/0xD74b782E05AA25c50e7330Af541d46E18f36661C/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'QUACK')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'RESPCT')
  })
})

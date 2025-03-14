/// <reference types="cypress" />


describe('my first test suite', () => {

    beforeEach('login', () => {
        cy.visit('/')
        cy.get('input[name=email]').type('danylo+cypress@trainual.com')
        cy.get('input[name=password]').type('Daniil2001!')
        cy.get('#login-submit-button').click()
        cy.get('button[aria-label=Cancel]').click()
    })
    it('create group', () => {
        cy.get('#nav-groups').click()
        cy.get('[class="ButtonStyles__BaseButtonStyles-sc-6b7103de-0 ButtonStyles__PrimaryButton-sc-6b7103de-1 fPDKlB cdGTQY"]').click()
        cy.contains('Next').click()
        cy.get('[class="react-select__input"]').type('Group for testing').type('{enter}')
        cy.get('#heap-submit-action-create-group-name-modal').click()
        cy.get('[class="TitleStyles__TitleLabel-sc-bf0d06ce-2 jnRaSr"]').should('contain', 'Group for testing')
        cy.get('[class="RouterLink__StyledRouterLink-sc-6fd727d-0 kvSYhB GroupsStickyHeader__Link-sc-973ed784-2 hZIbFO"]').click()
        cy.get('[class="styles__MenuButton-sc-259cd0c4-0 fgAxDs three-dot-menu-button"]').click()
        cy.contains('Delete').click()
        cy.contains('Confirm').click()

    })
})
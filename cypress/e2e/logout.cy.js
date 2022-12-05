
import { slowCypressDown } from 'cypress-slow-down'
// slow down each command by the default amount
// which is 1 second
slowCypressDown(1000)

it('Logout', () => {
  describe('Test for Successfull Login', () => {
    it('Visits the Landing Page', () => {
      cy.visit('http://localhost:3000/')
      // cy.contains('type')
      cy.get('a.nav-link').click()
      cy.get('input[type=email]').type('anuradha6824@gmail.com')
      cy.get('input[type=password]').type('123')
      cy.get('button.btn.btn-primary').click()
    })
  })

  // clicking on logout 

  describe('Test for Successfull Login', () => {
    it('Visits the Landing Page', () => {
      cy.get('.justify-content-end > .btn').click()
    })
  })
   
})


  
describe('empty spec', () => {
    describe('Test for a New Post', () => {
      it('Adds a new post', () => {
        cy.visit('http://localhost:3000/UserFeed')
        // cy.contains('type')
        cy.get('input#formBasicPost.form-control').type("new trail")
        cy.get('textarea#formBasicPost.form-control').type('went on a trail this weekend to lindenwood')
        cy.get('button.btn.btn-primary').click()
      })
    })
  })
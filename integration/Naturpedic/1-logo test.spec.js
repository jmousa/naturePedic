describe('check the site logo',function(){
    beforeEach(function(){
      cy.visit('/')
      cy.url().should("include",'www.naturepedic.com')
    }) 
    
    it('should bring the user back to the main page',function(){
      //cy.pause ()
      cy.get('.large').click({force:true})
      cy.url().should('include','https://www.naturepedic.com/')
      cy.get('.skip-account > .label').contains('Log In')  
    })
})
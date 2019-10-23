

describe('Forget Your Password',function(){
    beforeEach(function(){
      cy.visit('/')
      cy.url().should("include",'www.naturepedic.com')
    }) 

it('should test the "Forget your password link',function(){
    //cy.pause()  
  //click the login button
    cy.contains('Log In').click({force:true})
    cy.url().should('include','login')

    //click the "forget your pssword link"
    cy.contains('Forgot Your Password').click({force:true})
    cy.url().should('include','forgotpassword')
    cy.get('h2').should('be.visible')

    cy.get('#email_address').type('bkelly@hotmail.com')
    cy.contains('Submit').click({force:true})
    cy.get('li > span').should('be.visible')
  })
})
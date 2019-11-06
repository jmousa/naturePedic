///<reference types="cypress" />

import Chance from 'chance';
const chance = new Chance();

var firstName = chance.first();
var lastName  = chance.last();
const email = chance.email({domain: "hotmail.com"});
const pass  = chance.word({ length: 7 })



describe('create a new account',function(){
    beforeEach(function(){
      cy.visit('/')
      cy.url().should("include",'www.naturepedic.com')
    }) 
    
    it('should create a new account',function(){
      //cy.pause ()

      //click the login button
      cy.contains('Log In').click({force:true})

      //click the creat an account button
      const CreatanAccount = 'p > .button > :nth-child(1) > span'
      cy.get(CreatanAccount).click({force:true})

      // fill out the form with your info
      cy.get('#firstname').type(firstName)
      cy.get('#lastname').type(lastName)
      cy.get('#email_address').type(email)
      cy.get('#password').type(pass)
      cy.get('#confirmation').type(pass)

      //click the register button
      cy.contains('Register').click()
      cy.get('.hello > strong').should('be.visible')
      cy.contains('Thank you for registering with Naturepedic.')
    })

    it('should login with newley created account',function(){

      //click the login button
      cy.contains('Log In').click({force:true})

      //enter the user name and password
      cy.get('#email').type(email)
      cy.get('#pass').type(pass)
      cy.get('#send2').click()

      //verify that login was successfull
      cy.get('.hello > strong').should('be.visible')
      cy.contains('My Dashboard')
      
      // logout
      cy.get('.skip-account > .label').click()
      cy.contains('Log Out').click()
  })

})

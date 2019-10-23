describe('test user info',function(){

    it('should connect to site',function(){
        cy.visit('/')
        cy.url().should("include",'www.naturepedic.com')
        cy.get('.skip-account > .label').contains('Log In')  
        //cy.matchImageSnapshot()
    })

    it('should login me in and try to change password',function(){
        cy.login('dguzman@gmail.com','password') 
        //cy.matchImageSnapshot()
        cy.get('.box-content > p > a')
         .invoke('attr', 'href')
         .then(href => {
             cy.visit('https://www.naturepedic.com/customer/account/edit/changepass/1/');
             cy.contains('Edit Account Information')
        // use incorrect current password and check for invalide current passowrd
            cy.get('#current_password').type('badpass{enter)')
            cy.get('#password').type('newpassword{enter}')
            cy.get('#confirmation').type('newpassword{enter}')
            cy.contains('Save').click()
            cy.contains('Invalid current password')

        //use non matching new password and check for invalide current passowrd
            cy.get('#current_password').clear().type('password{enter)')
            cy.get('#password').clear().type('newpassword{enter}')
            cy.get('#confirmation').clear().type('non_matching{enter}')
            cy.contains('Save').click()
            cy.contains('Please make sure your passwords match.')
        })
          
    }) 
})
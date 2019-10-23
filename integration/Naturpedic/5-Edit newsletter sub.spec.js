describe('test user info',function(){

    it('should connect to site',function(){
        cy.visit('/')
        cy.url().should("include",'www.naturepedic.com')
        cy.get('.skip-account > .label').contains('Log In')  
        //cy.matchImageSnapshot()
    })

    it('should login me in and edit NEWSLETTER Subscription',function(){
        cy.login('dguzman@gmail.com','password') 
        //cy.matchImageSnapshot()
        cy.get(':nth-child(3) > .col2-set > .col-2 > .box > .box-title > a')
        .invoke('attr', 'href')
        .then(href => {
            cy.visit('https://www.naturepedic.com/newsletter/manage/');
            cy.contains('Newsletter Subscription')

            cy.get('#subscription').not('[disabled]')
            .check().should('be.checked')
            cy.contains('Save').click({force:true})
            cy.contains('The subscription has been saved.')

            cy.get(':nth-child(4) > .col2-set > .col-2 > .box > .box-title > a')
            .invoke('attr', 'href')
            .then(href => {
            cy.visit('https://www.naturepedic.com/newsletter/manage/');
            cy.contains('Newsletter Subscription')
    
            cy.get('#subscription').not('[disabled]')
            .uncheck().should('not.be.checked')
            cy.contains('Save').click({force:true})
            cy.contains('The subscription has been removed.')
            
            })

        })
          
    }) 
})

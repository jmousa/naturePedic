describe('check the search functionality',function(){
    beforeEach(function(){
      cy.visit('/')
      cy.url().should("include",'www.naturepedic.com')
  }) 
    
    it('should search for an item on the website',function(){
      cy.get('input[name=q]').type('EOS{enter}')
      cy.contains("EOS Classic")
      cy.get('h1 > span').contains('6 Search Results For "EOS"')
      //cy.matchImageSnapshot()
    })
})
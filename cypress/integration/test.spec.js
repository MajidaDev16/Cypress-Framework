
describe('Test cases example', () => {

    
   it('login',()=>{
cy.visit("/")
// cy.get('button[class="_2KpZ6l _2doB4z"]').click();
cy.get('a[class="_1_3w1N"]').contains('Login').click();
cy.wait(1000);
cy.get('button[class="_2KpZ6l _2doB4z"]').click();
cy.get('a[class="_1_3w1N"]').contains('Login').click();
// cy.get('button[class="_2KpZ6l _2doB4z"]').click();
// Login
// input[class="_2IX_2- VJZDxU"]
// Request OTP

// span[class="_2YULOR"]
// expect   Please enter valid Email ID/Mobile number  
// .should('equal', 42)
// expect(42).to.equal(42)
   })
   
});
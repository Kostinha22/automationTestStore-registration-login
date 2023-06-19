/// <reference types="cypress"/>

describe('template spec', () => {

  beforeEach(()=>{
    cy.visit('https://automationteststore.com/')
    cy.get('#customer_menu_top').click()
    cy.url().should('eq', 'https://automationteststore.com/index.php?rt=account/login')
    cy.get('[title="Continue"]').click()
    cy.url().should('eq', 'https://automationteststore.com/index.php?rt=account/create')
    cy.get('.btn.btn-orange.pull-right.lock-on-click').click()
  })
  
  
    const validData = {
      firstName: {
        valid: 'Kostya'
  },
      lastName:{
        valid:'Dubyna'
      },
      email:{
        valid:'kostester.kostester1@gmail.com'
  
      },
      address1: {
        valid:'Wooden street 2'
      },
      city: {
        valid:'Chernihiv'
      },
      zipCode:{
        valid:'01001'
  
      },
      loginName:{
        valid:'Obe1Cenobe1'
      },
      password:{
        valid:'qwerty1!'
      }
  }
  
    const invalidData = {
      firstName: {
        invalid: '123456789 Qwertyuio !@#$%^&*( 123'
    },
      lastName:{
        invalid:'123456789 Qwertyuio !@#$%^&*( 123'
  
      },
      email:{
        invalid:'kos#gmail.com'
  
      },
      address1: {
        invalid:'WD'
      },
      city: {
        invalid:'CH'
      },
      zipCode:{
        invalid:'01'
  
      },
      loginName:{
        invalid:'!!@@#'
      },
      password:{
        invalid:'1Q!'
      }
  }
  
  
   
  
  const invalidRegistration = (invalidData) => 
    
    function () {
      cy.get('#AccountFrm_firstname').type(`${invalidData.firstName.invalid}`).should('have.value',`${invalidData.firstName.invalid}`)
      cy.get('#AccountFrm_lastname').type(`${invalidData.lastName.invalid}`).should('have.value',`${invalidData.lastName.invalid}`)
      cy.get('#AccountFrm_email').type(`${invalidData.email.invalid}`).should('have.value',`${invalidData.email.invalid}`)
      cy.get('#AccountFrm_address_1').type(`${invalidData.address1.invalid}`).should('have.value',`${invalidData.address1.invalid}`)
      cy.get('#AccountFrm_city').type(`${invalidData.city.invalid}`).should('have.value',`${invalidData.city.invalid}`)
      cy.get('#AccountFrm_country_id').select('Ukraine').should('have.value', '220')
      cy.get('#AccountFrm_zone_id').select('Chernihiv').should('have.value', '3481')
      cy.get('#AccountFrm_postcode').type(`${invalidData.zipCode.invalid}`).should('have.value',`${invalidData.zipCode.invalid}`)
      cy.get('#AccountFrm_loginname').type(`${invalidData.loginName.invalid}`).should('have.value', `${invalidData.loginName.invalid}`)
      cy.get('#AccountFrm_password').type(`${invalidData.password.invalid}`).should('have.value', `${invalidData.password.invalid}`)
      cy.get('#AccountFrm_confirm').type(`${invalidData.password.invalid}`).should('have.value', `${invalidData.password.invalid}`)
      
      
      cy.get('.btn.btn-orange.pull-right.lock-on-click').click()
      cy.get('.form-group.has-error').eq(0).closest('div').should('contain', 'First Name must be between 1 and 32 characters!')
      cy.get('.form-group.has-error').eq(1).closest('div').should('contain', 'Last Name must be between 1 and 32 characters!')
      cy.get('.form-group.has-error').eq(2).closest('div').should('contain', 'Email Address does not appear to be valid!')
      cy.get('.form-group.has-error').eq(3).closest('div').should('contain', 'Address 1 must be between 3 and 128 characters!')
      cy.get('.form-group.has-error').eq(4).closest('div').should('contain', 'City must be between 3 and 128 characters!')
      cy.get('.form-group.has-error').eq(5).closest('div').should('contain', 'Zip/postal code must be between 3 and 10 characters!')
      cy.get('.form-group.has-error').eq(6).closest('div').should('contain', 'Login name must be alphanumeric only and between 5 and 64 characters!')
      cy.get('.form-group.has-error').eq(7).closest('div').should('contain', 'Password must be between 4 and 20 characters!')
   
  }
  
  const validRegistration = (validData) => 
    
  function () {
    cy.get('#AccountFrm_firstname').type(`${validData.firstName.valid}`).should('have.value',`${validData.firstName.valid}`)
    cy.get('#AccountFrm_lastname').type(`${validData.lastName.valid}`).should('have.value',`${validData.lastName.valid}`)
    cy.get('#AccountFrm_email').type(`${validData.email.valid}`).should('have.value',`${validData.email.valid}`)
    cy.get('#AccountFrm_address_1').type(`${validData.address1.valid}`).should('have.value',`${validData.address1.valid}`)
    cy.get('#AccountFrm_city').type(`${validData.city.valid}`).should('have.value',`${validData.city.valid}`)
    cy.get('#AccountFrm_country_id').select('Ukraine').should('have.value', '220')
    cy.get('#AccountFrm_zone_id').select('Chernihiv').should('have.value', '3481')
    cy.get('#AccountFrm_postcode').type(`${validData.zipCode.valid}`).should('have.value',`${validData.zipCode.valid}`)
    cy.get('#AccountFrm_loginname').type(`${validData.loginName.valid}`).should('have.value', `${validData.loginName.valid}`)
    cy.get('#AccountFrm_password').type(`${validData.password.valid}`).should('have.value', `${validData.password.valid}`)
    cy.get('#AccountFrm_confirm').type(`${validData.password.valid}`).should('have.value', `${validData.password.valid}`)
    
    cy.log('Click the contionue button')
    cy.get('#AccountFrm_agree').check()
    cy.get('.btn.btn-orange.pull-right.lock-on-click').click()
  
    cy.url().should('eq', 'https://automationteststore.com/index.php?rt=account/success')
    
  }
  
  
  it(`invalidRegistration`, invalidRegistration(invalidData))
  it(`validRegistration`, validRegistration(validData))
  
  })
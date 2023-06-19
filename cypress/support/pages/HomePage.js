class HomePage {
    visit(){
        cy.visit('/')
    }
    loginOrRegisterButton(){
       return cy.get('#customer_menu_top').click()
    }
    usernameField(){
       return cy.get('#loginFrm_loginname')
    }
    passwordField(){
       return cy.get('#loginFrm_password')
    }
    loginButton(){
       return cy.get('[title="Login"]')
    }
    verifyLoginMessage(){
       return cy.get('#customer_menu_top > :nth-child(1) > .top > .menu_text').should('contain.text', 'Welcome back')
    }


    submitLoginForm(username, password){
        cy.log('Submit login form')
       this.usernameField().type(username)
       this.passwordField().type(password)
       this.loginButton().click()
    }

}

export default new HomePage()
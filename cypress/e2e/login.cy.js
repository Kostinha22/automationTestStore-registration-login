/// <reference types="cypress"/>
import HomePage from "../support/pages/HomePage"
import user from "../fixtures/user.json"


it('Authorization', () =>{
    HomePage.visit()
    HomePage.loginOrRegisterButton()
    HomePage.submitLoginForm(user.username, user.password)

})
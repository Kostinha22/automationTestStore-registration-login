/// <reference types="cypress"/>
import HomePage from "../support/pages/HomePage"
import user from "../fixtures/user.json"
import {loginViaHttpRequest} from "../support/helper/helper"

beforeEach('Aothorization via API with form data', ()=>{
    loginViaHttpRequest(user)

} )


it('Check authorization', () => {
    HomePage.visit()
    HomePage.verifyLoginMessage()
    

})


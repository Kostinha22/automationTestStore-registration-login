/// <reference types="cypress"/>


export function loginViaHttpRequest(user){
    
    cy.request('GET', '/index.php?rt=account/login') 
    .then((response) => {
      let csrfToken = response.body.match(/name="csrftoken" value="([^"]+)"/)[1]; // дістати значення токену 
      let csrfInstance = response.body.match(/name="csrfinstance" value="([^"]+)"/)[1]; // дістати значення інстансу
  
      cy.log('csrftoken:', csrfToken); // Вивести значення токену в консоль Cypress 
      cy.log('csrftoken:', csrfInstance) // Вивести значення інстансу в консоль Cypress 
  
      cy.request({
        method: 'POST', 
        url: '/index.php?rt=account/login',
        form: true,
        body: {
          csrftoken: csrfToken,   // токен який дістали з Body передаємо в запиті на авторизацію
          csrfinstance: csrfInstance,  // інстанс який дістали з Body передаємо в запиті на авторизацію
          loginname: user.username,  // логін аккаунту
          password: user.password  // пароль 
        }
      }).then((loginResponse) => {
        // Здесь проверьте успешность авторизации или выполните другие действия после авторизации
      });
    });
      

}
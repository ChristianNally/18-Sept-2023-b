# W03D03 - HTTP Cookies & User Authentication

### To Do
- [x] HTTP and cookies
- [x] Log user in with email/username and password
- [x] Protecting endpoints against non-logged in users
- [x] Log user out (clearing cookies)
- [x] Register user with email/username and password

### HTTP Problem
* statelessness => neither party is required to remember any previous interactions
* cookies => key/value stored in the browser
* server asks the browser to hold onto them
* browser automatically sends all cookies with EVERY request
* domain-specific localhost:3000 !== localhost:3001


GET => I'd like to receive information
POST => I want to send information to the server


email=a%40a.com&password=12+34
{ email: 'a@a.com', password: '1234' }


/urls/new
/urls/:id


```js
const generateRandomString = function(num) {
  const randomNum = () => Math.floor(Math.random() * 26) + 97;
  const array = [];
  for (let i = 0; i < num; i++) {
    array.push(randomNum());
  }
  return String.fromCodePoint(...array);
}
```








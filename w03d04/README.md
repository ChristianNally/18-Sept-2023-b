# W03D04 - Security & Real World HTTP Servers

### To Do
- [x] Storing passwords
- [x] Encrypted cookies
- [x] HTTP Secure (HTTPS)
- [x] REST
- [x] More HTTP methods
- [x] Method Override [Stretch]

### Security Problem #1: Plaintext Passwords
* hash => one-way process
* plaintext password => hashing algo (bcrypt) => hash (60 character string)
* askldffhalksdhfkahsdflk;ahsdklfha;lkdfh
* same password => same hashing algo => same hash
* salt => added to the plaintext password before hashing
* plaintext password + salt => hashing algo => hash
* '1234' + 'dafhasdkhfkasd' => algo

### Security Problem #2: Plaintext Cookies
* encryption => two way process (encrypted, decrypted)
* cookie-session middleware
* plaintext cookie => middleware => encrypted string "ashdkfhaskdhfkasd"
* browser sends encrypted cookie => middleware => plaintext value
* symmetric cryptography => same key is used to encrypt and decrypt

```js
// setting a cookie
res.cookie('userId', value) => req.session.userId = value

// reading a cookie
req.cookies.userId => req.session.userId

// clearing cookies
res.clearCookie('userId') => req.session = null
```

### Security Problem #3: Plaintext Protocol
* http://localhost:3000/protected
* Man in the Middle (MiiM) => Monster in the Middle (MiiM)
* HTTPS => HTTP Secure
* asymmetric cryptography (public and private key)

### REST
* naming convention for routes
* RESTful
* REpresentational State Transfer

GET /all-the-cars
POST /create-new-car

Browse  GET   /answers
Read    GET   /answers/:id
Edit    POST  /answers/:id
Add     POST  /answers
Delete  POST  /answers/:id/delete

### More HTTP Methods
* HTML is limited to GET, POST
* PUT => replace a resource completely
* PATCH => replace a piece of resource
* DELETE => deletes a resource

* semantic aliases for POST

const a = 42;
const age = 42;

<div>
<section>
<article>
<aside>
<footer>

Browse  GET     /answers
Read    GET     /answers/:id
Edit    PATCH   /answers/:id
Add     POST    /answers
Delete  DELETE  /answers/:id

app.patch, app.delete, app.put

AJAX

req.method = 'POST'
req.method = 'PATCH'

app.patch()


[nodemon] app crashed - waiting for file changes before starting...
kill -9 pid
1,2,3,4

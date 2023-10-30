# W07D01 - JSX and Props

### To Do
- [x] What the heck is React?
- [x] Building a project w/ Create-React-App
- [x] JavaScript and XML (JSX)
- [x] Props

### What is React?
* a library for creating user interfaces (react-native, react-ink, react-dom)
* open source project maintained by Facebook
* declarative => what we want to accomplish; not how
* is component-based

1. a user submits a tweet
2. fetch the new tweets
3. call renderTweets function
4. call createTweetElement function
5. append to the DOM

1. how should the webpage look
2. give React data
3. React updates the DOM as needed



framework => has rules that we have to follow
library => collection of useful functions

framework <=============React========> library

### JSX
* JavaScript and XML
* XML => eXtensible Markup Language

```xml
<user>
  <username>Alice</username>
  <password>1234</password>
</user>
```

### Rules of JSX
* each element MUST have a closing tag (or be self-closing)
* can't use reserved words like `class` and `for`
* each component MUST be capitalized
* include JS in our JSX with `{}`


```jsx
const attributes = { 
  alt: 'happy dog', 
  className: 'dog',
  src: 'https://cdn-icons-png.flaticon.com/256/616/616554.png',
  role: ''
};

<label htmlFor="" />

return React.createElement('img', attributes);
```


CommonJS => module.exports && require
ESModules (ESM) => import && export

* Props => data from outside our function







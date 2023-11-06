# W08D01 - Data Fetching & Other Side Effects

### To Do
- [x] Pure Functions and Side Effects
- [x] `useEffect`
- [x] Cleanup
- [x] Dependencies
- [x] The `useEffect` Flow
- [x] Data Fetching

parent => child (prop passing)
parent => child => child => child (prop drilling)
context => stores the data in a separate file

photos={props.photos}
props.photo


props
props.children


### Pure Functions
* if called with the same args, returns the same result
* has no side effects

### Side Effect
* Whenever our code reaches outside of itself
  * console.log
  * data fetching
  * set timers and intervals
  * modifying the DOM
* document.ready
* something happened and then...

```js
let additive = 15;
let externalUser = null;

const addTwo = (num) => {
  const result = num + additive;
  externalUser = {};
  return result;
};
```

```js
useEffect(() => {}); // called on every render
useEffect(() => {}, [username]); // called on initial render and then only if username changes 
useEffect(() => {}, []); // only called on initial render and then never again
```


useState(null);


Uncaught TypeError: Cannot read properties of null (reading 'map')
    at PhotoList (bundle.js:455:28)
    at renderWithHooks (react-dom.development.js:16305:1)
    at updateFunctionComponent (react-dom.development.js:19588:1)
    at beginWork (react-dom.development.js:21601:1)
    at HTMLUnknownElement.callCallback (react-dom.development.js:4164:1)
    at Object.invokeGuardedCallbackDev (react-dom.development.js:4213:1)
    at invokeGuardedCallback (react-dom.development.js:4277:1)
    at beginWork$1 (react-dom.development.js:27451:1)
    at performUnitOfWork (react-dom.development.js:26557:1)
    at workLoopSync (react-dom.development.js:26466:1)

```js
const useApplicationData = function() {

  const [state, dispatch] = useReducer(reducer, {
    similarPhotos: [],
    selectedPhoto: null,
    favourites: [],
    displayModal: false,
    photoData: [],
    topicData: [],
    category_photos: [],
    topic_id: null
  });  
  
  I have this  
  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
  }, []);     using empty error I think

```




CORS (Cross-Origin Resource Sharing)
localhost:3000 => React
localhost:3001 => Photolabs BE


npm cors
app.use(cors(());


npm install
npm run build
npm start











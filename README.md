# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


* Redux 개념을 이해하기 위한 Counter예제
```js
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
//값을 증가시키는 액션생성함수
const increment = () => ({
  type : INCREMENT
});
//가변적인 값이 들어가야 하면 파라미터를 넣어서 액션을 만든다.
const increment2 = (diff) => ({
  type : INCREMENT,
  diff
});
//값을 감소시키는 액션
const decrement = (diff) => ({
  type : DECREMENT,
  diff
});

//state객체
const initialState = { number : 0,foo:'bar',baz:'qux' }
//Reducer 함수
function counter(state = initialState, action) {
  switch(action.type) {
    case INCREMENT:
      return { 
        ...state,
        number:state.number + action.diff
      };
    case DECREMENT:
      return { 
        ...state,
        number:state.number - action.diff
      };
    default:
      return state;
  }
};
const { createStore } = Redux;

//store객체생성
const store = createStore(counter);

store.subscribe(() => {
    console.log('State 객체 확인')
    const state = store.getState();
    console.log(state);
    const {number,baz, foo} = state;
    console.log(number);
    console.log(baz);
    console.log(foo);

});


//dispatch 함수를 호출해서 action을 전달하기 
store.dispatch(increment2(5));
store.dispatch(decrement(3));

```
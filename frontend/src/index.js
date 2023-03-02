// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// import { Provider } from 'react-redux'
// import store from './store'

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );



import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'

const root = createRoot(document.getElementById("root"))
root.render
  (
    <Provider store={store}>
      <App />
    </Provider>
  )






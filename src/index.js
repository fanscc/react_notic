import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import { Provider } from 'react-redux';
import store from './stores/store';
import { addToCart,updateCart,deleteFromCart }  from './actions/cart-actions';

console.log('initial state: ', store.getState());

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch(addToCart('Coffee 500gm', 1, 250));
store.dispatch(addToCart('Flour 1kg', 2, 110));
store.dispatch(addToCart('Juice 2L', 1, 250));

store.dispatch(updateCart('Flour 1kg', 5, 110));

// Delete from Cart
store.dispatch(deleteFromCart('Coffee 500gm'));

unsubscribe();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider> ,
  document.getElementById('app')
);

// Render the main component into the dom
//ReactDOM.render(<App />, document.getElementById('app'));

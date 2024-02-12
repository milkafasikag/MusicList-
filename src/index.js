import React from 'react';
import { createRoot } from 'react-dom';
import { Provider } from 'react-redux'; 
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store'; 
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();

 

// // src/main.jsx or src/index.js
// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { store } from './redux/store'; // Adjust the import if necessary
// import App from './App';

// // Get the root element
// const container = document.getElementById('root');
// const root = createRoot(container); // Create a root.

// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );
// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import './index.css'; // Import Tailwind CSS here

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);


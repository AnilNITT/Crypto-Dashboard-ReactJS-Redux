import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from "react-redux";
import store from './redux/store';
import { CryptoProvider } from "./context/CryptoContext";
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <CryptoProvider>
    <App />
    </CryptoProvider>
    </Provider>
  </React.StrictMode>
);


reportWebVitals();

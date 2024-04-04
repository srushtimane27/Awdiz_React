import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ProviderCounterContext from './Components/Context/ProviderCounterContext';
import AuthContextComponent from './Components/AuthContext/AuthContextComponent';
import ProviderCounterContextTwo from './Components/Context/ProviderCounterContext';
import { Provider } from 'react-redux';
import store from './Components/Redux/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextComponent>
      <ProviderCounterContext>
        <Provider store={store}>
        <App />
        </Provider>
      </ProviderCounterContext>
      </AuthContextComponent>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'aos/dist/aos.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
const loader = document.querySelector("#preloader");
const showLoader = () => loader.classList.remove("loader-hide");
const hideLoader = () => loader.classList.add("loader-hide");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App hideLoader={hideLoader} showLoader={showLoader} />
  </React.StrictMode>
);


reportWebVitals();

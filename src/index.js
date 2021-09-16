import React from 'react';
import ReactDOM from 'react-dom';
import WebFontLoader from 'webfontloader'

// import components and other ...
import App from './App';
import reportWebVitals from './reportWebVitals';

// import css
import './styles/index.scss'

// import webfont
WebFontLoader.load({
  google: {
    families: ["Open Sans:300,400,700"],
  },
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

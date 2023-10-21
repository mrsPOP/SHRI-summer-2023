import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Main from './components/Main';
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);
root.render(
  <React.StrictMode>
    <Header />
    <Main />
  </React.StrictMode>,
);
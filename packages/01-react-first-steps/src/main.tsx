import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { FirstApp } from './components/FirstApp';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <FirstApp
      title="Hello, I am Diego"
      subtitle="Fronted Developer"
      name="Diego"
    />
  </React.StrictMode>
);

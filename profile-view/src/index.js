import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Mainclass as ProfileView } from './components/ProfileView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProfileView ></ProfileView>
  </React.StrictMode>
);

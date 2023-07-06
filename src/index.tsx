import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DataGrid from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <DataGrid endpoint='planets' />
    <DataGrid endpoint='people' />
    <DataGrid endpoint='starships' />
  </React.StrictMode>
);
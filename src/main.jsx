import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage1 from '../src/pages/Homepage1/Homepage1'
import CreateAcc from './pages/CreateAcc';
import Login from './pages/Login';
import Sellerform from './pages/Sellerform';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Homepage1 /> */}
    <Login/>
  </React.StrictMode>,
)

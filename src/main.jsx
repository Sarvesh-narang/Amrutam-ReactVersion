import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../Amrutam/src/index.css';
import './App.css'
import { RouterProvider} from 'react-router-dom';
import Find from './components/Find/Find.jsx';
import Home from './components/Home/Home.jsx';
import Layout from './Layout.jsx'
import App from '../src/App.jsx'



// const router = createBrowserRouter ([
//     {
//         path: '/',
//         element: <Layout/>,
//         children: [
//             {
//                 path:'/',
//                 element: <Home />
//             },
//             {
//                 path: "find",
//                 element: <Find />
//             }
//         ]
//     }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>,
);

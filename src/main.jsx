import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import App from './App'
import Home from './Pages/Home'
import AboutUss from "./Pages/AboutUss";
import HowToBuy from "./Pages/HowToBuy" 
import Benefits from "./Pages/Benefits"
import FaqPage from './Pages/FaqPage'
import Contacts from "./Pages/Contacts"


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: 'about', element: <AboutUss /> },
      { path: 'how-to-buy', element: <HowToBuy /> },
       { path: 'benefits', element: <Benefits /> },
           { path: 'faq', element: <FaqPage /> },
           { path: 'contacts', element: <Contacts /> }, // ✅ Добавить этот маршрут
    ],
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

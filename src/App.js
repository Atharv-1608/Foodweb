import React, { lazy, Suspense } from 'react';
import  ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Restuarantcard from './components/Restuarantcard';
import Restuarant from './components/Restuarant';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Resmenu from './components/Resmenu';
import Offlinepage from './components/Offlinepage';

const contact = lazy(()=>import('./components/Contact'));

const App = () => {
 return ( <>
   <Header />
   <Outlet />
  </>
 )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"/",
        element:<Restuarant />
      },
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/contact",
        element: <Suspense fallback={<Error />}> <Contact /> </Suspense>
      },
      {
        path:"/restuarants/:resId",
        element:<Resmenu />
      }
    ],
    errorElement:<Offlinepage />
  }  
])
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<RouterProvider router={appRouter} />);
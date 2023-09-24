import React from "react";
import { RouterProvider } from 'react-router-dom';
import {route} from './routes/router';

const App = () => {
  return(
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App;

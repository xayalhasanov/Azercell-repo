import { createBrowserRouter, RouterProvider } from 'react-router'
import ROUTES from './routes'
const routes = createBrowserRouter(ROUTES)
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App

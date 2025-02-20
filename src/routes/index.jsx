import Root from "../components/Root";
import Contact  from "../pages/Contact";
import Home from "../pages/Home";
import About from "../pages/About";
import Catalog from "../pages/Catalog";
import NotFound from '../pages/NotFound';

const ROUTES = [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/catalog",
                element: <Catalog />
            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]       
    }
]


export default ROUTES
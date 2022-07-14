import Home from 'pages/Home';
import About from 'pages/About';
import Contact from 'pages/Contact';
import NotFound from 'pages/ErrorsPage/NotFound';

const routes = [
    {
        path: '/',
        name: 'home',
        element: <Home />
    },
    {
        path: "/about",
        name: "about",
        element: <About />
    },
    {
        path: "/contact",
        name: "contact",
        element: <Contact />
    },
    {
        path: "*",
        name: "notFound",
        element: <NotFound />
    }
]

export default routes;
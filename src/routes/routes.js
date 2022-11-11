import { createBrowserRouter } from 'react-router-dom';
import Main from '../components/Main/Main';
// import Home from '../pages/Home/Home/Home';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <div>Home</div>,
            },
            {
                path: '/home',
                element: <div>Home</div>,
            }
        ]
    }
]);

export default routes;
import { createBrowserRouter } from 'react-router-dom';
import Main from '../components/Main/Main';
import AddReview from '../pages/AddReview/AddReview';
import AddService from '../pages/AddService/AddService';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import MyReviews from '../pages/MyReviews/MyReviews';
import Register from '../pages/Register/Register';
import ServiceDetails from '../pages/ServiceDetails/ServiceDetails';
import Services from '../pages/Services/Services';
import PrivateRoute from './PrivateRoute';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/services',
                element: <Services />,
            },
            {
                path: '/services/:id',
                element: <ServiceDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/service/addreview/:id',
                element: <PrivateRoute>
                    <AddReview />
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/service/add',
                element: <PrivateRoute>
                    <AddService />
                </PrivateRoute>
            },
            {
                path: '/myreviews',
                element: <PrivateRoute>
                    <MyReviews />
                </PrivateRoute>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage />
    }
]);

export default routes;
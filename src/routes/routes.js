import { createBrowserRouter } from 'react-router-dom';
import Main from '../components/Main/Main';
import AddReview from '../pages/AddReview/AddReview';
import AddService from '../pages/AddService/AddService';
import Blog from '../pages/Blog/Blog';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import MyReviews from '../pages/MyReviews/MyReviews';
import Register from '../pages/Register/Register';
import ServiceDetails from '../pages/ServiceDetails/ServiceDetails';
import Services from '../pages/Services/Services';
import UpdateReview from '../pages/UpdateReview/UpdateReview';
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
                path: '/blog',
                element: <Blog />,
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
                loader: ({ params }) => fetch(`https://ph-assignment-11-service-review-server-tasnimulshadi.vercel.app/services/${params.id}`)
            },
            {
                path: '/service/addreview/:id',
                element: <PrivateRoute>
                    <AddReview />
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://ph-assignment-11-service-review-server-tasnimulshadi.vercel.app/services/${params.id}`)
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
            },
            {
                path: '/myreviews/update/:id',
                element: <PrivateRoute>
                    <UpdateReview />
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://ph-assignment-11-service-review-server-tasnimulshadi.vercel.app/review/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage />
    }
]);

export default routes;
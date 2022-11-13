import React, { useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';
import useDocumentTitle from '../../utilities/useDocumentTitle';

const Register = () => {
    useDocumentTitle("Register");
    const { createUser, googleSingIn, updateUser, signOutUser } = useContext(AuthContext);

    //navigate
    const navigate = useNavigate();
    const location = useLocation();
    const previousLocation = location.state?.from?.pathname || '/';

    //register button
    // after user is created 
    // then update user picture and name
    // then logout user
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const img = form.img.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, img, email, password);

        //firebase method
        //create user start
        createUser(email, password)
            .then(result => {
                // console.log(result.user);
                form.reset();
                toast.success('User Created Successfully');

                //update profile start
                updateUser(name, img)
                    .then(() => {

                        // logout start
                        signOutUser()
                            .then(() => {
                                // navigate
                                navigate('/login', { state: { from: { pathname: previousLocation } } }, { replace: true });

                            })
                            .catch((error) => {
                                console.error('firebase errror:', error.message);
                                toast.error(error.message);
                            });
                        // logout end

                    })
                    .catch((error) => {
                        console.error('firebase errror:', error.message);
                        toast.error(error.message);
                    });
                //update profile start end

            })
            .catch(err => {
                console.error('firebase errror:', err.message);
                toast.error(err.message);
            });
        //create user end

    }


    //google button
    const handleGoogleSignIn = () => {
        // firebase method
        // google signin 
        googleSingIn()
            .then((result) => {
                toast.success('User Logged In Successfully');
                //navigate
                navigate(previousLocation, { replace: true });

            })
            .catch((err) => {
                console.error('firebase errror:', err.message);
                toast.error(err.message.slice(9));
            });
    }


    return (
        <div className="hero py-10">
            <div className="hero-content flex-col lg:flex-row w-full">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                    <h1 className="text-4xl font-semibold text-center">Register</h1>

                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Name</span>
                            </label>
                            <input
                                name='name'
                                type="text"
                                placeholder="Entetr Your Name"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Profile Image</span>
                            </label>
                            <input
                                name='img'
                                type="text"
                                placeholder="Entetr Profile Image Url"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input
                                name='email'
                                type="email"
                                placeholder="Entetr Your Email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input
                                name='password'
                                type="password"
                                placeholder="Entetr Your Password"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-amber-500 border-0 capitalize">Register</button>
                        </div>
                    </form>

                    {/* social sinup buttons */}
                    <div className='text-center'>
                        <p>Or Sign Up with</p>
                        <div className='flex justify-center gap-4 mt-3'>
                            <button
                                onClick={handleGoogleSignIn}
                                className='w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center text-xl'
                            >
                                <FcGoogle />
                            </button>
                        </div>
                        <p className='text-sm mt-5'>
                            Already have an account?
                            <Link
                                to='/login'
                                className='text-blue-500 font-semibold hover:underline ml-1'
                            >
                                Login
                            </Link>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;
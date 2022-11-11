import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    const { signInUser, googleSingIn } = useContext(AuthContext);
    //navigate
    const navigate = useNavigate();
    const location = useLocation();
    const previousLocation = location.state?.from?.pathname || '/';
    console.log(previousLocation);

    //login
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        //firebase
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                form.reset();
                toast.success('User Logged In Successfully');

                //navigate
                navigate(previousLocation, { replace: true });

            }).catch((err) => {
                console.error('firebase errror:', err.message);
                toast.error(err.message.slice(9));
            });
    }

    // google signin firebase
    const handleGoogleSignIn = () => {
        googleSingIn()
            .then((result) => {
                const user = result.user;
                console.log(user);
                toast.success('User Logged In Successfully');

                //navigate
                navigate(previousLocation, { replace: true });

            }).catch((err) => {
                console.error('firebase errror:', err.message);
                toast.error(err.message.slice(9));
            });
    }



    return (
        <div className="hero py-10">
            <div className="hero-content flex-col lg:flex-row w-full">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                    <h1 className="text-4xl font-semibold text-center">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="your password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-amber-500 border-0 capitalize">Sign In</button>
                        </div>
                    </form>
                    <div className='text-center'>
                        <p>Or Sign In with</p>
                        <div className='flex justify-center gap-4 mt-3'>
                            <button onClick={handleGoogleSignIn} className='w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center text-xl'>
                                <FcGoogle />
                            </button>
                        </div>
                        <p className='text-sm mt-5'>Have an account? <Link to='/register' state={{ from: { pathname: previousLocation } }} replace className='text-blue-500 font-semibold hover:underline'>Register</Link></p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;
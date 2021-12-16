// header (Black) - with logo, socials, login/sign up
// nav - Home, Products, Contact Us
// body - Login AND Sign Up form(s)
// footer - Business Info (address, phone number), GoogleMaps?, Copyright, socials, email input for user data 

// data needed from backend: User 
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN, ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
    const [loginFormState, setLoginFormState] = useState({ email: '', password: '' });
    const [signupFormState, setSignupFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);
    const [addUser] = useMutation(ADD_USER);

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables: { email: loginFormState.email, password: loginFormState.password },
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token);
        } catch (e) {
            console.log(e);
        }
    };

    const handleSignupSubmit = async (event) => {
        event.preventDefault();

        try {
            const mutationResponse = await addUser({
                variables: {
                    email: signupFormState.email,
                    password: signupFormState.password,
                    firstName: signupFormState.firstName,
                    lastName: signupFormState.lastName,
                },
            });
            const token = mutationResponse.data.addUser.token;
            Auth.login(token);

        } catch (err) {
            console.log(err)
        }
    };

    const handleLoginChange = (event) => {
        const { name, value } = event.target;
        setLoginFormState({
            ...loginFormState,
            [name]: value,
        });
    };

    const handleSignupChange = (event) => {
        const { name, value } = event.target;
        setSignupFormState({
            ...signupFormState,
            [name]: value,
        });
    };

    return (
        <div className="enrollcontainer">
            <form onSubmit={handleLoginSubmit} className='loginContainer'>
                <h2>Login</h2>
                <label htmlFor="login-email">Email address:</label>
                <input
                    placeholder="youremail@test.com"
                    name="email"
                    type="email"
                    id="login-email"
                    onChange={handleLoginChange}
                />
                <label htmlFor="login-pwd">Password:</label>
                <input
                    placeholder="******"
                    name="password"
                    type="password"
                    id="login-pwd"
                    onChange={handleLoginChange}
                />
                {error ? (
                    <p className="error-text">The provided credentials are incorrect</p>
                ) : null}
                <button className='submitBtn' type="submit">Submit</button>
            </form>

            <form onSubmit={handleSignupSubmit} className='loginContainer' >
                <h2>Signup</h2>
                <label htmlFor="firstName">First Name:</label>
                <input
                    placeholder="First Name"
                    name="firstName"
                    type="firstName"
                    id="firstName"
                    onChange={handleSignupChange}
                />
                <label htmlFor="lastName">Last Name:</label>
                <input
                    placeholder="Last Name"
                    name="lastName"
                    type="lastName"
                    id="lastName"
                    onChange={handleSignupChange}
                />
                <label htmlFor="signup-email">Email:</label>
                <input
                    placeholder="youremail@email.com"
                    name="email"
                    type="email"
                    id="signup-email"
                    onChange={handleSignupChange}
                />
                <label htmlFor="login-pwd">Password:</label>
                <input
                    placeholder="*********"
                    name="password"
                    type="password"
                    id="signup-pwd"
                    onChange={handleSignupChange}
                />
                <button className='submitBtn' type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Login;

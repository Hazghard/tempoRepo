import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import AuthenticationThunks from '@/Store/Authentication/thunks'

import SignInAPI from '@/_Services/FetchSignIn.service.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

import argentBankLogo from '@/assets/Images/argentBankLogo.png';
import UserSelectors from '@/Store/User/selectors.js'


const Login = () => {
	const navigate = useNavigate()
	const userProfile = useSelector(UserSelectors.profile)
	const dispatch = useDispatch()

	async function handleSubmitForm(e) {
		e.preventDefault();
		let formData = {
			email:{
				value: e.target[0].value,
				isOk: (/[A-Za-z0-9_\.+]+@[A-Za-z0-9]+\.[a-z]{2,3}/.test(e.target[0].value) ? true : false),
			},
			password: e.target[1].value,
			rememberMe: e.target[2].checked
		};

		if(formData.email.isOk) {
			await dispatch(AuthenticationThunks.login({email: formData.email.value, password: formData.password}))
		}
	}

	useEffect(() => {
		if (!userProfile) {
			return
		}

		navigate('/profile')
	}, [ userProfile ]);

	return (
		<>
			<nav className="main-nav">
				<NavLink className="main-nav-logo" to='/home'>
					<img
						className="main-nav-logo-image"
						src={argentBankLogo}
						alt="Argent Bank Logo"
					/>
					<h1 className="sr-only">Argent Bank</h1>
				</NavLink>
				<div>
					<NavLink className="main-nav-item" to='/login'>
					<FontAwesomeIcon icon={faCircleUser} />
						Sign In
					</NavLink>
				</div>
			</nav>
			<main className="main bg-dark">
				<section className="sign-in-content">
					<FontAwesomeIcon icon={faCircleUser} className='sign-in-icon' />
					<h1>Sign In</h1>
					<form onSubmit={handleSubmitForm}>
						<div className="input-wrapper">
							<label htmlFor="email">Email</label>
							<input type="email" id="email" />
						</div>
						<div className="input-wrapper">
							<label htmlFor="password">Password</label>
							<input type="password" id="password" />
						</div>
						<div className="input-remember">
							<input type="checkbox" id="remember-me" />
							<label htmlFor="remember-me">Remember me</label>
						</div>
						<button className="sign-in-button" type='submit'>Sign In</button>
					</form>
				</section>
			</main>
			<footer className="footer">
				<p className="footer-text">Copyright 2020 Argent Bank</p>
			</footer>
		</>  
	);
};

export default Login;
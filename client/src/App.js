import React from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Login from './components/Login';
import UserMenu from './components/UserMenu';
import Register from './components/Register';
import UniversePage from './components/UniversePage';
import './scss/App.scss';
import useUserContext from './contexts/useUserContext';
import UserContext from './contexts/UserContext';

function App() {

	const [ user, setUser ] = useUserContext('user');

	return (
		<div className="App">
			<UserContext.Provider value={[user,setUser]}>
				<div className="App-header">
					{(!user) ? 
						<div>
							<div className="logRegNav">
								<NavLink to='login'><div>Login</div></NavLink>
								<NavLink to='register'><div>Register</div></NavLink>
							</div>
							<Switch>
								<Route path='/login' component={() => <Login />}/>
								<Route path='/register' component={() => <Register />}/>
								<Route path='*'>
									<Redirect to='/login' />
								</Route>
							</Switch>
						</div>
						:
						<Switch>
							<Route path='/universe' component={() => <UniversePage />} />
							<Route path='/' component={() => <UserMenu />} />
							<Route path='*'>
								<Redirect to='/' />
								<UserMenu/>
							</Route>
						</Switch>
					}
				</div>
			</UserContext.Provider>
		</div>
	);
}

export default App;

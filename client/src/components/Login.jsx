import { useState } from 'react';
import login from '../libs/login.js';

export default function Login(props){
    const [ password, setPassword ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ stay, setStay ] = useState(false);
    const [ message, setMessage ] = useState("");
    const setUser = props.setUser;
    const setToken = props.setToken;

    function submitHandler(e) {
        e.preventDefault();
        login(email, password, stay, setUser, setToken, setMessage);
    }

    return <div>
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" id="email" placeholder="type your email..." required maxLength={60}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input 
                    type="password" id="password" required minLength={6} onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="stay">Stay logged-in:</label>
                <input type="checkbox" id="stay" onChange={e => setStay(e.target.checked)}/>
            </div>
            <button type="submit">
                Login
            </button>
            <div>{`${message}`}</div>
        </form>
    </div>
}
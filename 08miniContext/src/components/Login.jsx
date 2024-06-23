import React from 'react';
import { useState, useContext } from 'react';
// using useContext, we can retrieve data from the props of {user and setUser} in the userContextProvider
import UserContext from '../context/UserContext';

function Login() {
    const [username, setUsername] = useState(" ")
    const [password, setPassword] =useState(" ")

    const { setUser } = useContext(UserContext); // Comma added after setUser
    // we have to provide whose context are we are providing in useContext

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password});
    }
    // to write data into user
    return (
        <div>
            <h2>Login</h2>
            <input 
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            />
            {" "}
            <input type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password" 
            />
            <button 
            onClick={handleSubmit}
            >Submit</button>
        </div>
    )
}

export default Login
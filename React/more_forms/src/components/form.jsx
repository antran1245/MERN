import React, { useState } from "react";
import Info from "./info";

export default function Form() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState({
        password: '',
        confirm: '',
    });

    return (
        <div style={formStyle}>
            <form>
                <div style={formGroup}>
                    <label htmlFor="fname">First Name: </label>
                    <input style={inputStyle} type="text" onChange={(e) => setFname(e.target.value)}/>
                </div>
                <div style={formGroup}>
                    <label htmlFor="lname">Last Name: </label>
                    <input style={inputStyle} type="text" onChange={(e) => setLname(e.target.value)}/>
                </div>
                <div style={formGroup}>
                    <label htmlFor="email">Email: </label>
                    <input style={inputStyle} type="text" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div style={formGroup}>
                    <label htmlFor="password">Password: </label>
                    <input style={inputStyle} type="text" onChange={(e) => setPassword({password: e.target.value, confirm: password.confirm})}/>
                </div>
                <div style={formGroup}>
                    <label htmlFor="confirm">Confirm Password: </label>
                    <input style={inputStyle} type="text" onChange={(e) => setPassword({confirm: e.target.value, password: password.password})}/>
                </div>
            </form>
            <Info fname={fname} lname={lname} email={email} password={password} />
        </div>
    )
}

const formStyle = {
    width: '40%',
    margin: '10px auto',
    textAlign: 'start',
}

const formGroup = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0',
    backgroundColor: 'beige',
    padding: '15px',
    borderRadius: '10px'
}

const inputStyle = {
    width: '50%',
}
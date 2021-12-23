import React from 'react';
import '../App.css';
import logo from "../logo.svg";

export default function LevoLogo() {
    return (
        <div style={{background: '#091e42', width: '120px', display: 'flex', justifyContent: 'center', padding: '10px'}}>
            <img src={logo} alt="logo" className="main-container-logo"/>
        </div>
    );
}

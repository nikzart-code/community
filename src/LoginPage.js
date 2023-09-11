import React, { useEffect } from 'react';
import './LoginPage.css';

function LoginPage() {
    useEffect(() => {
        window.otpless = (otplessUser) => {
            alert(JSON.stringify(otplessUser));
        };
    }, []);

    return (
        <div className="login-container">
            <h1>Welcome to Edgaadi Communtity</h1>
            <script type="text/javascript" src="https://otpless.com/auth.js"></script>
        </div>
    );
}

export default LoginPage;

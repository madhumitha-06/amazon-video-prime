import myimages from './assets/images/prime.png'
import './Style/Signin.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Signin() {
    const route = useNavigate();
    const [identifier, setIdentifier] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    interface User {
        phone: string;
        email: string;
        password: string;
    }

    const mynav = (): void => {
        setError('');

        if (!identifier.trim() || !password.trim()) {
            setError('Please fill in both fields.');
            return;
        }

        const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');

        const user: User | undefined = users.find((u: User) =>
            (u.phone === identifier || u.email === identifier) &&
            u.password === password
        );

        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            route('/');
        } else {
            setError('Invalid mobile/email or password. Please try again.');
        }
    };

    return (
        <>
            <img className='img1' src={myimages} alt="" />
            <div className='main'>
                <p className='signin'>Sign in</p>
                <p className='enter'>Enter mobile number or email</p>
                <input 
                    className='input text'
                    type="text"
                    value={identifier}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIdentifier(e.target.value)}
                />
                <p className='enter1'>Enter the password</p>
                <input
                    className='input text'
                    type="password"
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                />
                {error && (
                    <p style={{ color: 'red', fontSize: '5px',marginBottom:"-8px" }}>
                        {error}
                    </p>
                )}
                <div>
                    <button className='btn2' onClick={mynav}>Continue</button>
                </div>
                <p className='statement'>
                    By continuing, you agree to the Amazon
                    <span className='span'> condition of use and Privacy Notice</span>
                </p>
                <div className="dropdown">
                    <span
                        className="need dropdown-toggle dropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Need help?
                    </span>
                    <ul className="dropdown-menu">
                        <li>
                            <span className="forgot-text">Forgot your password</span>
                        </li>
                    </ul>
                </div>
            </div>
            <p className='new'>New to Amazon ?</p>
            <div className='btn3'>
                <button className='button3' onClick={() => route("/createacc")}>
                    Create Your Amazon Account
                </button>
            </div>
            <hr />
            <div className='down'>
                <p>Terms and Privacy Notice</p>
                <p>Send as Feedback</p>
                <p>Help</p>
            </div>
            <p className='para'>©️ 1996-2026, Amazon.com, Inc. or its affiliates</p>
        </>
    );
}

export default Signin;
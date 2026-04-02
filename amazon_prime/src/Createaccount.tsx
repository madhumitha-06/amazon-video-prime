import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import myimages from './assets/images/prime.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Style/Createacc.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

interface User {
    name: string;
    phone: string;
    password: string;
}

function Createacc() {
    const route = useNavigate();
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');

    const handleCreate = (): void => {
        setError('');
        setSuccess('');

        // Validation
        if (!name.trim() || !phone.trim() || !password.trim()) {
            setError('Please fill in all fields.');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters.');
            return;
        }
        if (phone.length < 10) {
            setError('Please enter a valid mobile number.');
            return;
        }

        // Check if user already exists
        const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
        const exists: User | undefined = users.find((u: User) => u.phone === phone);
        if (exists) {
            setError('Account already exists with this number. Please sign in.');
            return;
        }

        // Save new user
        const newUser: User = { name, phone, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(newUser));

        setSuccess('Account created successfully! Redirecting...');
        setTimeout(() => route('/'), 1500);
    };

    return (
        <>
            <img
                style={{ height: '50px', width: '70px', marginLeft: '330px' }}
                src={myimages}
                alt=""
            />
            <div className='createacc'>
                <h6 className='create'>Create Account</h6>

                <p className='detail'>Your Name</p>
                <input
                    className='detailinput'
                    type="text"
                    placeholder='First and Last Name'
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                />

                <p className='detail'>Mobile Number</p>
                <input
                    className='detailinput'
                    type="number"
                    placeholder='Mobile Number'
                    value={phone}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
                />

                <p className='detail'>Password</p>
                <input
                    className='detailinput'
                    type="password"
                    placeholder='At least 6 Characters'
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                />

                <p className='password'>
                    <span style={{ marginRight: '5px', color: 'rgba(62, 137, 242, 1)' }}>
                        <FontAwesomeIcon icon={faCircleInfo} />
                    </span>
                    Passwords must be at least 6 characters
                </p>

                {/* Error and Success messages */}
                {error && (
                    <p style={{ color: 'red', fontSize: '5px', marginBottom: '3px' }}>
                        {error}
                    </p>
                )}
                {success && (
                    <p style={{ color: 'green', fontSize: '5px', marginBottom: '3px' }}>
                        {success}
                    </p>
                )}

                <p className='verify'>
                    To verify your number, we will send you a text message with a temporary code.
                    Message and data rates may apply.
                </p>

                <button className='verifybtn' onClick={handleCreate}>
                    Verify Mobile Number
                </button>

                <p style={{ fontSize: '8px', marginBottom: '5px', marginTop: '3px' }}>
                    Already Have an Account?{' '}
                    <span
                        style={{ color: 'rgba(62, 137, 242, 1)', cursor: 'pointer' }}
                        onClick={() => route("/Signin")}>
                        Sign in
                    </span>
                </p>

                <p className='statement'>
                    By continuing, you agree to the Amazon
                    <span className='span'> condition of use and Privacy Notice</span>
                </p>
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

export default Createacc;
import { useNavigate } from 'react-router-dom';

function SignOut() {
    const route = useNavigate();

    const handleSignOut = (): void => {
        localStorage.removeItem('currentUser');
        route('/Signin');
    };

    return (
        <button onClick={handleSignOut}>Sign Out</button>
    );
}

export default SignOut;
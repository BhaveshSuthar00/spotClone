import React from 'react';
const  AUTH_URL = "https://accounts.spotify.com/authorize?client_id=37816fbbd4124862afb5dd66fe618ab9&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
function Login() {
    return (
        <div className="App">
            <header className="App-header">
                <a className="btn-spotify" href={AUTH_URL} >
                    Login with Spotify 
                </a>
            </header>
        </div>
    );
}

export default Login;
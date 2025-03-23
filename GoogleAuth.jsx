import React, { useState } from "react";
import {   auth, provider, signInWithPopup, signOut } from "../Firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";


// const auth = getAuth(app);

export default function GoogleAuth() {
    const [user, setUser] = useState(null)
    const [isLogin, setIsLogin] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    function signUp() {
        setError("")
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                setIsLogin(true)
            })
            .catch((error) => {
                if (error.code === "auth/email-already-in-use") {
                    setError("This email is already registered. Please log in.")
                    setIsLogin(true)
                } else {
                    setError(error.message)
                }
            });
    };

    function googleLogin() {
        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user)
            })
            .catch((error) => {
                setError(error.message)
            });
    };

    function logout ()   {
        signOut(auth)
            .then(() => {
            setUser(null)
            setIsLogin(false)
            setName("")
            setEmail("")
            setPassword("")
        });
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow p-4">
                        <h2 className="text-center mb-4">Google Authentication</h2>

                        {!user ? (<>
                            {!isLogin ? (
                                <>
                                    <h3 className="text-center">Signup</h3>
                                    {error && <div className="alert alert-danger">{error}
                                    </div>
                                    }

                                    <div className="mb-3">
                                          <input type="text" className="form-control" placeholder="Enter your name"
                                            value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                           <input type="email" className="form-control" placeholder="Enter your email"
                                            value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" className="form-control" placeholder="Enter your password"
                                            value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>

                                    <button className="btn btn-primary w-100" onClick={signUp}>Signup</button>
                                    <p className="text-center mt-3">
                                        Already have an account?{" "}
                                        
                                        <button className="btn btn-link p-0" onClick={() => setIsLogin(true)}>Login</button>
                                    </p>
                                    
                                </>
                            ) : (<>
                                <h3 className="text-center">Login</h3>
                                {error && <div className="alert alert-danger">{error}</div>}

                                <div className="mb-3">
                                    <input type="email" className="form-control" placeholder="Enter your email"
                                        value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control" placeholder="Enter your password"
                                        value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>

                                <button className="btn btn-danger w-100 mt-2" onClick={googleLogin}>Login with Google</button>
                                <p className="text-center mt-3">
                                    Don't have an account?{" "}
                                    <button className="btn btn-link p-0" onClick={() => setIsLogin(false)}>Signup</button>
                                </p>
                            </>
                            )}
                        </>
                        ) : (
                            <>
                                <h4 className="text-center">Welcome, {"User"}!</h4>
                                <button className="btn btn-warning w-100 mt-3" onClick={logout}>Logout</button>

                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

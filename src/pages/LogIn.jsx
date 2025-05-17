import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../services/config";
import { useState } from "react";
import "../styles/LogIn.css"

export default function LogIn(){
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[error,setError]=useState("");
    const navigate=useNavigate();

    const handleLogin= async(e)=>{
        e.preventDefault();
        try{
            const userCredential =await signInWithEmailAndPassword(auth,email,password);
            const user=userCredential.user;
            if(!user.emailVerified){
                toast.info("Please verify your email before logging in")
            }
            else{
                navigate("/home")
            }
        }
        catch(err){
            setError(err.message);
        }
    }

    return(
        <div className="login-page">
            <div className="login-container">
                <h2>Welcome Back</h2>
                <form onSubmit={handleLogin}>
                    <h3>Email address</h3>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        required
                    />
                    <h3>Password</h3>
                    <input
                        type="password"
                        placeholder="Enter your password" 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Sign In</button>
                </form>
                {error && <p style={{color:"#fc8181", fontSize: "14px", textAlign: "center"}}>{error}</p>}
                <p>Don't have an account? <a href="/signup">Register Here</a></p>
            </div>
        </div>
    );
};
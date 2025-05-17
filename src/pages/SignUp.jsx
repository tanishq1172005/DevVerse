import { createUserWithEmailAndPassword,sendEmailVerification } from "firebase/auth";
import { auth } from "../services/config";
import { useState } from "react";
import "../styles/LogIn.css"
import { toast } from "react-toastify";
import LogIn from "./LogIn";

export default function SignUp(){
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("")
    const[error,setError]=useState("")

    const handleSignUp=async(e)=>{
        e.preventDefault();
        setError("");
        try{
            const userCredential=await createUserWithEmailAndPassword(auth,email,password);
            const user=userCredential.user;

            await sendEmailVerification(user);

            toast.success("Verification email sent please check your inbox and then log in using the same email")
        }
        catch(err){
            setError(err.message)
        }
    }

    return(
        <div className="login-page">
            <div className="login-container">
                <h2>Create an Account</h2>
                <form onSubmit={handleSignUp}>
                    <h3>Enter email</h3>
                    <input type="email"
                    placeholder="Enter Email"
                    value={email}
                    required
                    onChange={(e)=>setEmail(e.target.value)}/>
                    <h3>Enter password</h3>
                    <input type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required/>
                    <button type="submit">Sign Up</button>
                </form>
                {error && <p style={{color:"#FFFFFF", fontSize: "14px", textAlign: "center"}}>{error}</p>}
                <p>Already have an account?<a href="/login">Log In here</a></p>
            </div>
        </div>
    );
}
import Navbar from '../components/Navbar'
import '../styles/About.css';

export default function About(){
    return(
    <>
    <Navbar/>
    <div className='about-container'><h2>About us</h2>
    <h3>✨ About Devverse</h3>
    <p>Devverse is a modern, all-in-one platform designed to empower developers, learners, and tech enthusiasts by providing seamless access to tools, guides, and AI-driven assistance — all in one intuitive space.</p>
    <h3>🚀 Our Mission</h3>
    <p>To simplify the developer journey by offering actionable learning paths, intuitive tools, and AI support — enabling anyone to build, learn, and grow without limits.</p>
    <h3>🧠 What We Offer</h3>
    <p>Interactive AI Assistant to help you understand documentation, code snippets, and tools faster.
        Simplified Tech Guides powered by AI to break down complex concepts into easy steps.

Project Ideas & Templates to spark creativity and help you start building immediately.

Secure User Authentication with Firebase integration to keep your data safe.

Mobile-friendly Experience so you can access Devverse anywhere, anytime.
    </p>
    <h3>🔮 Why Devverse?</h3>
    <p>We believe learning to build shouldn't be a struggle. Whether you're a beginner or a pro, Devverse is your companion to unlock productivity, learn faster, and stay inspired.</p>
    <h3>🧩 Built With</h3>
    <p>React, CSS, Firebase

<br/>Gemini AI API for intelligent documentation help

Fully responsive and mobile-ready.</p></div>
    </>);
}
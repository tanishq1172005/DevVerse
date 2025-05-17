import Navbar from "../components/Navbar";
import heroImage from '../assets/HeroImage.png';
import "../styles/Landing.css";

export default function Landing(){
    return(
        <div className="landing-container">
            <div className="full-background">
                <img src={heroImage} alt="hero" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
            </div>
            <Navbar/>
        </div>
    );
}
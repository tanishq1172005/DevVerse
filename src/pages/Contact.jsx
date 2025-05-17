import Navbar from "../components/Navbar";
import "../styles/Contact.css"

export default function Contact(){
    return(<>
    <Navbar/>
    <div className="contact-container">
        <h2>Get in touch</h2>
        <p>Have a question, feedback or partnership Idea? We'd love to hear from you</p>
        <form className="contact-form">
            <label>
                Name</label>
                <input type="text" placeholder="Your name" required/>
            <label>
                Email</label>
                <input type="email" placeholder="Enter email" required/>
            <label>
                Message</label>
                <textarea type="text" placeholder="Your message" rows="5" required></textarea>
            <button type="submit">Send message</button>
        </form>
    </div>
    </>);
}
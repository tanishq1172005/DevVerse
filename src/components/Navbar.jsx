export default function Navbar(props){
    const navStyle={
        backgroundColor:'#070b10',
        padding:'10px'
    }
    const divStyle={
        backgroundColor:'#070b10',
        overflow:'hidden'
    }
    const linkStyle={
        float:'left',
        display:'block',
        color:'#f2f2f2',
        textAlign:'center',
        padding:'14px 20px',
        textDecoration:'none'
    }
    
    const buttonStyle={
        fontSize:'12px',
        textDecoration:'none',
        float:'right',
        padding:'14px 20px',
        textAlign:'center',
        border:'1px solid #0095ff',
        borderRadius:'15px',
        color:'white',
        margin:'5px'
    }
    return(
    <nav style={navStyle}>
        <div style={divStyle}>
            <a href="/home" style={linkStyle}>Home</a>
            <a href="/about" style={linkStyle}>About</a>
            <a href="/contact" style={linkStyle}>Contact</a>
            <a href="/login" style={buttonStyle}>Log In</a>
            <a href="/signup" style={buttonStyle}>Get Started</a>
        </div>
    </nav>
    );
}
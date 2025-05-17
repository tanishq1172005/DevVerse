import { useEffect, useState } from 'react';
import '../styles/Home.css'

export default function Home(){
    const userName="Tanishq";
    const[date,setDate]=useState("")
    const[note,setNote]=useState("")
    const[journals,setJournal]=useState([])

    useEffect(()=>{
        const initialJournals=[{
            id:1,
            date:"May 15 2025",
            note:"Learned about firebase auth & wrote some backend logic. Faced an issue with async but figured it out"
        },{
            id:2,
            date:"May 12 2025",
            note:"Started designing the contact page. Implemented dark theme using CSS customizations"
        }];
        setJournal(initialJournals);
    },[])

    function addNote(){
        if(!date || !note)return;
        const newJournal={id:Date.now(),date,note};
        setJournal([newJournal,...journals])
        setDate("");
        setNote("")
    }

    function deleteNote(id){
        const updatedJournals=journals.filter(journal => journal.id !== id);
        setJournal(updatedJournals)
    }

    
    return(<>
    <nav style={{backgroundColor:'#070b10',
        padding:'10px'}}>
        <div style={{backgroundColor:'#070b10',
        overflow:'hidden'}}>
            <a href="/login" style={{float:'left',
        display:'block',
        color:'#f2f2f2',
        textAlign:'center',
        padding:'14px 20px',
        textDecoration:'none'}}>Home</a>
            <a href="/about" style={{float:'left',
        display:'block',
        color:'#f2f2f2',
        textAlign:'center',
        padding:'14px 20px',
        textDecoration:'none'}}>About</a>
            <a href="/contact" style={{float:'left',
        display:'block',
        color:'#f2f2f2',
        textAlign:'center',
        padding:'14px 20px',
        textDecoration:'none'}}>Contact</a>
        </div>
    </nav>
    <div className='dashboard-container'>
        <header className='dashboard-header'>
            <h1>Welcome back,{userName}👋</h1>
            <p>Ready to journal your dev journey today?</p>
        </header>

        <section className='quick-actions'>
            <button className='button-primary'>➕New Journal Entry</button>
            <button className='button-secondary'>📖View All Entries</button>
        </section>

        <section className='new-journal'>
            <h2>Enter New Journal</h2>
                <input type='text'
                value={date}
                placeholder='Enter date(MM-DD-YYYY)'
                onChange={(e)=>setDate(e.target.value)}/>
                <textarea 
                value={note}
                rows="5" 
                placeholder='Enter your note'
                onChange={(e)=>setNote(e.target.value)}/>
                <button onClick={addNote}>Add journal</button>
        </section>

        <section className='recent-entries'>
            <h2>🕛Recent Entries</h2>
            {journals.map((journal)=>(<div key={journal.id} className='entry-card'>
                <h3>{journal.date}</h3>
                <p>{journal.note}</p>
                <button className='delete-button' 
                onClick={()=>deleteNote(journal.id)}>🗑️</button>
            </div>))}
        </section>
        <section className='progress-stats'>
            <h2>Your Progress</h2>
            <div className='stats-grid'>
                <div className='stats-card'>
                    <h3>10</h3>
                    <p>Total Entries</p>
                </div>
                <div className="stats-card">
                    <h3>6 days</h3>
                    <p>Longest Streak</p>
                </div>
                <div className="stats-card">
                    <h3>3</h3>
                    <p>Tags Used</p>
                </div>
            </div>
        </section>
    </div>
    </>);
}
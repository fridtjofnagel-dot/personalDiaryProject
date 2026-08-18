import { useState } from 'react';
import { storeEntries } from '../storage/diaryEntriesStorage';


const AddEntryForm = () => {

    const [newEntry, setNewEntry] = useState('');
    const [error, setError] = useState(false)

    const handleAddEntry = (e) => {
        e.preventDefault(); // this stops the browser from reloading the page if entry is submitted

    
        if (!newEntry) {
            setError(true);
            return;
        }
        
        setError(false);
    
    };
    
    return (
        <form onSubmit={handleAddEntry}>
            <div role="alert" className="alert alert-warning">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>There must have happened something today. Yes, your life is not that exicting, but come on....you're not that boring!!!</span> 
            </div>
            
            <button type="submit">Save</button>
        </form>
    );
}

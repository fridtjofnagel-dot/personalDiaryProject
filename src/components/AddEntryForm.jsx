import { useState } from 'react';
import { storeEntries, getEntries  } from '../storage/diaryEntriesStorage';


const AddEntryForm = ({ onEntryAdded }) => {.  // "onEntryAdded" = Parameter, ({}= Destruction to access the argument without "props"
                                                // "onEntryAdded" is a callback-function, so we can use 
                                                // the argument in the parentfunction! React normaly just 
                                                // can use arguments from top to bottom! 

    const [newEntry, setNewEntry] = useState('');  //newEntry is state-variable not a component,
                                                    // setNewEntry is a function that tells React
                                                    // if something changed but only if called
                                                    // useState('') is the hook that sets the first value
    const [error, setError] = useState(false) //

    const handleAddEntry = (e) => { // local function! event-handler (e) is event
        e.preventDefault(); // this stops the browser from reloading the page if entry is submitted

        
        if (!newEntry.trim()) {. //.trim is a string-methods that deletes all " ",
                                // so a "    " will be read as an empty form
            setError(true);
            return;
        }
        
        const entry = {         // local variable
            id: Date.now(),
            text: newEntry
        };

        const currentEntries = getEntries()
        storeEntries([entry, ...currentEntries])

        setError(false);
        setNewEntry(newEntry)

        if (onEntryAdded) {         // this is for safety, so the app doesn't crash
                                    // 
            onEntryAdded(entry);
        }
    
    };
    
    return ( // onSubmit is an event listener, who gets the prop as value after the event is clicked
        <form onSubmit={handleAddEntry}>
            {error && (                     // 
                                            //this catches the setError(true) from handleAddEntry
                <div role="alert" className="alert alert-warning">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>There must have happened something today. Yes, your life is not that exicting, but come on....you're not that boring!!!</span> 
                </div>
            )}

            <textarea
                value={newEntry}
                onChange={(e) => {
                    setNewEntry(e.target.value);
                    if(error) setError(false);
                }}
                placeholder="Please write something...pleeeaaaaasee"
                className="textarea textarea-bordered w-full"
                rows={3}
            />
            <button type="submit" className="btn btn-primary self-end">Save</button>
        </form>
    );
}

export default AddEntryForm   // "default" - if a file got ONE main-component (name can be written differently in other files)
                              // "named-export" used if a lot of smaler functions which need 
                              // to have specific name 
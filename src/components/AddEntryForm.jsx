import {storeDiary} from "../storage/localStorage"
import { useState } from 'react'

function AddEntryForm () {
    const
    const [newEntry, setNewEntry] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // stops the refresh of the whole page when nothing is handled to the arroow-function
        
        if(!newEntry) return alert('You did not just lay in Bed! Oooor did you?')
        
        const entry = {id: new Date(), title: newEntry}
        storeDiary([entry, ...entriesState.entries]);
        entriesDispatch()
    }
    return (
        <div className="w-full max-w-md space-y-8 bg-white rounded-lg shadow p-8">
            <h3 className="text-2xl bg-amber-950">Fill in new Entry to your Diary</h3>
            <form
                onSubmit={handleSubmit}
                className="space-x-1.5 border-4 p-4 rounded-b-box">
                <input
                    name="message"
                    type="text"
                    placeholder="pleeeeeeeaaassseee type something! You're not thaaaat booooring"
                    className="max-w-full bg-amber-200"
                />
                <button
                    type="submit"
                    className="text-2xl rounded-b-3xl"
                >
                    Save your Adventure
                </button>
            </form>
        </div>
    )
}

export default AddEntryForm
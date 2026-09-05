import { storeDiary } from "../storage/localStorage"
import { useState } from 'react'
import { useApp } from '../conext/index'

function AddEntryForm () {
    const  {diary, setDiary } = useApp();
    const [newEntry, setNewEntry] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // stops the refresh of the whole page when nothing is handled to the arroow-function
        
        if(!newEntry.trim()) { 
            return alert('You did not just lay in Bed! Oooor did you?')
        }

        const entry = {id: Date(), title: newEntry}
        const updatedDiary = [entry, ...diary]

        setDiary(updatedDiary);

        storeDiary(updatedDiary)

        setNewEntry('')
    }
    return (
        <div className="fieldset bg-amber-200">
            <h2 className="bg-amber-200">Fill in new Entry to your Diary</h2>
            <form
                onSubmit={handleSubmit}
                className="fieldset bg-amber-100 p-10">
                <input
                    onChange={(e) => setNewEntry(e.target.value)}
                    value={newEntry}
                    name="message"
                    type="text"
                    placeholder="pleeeeeeeaaassseee type something! You're not thaaaat booooring"
                    className="text"
                />
                <button
                    type="submit"
                    className="text-2xl bg-amber-500 b-xl"
                >
                    Save your Adventure
                </button>
            </form>
        </div>
    )
}

export default AddEntryForm
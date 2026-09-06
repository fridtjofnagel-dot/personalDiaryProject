import { storeDiary } from '../storage/localStorage'
import { useApp } from '../conext/AppContext'


function EntryCard({entry}) {
    const  {diary, setDiary } = useApp();

    const handleDelete = () => {
        const updatedDiary = diary.filter((entryDel) => entryDel.id !== entry.id)  
        storeDiary(updatedDiary);
        return updatedDiary
        


        // entryDispatch({ type: 'Remove_Entry', entry});
    }

    return (
        <div className="card bg-accent w-96 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">entry - {entry.id}</h2>
                <p>{entry.title}</p>
                <button onClick={() => setDiary(handleDelete(entry))}>Delete Entry</button>            
            </div>
        </div>
    ) 
}

export default EntryCard
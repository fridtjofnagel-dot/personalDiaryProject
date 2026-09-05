import { storeDiary } from '../storage/localStorage'

function EntryCard({entry}) {

    const handleDelete () => {
        const updatedDiary = diary.filter(())
    }

    return (
        <div className="card bg-accent w-96 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">entry - {entry.id}</h2>
                <p>{entry.title}</p>
                <button>Delete Entry</button>            
            </div>
        </div>
    ) 
}

export default EntryCard
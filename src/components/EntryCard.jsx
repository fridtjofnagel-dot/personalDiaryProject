function EntryCard({entry}) {

    return (
        <div className="card bg-accent w-96 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">entry #{entry.id}</h2>
                <p>{entry.title}</p>            
            </div>
        </div>
    ) 
}

export default EntryCard
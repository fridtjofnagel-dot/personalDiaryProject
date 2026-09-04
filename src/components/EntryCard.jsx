function EntryCard({entry}) {

    return
    <div className="card bg-accent w-96 shadow-sm">
        <div className="card-body">
            <h2 className="card-title">Entrynumber</h2>
            <p>${entry}</p>            
        </div>
    </div>
}

export default EntryCard
import DiaryEntryCard from './DiaryEntryCard';

const getItem = (key) => {
    const value = JSON.parse(localStorage.getItem(key));
        if(Array.isArray(value)) {
        return value || []
        }
        return []

    if (entries.length === 0) {
        ul.innerHTML = '<li>No entries in your diary.</li>';
        } else {
        
        return (
            <ul className='list bg-base-100 rounded-box shadow-md'>
                {entriesState.entries.map((entry) => (
                    <DiaryEntryCard key={entry.id} entry={entry} entriesState={entriesState} entriesDispatch={entriesDispatch}/>
                ))}
            </ul>
        )}
    }

export default EntriesList
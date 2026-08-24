import { storeEntries } from "../storage/diaryEntriesStorage";

function DiaryEntryCard ({entry, entriesState, entriesDispatch}){

    const handleDelete = () => {}
        const updatedEntries = entriesState.entries.filter((e) => e.id !== entry.id);
        storeEntries(updatedEntries);
        entriesDispatch({ type: 'Remove_Entries', entry });
    };
    

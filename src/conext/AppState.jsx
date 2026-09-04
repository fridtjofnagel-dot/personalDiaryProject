import { useState, useEffect, useReducer } from 'react';
import { AppContext } from '.';
import { getDiary } from '../storage/localStorage';


// import { fetchEntries } from '../server';

function AppState({ children }) {
    const [ diary, setDiary ] = useState(getDiary())

    return (
        <AppContext.Provider
            value={{
                diary,
                setDiary
            }}
        >
            {children}
        </AppContext.Provider>
        
    )




}

export default AppState
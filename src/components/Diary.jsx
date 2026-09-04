import { useEffect, useState } from 'react';
// import { fetchEntries } from '../server';
import { EntryCard } from '.'
import { useApp } from '../conext';

function Diary () {

    useEffect(() => {
        getDiary(setEntries);
    },[]);

    return (
        <div className='flex flex-col justify-center items-center gap-3'>
            <h2 className='text-xl font-bold'>Diary</h2>
            <div className='flex flex-wrap justify-center items-center gap-4'>
                {diary.map((d) => (
            <EntryCard key={d.id} entry={d} />
            ))}
            </div>
        </div>
    )

}

export default Diary
import { useEffect, useState } from 'react';
// import { fetchEntries } from '../server';
import { EntryCard } from '.'
import { useApp } from '../conext';
import { getDiary } from '../storage/localStorage'

function Diary () {

    const { diary } = useApp();

    return (
        <div className='flex flex-col justify-center items-center gap-3'>
            <h2 className='text-xl font-bold'>Diary</h2>
            <div className='flex flex-wrap justify-center items-center gap-4'>
                {diary.map((item) => (
                    <EntryCard key={item.id} entry={item} />
                ))}
            </div>
        </div>
    )

}

export default Diary
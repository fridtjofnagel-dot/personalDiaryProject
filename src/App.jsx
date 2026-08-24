//import { useState } from 'react';
//import { getEntries } from './storage/diaryEntriesStorage';
import  AddEntryForm  from './components/AddEntryForm';
import EntriesList from './components/EntriesList'

const App = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold underline'>My personal Diary</h1>
      <AddEntryForm/>
      <EntriesList/>
    </div>
  )
};

export default App;
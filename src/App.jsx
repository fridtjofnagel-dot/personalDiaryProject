import { useState } from 'react'
import './index.css'
import AboutMe from "./components/AboutMe";
import NavigationBar from "./components/NavigationBar"
import AddEntryForm from "./components/AddEntryForm"

function App() {
  const [HomePage, setHomePage] = useState(true);
  const [AboutMePage, setAboutMePage] = useState(false);

  return (
    <div>
      <NavigationBar setHomePage={setHomePage} setAboutMePage={setAboutMePage} className='bg-amber-300'/>
      <main className='bg-amber-600 flex flex-col w-screen p-105'>
        {HomePage && <AddEntryForm 
        entriesState={entriesState} 
        entriesDispatch={entriesDispatch} /> }
        {AboutMePage && <AboutMe />}
      </main>
    </div>
  )
}





export default App

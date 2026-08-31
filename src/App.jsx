import { useState } from 'react'
import './index.css'
import { Navbar, AboutMe } from "./components";

function App() {
  const [homePage, setHomePage] = useState(true);
  const [AboutMePage, setAboutMePage] = useState(false);

  return (
    <div>
      <Navbar setHomePage={setHomePage} setAboutMePage={setAboutMePage} className='bg-amber-300'/>
      <main className='bg-amber-500 flex flex-col w-screen min-h-30 p-5'></main>
    </div>
  )
}

export default App

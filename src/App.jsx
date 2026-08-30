import { useState } from 'react'
import './index.css'
import { Navbar, AboutMe } from "./components";

function App() {
  const [homePage, setHomePage] = useState(true);
  const [cartPage, setCartPage] = useState(false);
  const [userProfilePage, setUserProfilePage] = useState(false);

  return (
    <div>
      <h1>uhdaisascujxaleucabfvejulb.jdksbas</h1>
      <Navbar />
      <AboutMe />
    </div>
  )
}

export default App

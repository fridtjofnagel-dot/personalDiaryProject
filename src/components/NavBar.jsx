import { NavigationBtn } from '.';

function Navbar({setHomePage, setAboutMePage}) {
  return (
    <nav className='bg-primary text-white w-screen flex justify-between items-center p-2 gap-3'>
      <div>
        <h1>Diary</h1>
      </div>
      <ul className='flex justify-center items-center gap-3'>
        <li>
          <NavigationBtn
            page='Home'
            setHomePage={setHomePage}
            setAboutMePage={setAboutMePage}
          />
        </li>
        <li>
          <NavigationBtn
            page='About Me'
            setHomePage={setHomePage}
            setAboutMePage={setAboutMePage}      
          />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
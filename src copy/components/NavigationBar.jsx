import { NavLink } from 'react-router-dom';

function NavigationBar() {
  return (
    <nav className='bg-emerald-300 flex justify-between items-center p-3 gap-4'>
      <div>
        <h1>Diary</h1>
          <ul className='flex justify-center items-center gap-3'>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'btn btn-ghost text-secondary' : 'btn btn-ghost text-white')}
                to='/'
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'btn btn-ghost text-secondary' : 'btn btn-ghost text-white')}
                to='/profile'
              >
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
    </nav>

  )
}

export default NavigationBar
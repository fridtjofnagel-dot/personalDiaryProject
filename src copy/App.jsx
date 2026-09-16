import { AppState } from './conext';
import { GeneralLayout } from './layouts';
import { Home, UserProfile } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
      <AppState>
        <Routes>
          <Route path='/' element={<GeneralLayout />}>
            <Route index element={<Home />} />
            <Route path='/profile' element={<UserProfile />} />
          </Route>
        </Routes>
      </AppState>
    </Router>
  )
}


export default App

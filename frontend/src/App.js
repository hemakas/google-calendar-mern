import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages and components
import Home from './pages/Home'
import Events from './pages/Events'
import BSNavbar from './components/BSNavbar';

function App() {
  return (
    <div className="App">
      
        <BrowserRouter>

          {/* bootstrap nav bar */}
          <BSNavbar />

          {/* pages */}
          <div className='pages'>
            <Routes>
              <Route path="/" element={<Home />}/>
            </Routes>
            <Routes>
              <Route path="/events" element={<Events />}/>
            </Routes>
          </div>
        </BrowserRouter>

    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages and components
import BSNavbar from './components/BSNavbar';

import Home from './pages/Home'

// event routes
import EventIndex from './pages/Events/Index'
import EventCreate from './pages/Events/Create';

// user routes
import UserIndex from './pages/Users/Index'
import UserCreate from './pages/Users/Create';


function App() {
  return (
    <div className="App">
      
        <BrowserRouter>

          {/* bootstrap nav bar */}
          <BSNavbar />

          <div className='pages'>
            {/* home */}
            <Routes><Route path="/" element={<Home />}/></Routes>
            
            {/* event index */}
            <Routes><Route path="/events" element={<EventIndex />}/></Routes>

            {/* event create */}
            <Routes><Route path="/event/create" element={<EventCreate />}/></Routes>

            {/* user index */}
            <Routes><Route path="/users" element={<UserIndex />}/></Routes>

            {/* user create */}
            <Routes><Route path="/user/create" element={<UserCreate />}/></Routes>
          </div>
        </BrowserRouter>

    </div>
  );
}

export default App;

import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import  Home from './pages/Home';
import  Create from './pages/Create';
import  Update from './pages/Update';
// import SignUp from "./pages/SignUp";
// import SignIn from "./pages/SignIn";
// import LandingPage from "./pages/LandingPage";
import './App.css';

function App() {
  return (

    <BrowserRouter>
        <div className='app'>
            <nav>
                <h1>Smoothies</h1>
                <Link to="/" className='nav-link'>Home</Link>
                <Link to="/create" className='nav-link'>create New Smoothie</Link>
                {/*<Link to="/" className='nav-link'>Landing Page</Link>*/}
            </nav>

            <Routes>
                {/*<Route path="/" element={<LandingPage />} />*/}
                {/*<Route path="/signUp" element={<SignUp />} />*/}
                {/*<Route path="/signIn" element={<SignIn />} />*/}
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/:id" element={<Update />} />

            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;

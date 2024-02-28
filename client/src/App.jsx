import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import About from './pages/About';
import SignOut from './pages/SignOut';
import Profile from './pages/Profile';

export default function App() {
  return (<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/SignIn" element={<SignIn/>}/>
    <Route path="/Profile" element={<Profile/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/SignOut" element={<SignOut/>}/>
  </Routes>
  </BrowserRouter>)
}

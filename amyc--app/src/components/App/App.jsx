import './App.css';
import {Route, Routes} from 'react-router-dom';
import Login from '../../Pages/Unauthenticated/Login';
import ResetPass from '../../Pages/Unauthenticated/ResetPass';
import Home from '../../Pages/Unauthenticated/Home';
import Contact from '../../Pages/Unauthenticated/Contact';
import About from '../../Pages/Unauthenticated/About';


function App() {
  let authenticated = false;

  if (!authenticated) {
    return (
      <div className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login/>} />
            <Route path='/forgot-password' element={<ResetPass/>}/>
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
      </div>
    );
  }
  else return (
    <div className='App'>
      <div className='main'>
        <h1>Authenticated Pages</h1>
      </div>
    </div>
  )
}

export default App;

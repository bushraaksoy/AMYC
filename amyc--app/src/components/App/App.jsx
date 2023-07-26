import './App.css';
import {Route, Routes} from 'react-router-dom'
import Login from '../../Pages/Unauthenticated/Login'
import ResetPass from '../../Pages/Unauthenticated/ResetPass';
import Home from '../../Pages/Unauthenticated/Home'


function App() {
  let authenticated = true;

  if (!authenticated) {
    return (
      <div className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login/>} />
            <Route path='/forgot-password' element={<ResetPass/>}/>
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

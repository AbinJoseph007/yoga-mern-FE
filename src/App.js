import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Authentication from './components/Authentication';
import Cource from './pages/Cource';
import Teacherptofile from './pages/Teacherptofile';
import Teacherauth from './components/Teacherauth';
import Dashbord from './pages/Dashbord';
import { useContext } from 'react';
import { isAuthTokenContext } from './context/ContextShare';

function App() {

  const {isAuthToken , setIsAuthToken}= useContext(isAuthTokenContext)

  return (
    <div className="App">
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Authentication/>}/>
        <Route path='/register' element={<Authentication register/>}/>

        <Route path='/telogin' element={<Teacherauth/>}/>
        <Route path='/teregister' element={<Teacherauth registers/>}/>

        <Route path='/cources' element={<Cource/>}/>
        <Route path='/profile' element={<Teacherptofile/>}/>
        <Route path='/dashbord' element={isAuthToken? <Dashbord/>:<Home/>}/>

      </Routes>
     

    </div>
  );
}

export default App;

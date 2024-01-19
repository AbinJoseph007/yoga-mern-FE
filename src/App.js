import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Authentication from './components/Authentication';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Authentication/>}/>
        <Route path='/register' element={<Authentication register/>}/>

      </Routes>
      <Footer/>

    </div>
  );
}

export default App;

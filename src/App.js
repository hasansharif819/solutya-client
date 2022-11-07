import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login/Login';
import Header from './components/Header/Header';
import Signup from './components/Login/Signup/Signup';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/product' element={<Products />}></Route>


      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

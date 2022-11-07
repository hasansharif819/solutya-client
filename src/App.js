import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login/Login';
import Header from './components/Header/Header';
import Signup from './components/Login/Signup/Signup';
import Products from './components/Products/Products';
import Dashbord from './components/Dashbord/Dashbord';
import Users from './components/Dashbord/Users/Users';
import AddProducts from './components/Dashbord/AddProducts/AddProducts';
import Manages from './components/Dashbord/Manages/Manages';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/' element={<Products />}></Route>

        <Route path='/dashboard' element={<Dashbord />}></Route>
        <Route path='/dashboard/user' element={<Users />}></Route>
        <Route path="/dashboard/addProduct" element={<AddProducts></AddProducts>}></Route>
        <Route path="/dashboard/manages" element={
          <RequireAuth><Manages></Manages></RequireAuth>
        }></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomeScreen from './pages/HomeScreen';
import Login from './pages/Login'
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Profile from './pages/Profile';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  },[]);

  return (
    <div className="App">
      
        {!user ? (
          <Routes>
            <Route exact path='/login' element={<Login />} />
          </Routes>          
        ) : (
          <Routes>
            <Route exact path='/profile' element={<Profile />} />
            <Route exact path="/" element={<HomeScreen />} />            
          </Routes>
        )}
      
    </div>
  );
}

export default App;

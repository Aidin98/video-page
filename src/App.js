import React, { useEffect, useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Services from './components/pages/Services'


import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Loading from './Loading';
function App() {
  const  [loading,setLoading]=useState(false)
  useEffect(()=>{
      const timer = setTimeout(() => {
        setLoading(true)
        console.log('uslo je timeout')
        console.log(loading)
  }, 6000);
  return () => clearTimeout(timer);
  },[])
  return (
    <>
    {loading ? (
      
    
<Router>
    
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/services' component={Services}/>
        <Route path='/products' component={Products}/>
        <Route path='/sign-up' component={SignUp}/>
      </Switch>
      </Router>
    ):(
      <Loading />
    )}
    
    </>
  );
}

export default App;

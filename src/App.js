import './App.css';
import NewsList from './components/NewsList';
import Header from './components/Header';
import React, { useState, useCallback } from 'react';
import SignUp from './components/SignUp';
function App() {
  
  const [category, setCategory] = useState('headline');

  const changeCategory = useCallback((category)=> {
    console.log('gi')
    setCategory(category);
  }, [])

  return (
    <>
    <Header changeCategory={changeCategory}></Header>
    <SignUp></SignUp>
    <NewsList category={category} />
    </>
  );
}

export default App;

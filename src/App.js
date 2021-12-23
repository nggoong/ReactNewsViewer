import './App.css';
import NewsList from './components/NewsList';
import Header from './components/Header';
import React, { useState, useCallback } from 'react';
import SignUp from './components/SignUp';
function App() {
  
  const [category, setCategory] = useState('headline');
  const [modalBool, setModalBool] = useState(false);

  const changeCategory = useCallback((category)=> {
    setCategory(category);
  }, [])

  const modalToggle = () => {
    setModalBool((modalBool) => !modalBool);
    console.log('heeloo')
  }

  return (
    <>
    <Header changeCategory={changeCategory} modalToggle={modalToggle}></Header>
    {modalBool? <SignUp modalToggle={modalToggle}/>:null}
    <NewsList category={category} />
    </>
  );
}

export default App;

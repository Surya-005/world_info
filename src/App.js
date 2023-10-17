import { useEffect, useState } from 'react';
import './App.css';
import Heading from './heading';
import Main from './main';
import { Route, Routes } from "react-router-dom";
import Sub from './sub';

function App() {
let [data,setdata]=useState([])
let [error,seterror]=useState(null)

useEffect(()=>{
  const fetch_api=async()=>{
    let fetch_data=await fetch("https://restcountries.com/v3.1/all");
    let response=await fetch_data.json()
    setdata(response)
  }
  fetch_api()
},[])
  return (
    <>
    <Heading/>
    <Routes>
      <Route path="/" element={ <Main  data={data}/>}/>
      <Route path="/sub" element={<Sub />}/>
    </Routes>
   
    </>
    );
}

export default App;

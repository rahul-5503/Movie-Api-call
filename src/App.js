import { useEffect, useState } from 'react';
import './App.css';
import {FaSearch} from 'react-icons/fa';
import Footer from './Footer.js';

function App() {

const [endPoint, SetendPoint]=useState('');

const [container,SetContainer]=useState([]);

const [finalpoint,SetFinalpoint]=useState('');

useEffect(()=>{
fetchme()
},[finalpoint]);

const fetchme=()=>{

  fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=+${endPoint}`,{
    "method": "GET",
    "headers": {
      "X-RapidAPI-Key": "Enter your Key that can avaliable in rapied api",
      "X-RapidAPI-Host":"Enter your host ##3"
    }
  }).then(response=>{
    return response.json();
  })
  .then(data =>{
    SetContainer(data.d) 
  })
  .catch(error=>{
    console.log(error);
  });
}
 
 const handleChange=(e)=>{
  SetendPoint(e.target.value);
 }
 
 const submitHandler=(e)=>{
  e.preventDefault();
 SetFinalpoint(endPoint);
 }

  return (
  <>
   <header className='bg-blue-200 shadow-md'>
<div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
       <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-black'>star</span>
            <span className='text-blue-500'>movie</span>
        </h1>
      <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input type='text' 
          placeholder='search...' 
          className='bg-transparent focus:outline-none w-24 sm:w-64'
          onChange={handleChange}/>
          <FaSearch className='text-slate-600' onClick={ submitHandler}/>
        </form>
    </div>
    </header>
    <div className="mt-8 grid md:grid-cols-3 lg:grid-cols-4 items-center justify-center md:gap-x-8 lg:gap-x-16 gap-y-8 mx-auto p-3 ">
      {container.map((item,index)=>{ 
        return(
          <div key={index} className="h-100 border-3 border-burlywood mx-auto p-5 transition-transform transform-gpu hover:scale-105 hover:shadow-md hover:shadow-blue">
            <img src={item.i.imageUrl} alt=""className='max-w-250' />
          <p>{item.l}</p>
          <p>{item.s}</p>
        </div>)
      })}
      </div>
      <hr/>
    <Footer/>
  </>
   );
}

export default App;
 

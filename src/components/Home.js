import React,{useState,useEffect} from 'react'
import Header from './Header';
import ShowCard from './ShowCard';

const Home = () => {

  const [tvShows,setTvShows] =  useState([]);

  useEffect(()=>{
       getShows();
  },[]);

  async function getShows(){
      const data= await fetch("https://api.tvmaze.com/search/shows?q=all");
      const json= await data.json();
      console.log(json);
      setTvShows(json);
  }

  return (
    <div className='min-h-full h-fit w-full bg-black'>
         <Header/>
         <div className='text-white text-xl my-8 px-20'>
           <p>"Welcome to <span>TV-maze</span>, where entertainment knows no boundaries! Dive into a world of endless streaming possibilities with our vast library of movies, series, and exclusive content. Immerse yourself in the ultimate streaming experience – anytime, anywhere. Your entertainment, your way."</p>
         </div>
         <div className="flex flex-wrap px-20 gap-y-12 justify-between">
             { tvShows?.map((show)=>{
                 return (
                      <ShowCard key={show?.show?.id} {...show?.show}/>
                 )
             })}
          </div>
    </div>
  )
}

export default Home
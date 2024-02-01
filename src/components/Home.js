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
    <div className='h-full w-full bg-black'>
         <Header/>
         <div className="flex flex-wrap px-2 gap-8">
             { tvShows?.map((show)=>{
                 return (
                    <ShowCard key={show.show.id} {...show.show}/>
                 )
             })}
          </div>
    </div>
  )
}

export default Home
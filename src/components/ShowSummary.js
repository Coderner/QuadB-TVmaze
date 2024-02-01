import React,{useEffect, useState} from 'react'
import {useParams} from "react-router-dom";

const ShowSummary = () => {

  const {showId} = useParams();
  const [tvShow,setTvShow] =  useState();

  useEffect(()=>{
       getShows();
  },[]);

  async function getShows(){
      const data= await fetch("https://api.tvmaze.com/search/shows?q=all");
      const json= await data.json();
      console.log(json);
      const show = json.filter((item)=> (item.show.id===Number(showId)))
      setTvShow(show);
      console.log(tvShow);
  }

  return (
    <div className='min-h-full h-fit w-full bg-black text-white py-8 px-20 '>
        {
         tvShow && 
          <div>
            <img src={tvShow[0]?.show?.image?.medium} className="h-64 w-64 mx-auto mb-16"/>
            <div className='flex gap-4 my-4 text-red-500'>
              <h3 className="font-semibold">Runtime: {tvShow[0]?.show?.averageRuntime} min</h3>
              <h3 className="font-semibold">Language: {tvShow[0]?.show?.language} </h3>
              <h3 className="font-semibold">Premiered on: {tvShow[0]?.show?.premiered}</h3>
              <h3 className="font-semibold">Status: {tvShow[0]?.show?.status}</h3>
            </div>
            <h6 className='text-lg'>{tvShow[0]?.show?.summary}</h6>
          </div>
        }
        <button className='my-4 border border-white text-lg w-fit p-2'>Buy Tickets</button>
    </div>
  )
}

export default ShowSummary
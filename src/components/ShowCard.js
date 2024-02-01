import React from "react";
import {Link} from "react-router-dom";

const ShowCard = ({
    name, image, averageRuntime, language, status, premiered, id
}) =>{
    return(
       <div className="w-full sm:w-[48%] xl:w-[30%] p-5 rounded-2xl bg-black border border-white text-white">
         <Link to={"/show/"+id}>
           <img src={image?.original} className="h-[80%] w-[80%] mx-auto"/>
           <h3 className="font-semibold text-lg text-center">{name}</h3>
           <h3 className="font-semibold text-xs text-center">Runtime: {averageRuntime} min | Language: {language} </h3>
           <h3 className="font-semibold text-xs text-center">Premiered on: {premiered}</h3>
           <h3 className="font-semibold text-xs text-center">Status: {status}</h3>
        </Link>
       </div>
    )
}

export default ShowCard;
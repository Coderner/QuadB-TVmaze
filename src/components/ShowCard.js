const ShowCard = ({
    name, image
}) =>{
    return(
       <div className="w-1/4 p-2 h-40 shadow-md bg-white">
           <img src={image?.medium}/>
           <h3 className="font-semibold text-l">{name}</h3>
           {/* <h3 className="font-semibold text-l">{language}</h3>
           <h3 className="font-semibold text-l">{rating}</h3> */}
       </div>
    )
}

export default ShowCard;